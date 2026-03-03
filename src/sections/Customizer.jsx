import { useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Send, Maximize2, RotateCcw, MousePointer2 } from 'lucide-react';

const Customizer = ({ externalImage }) => {
  const [step, setStep] = useState(1);
  const [zoom, setZoom] = useState(false);
  
  const [selection, setSelection] = useState({
    shape: 'Round',
    pattern: 'Solid', 
    activeColor: '#b91c1c',
    panelColors: {},
    sticker: 'None',
    stickerColor: '#000000' // Default to black for better contrast on white mode
  });

  const rawRotateY = useMotionValue(0);
  const rawRotateX = useMotionValue(0);
  const smoothRotateY = useSpring(rawRotateY, { stiffness: 100, damping: 20 });
  const smoothRotateX = useSpring(rawRotateX, { stiffness: 100, damping: 20 });

  const handleSpin = (e, info) => {
    rawRotateY.set(rawRotateY.get() + info.delta.x * 0.6);
    let newX = rawRotateX.get() - info.delta.y * 0.6;
    if (newX > 70) newX = 70;
    if (newX < -70) newX = -70;
    rawRotateX.set(newX);
  };

  const resetSpin = () => {
    rawRotateY.set(0); 
    rawRotateX.set(0);
  };

  const downloadBlueprint = () => {
    const svgElement = document.getElementById('ball-preview-svg');
    if (!svgElement) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = 1000;
      canvas.height = 1000;
      ctx.drawImage(img, 0, 0, 1000, 1000);
      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = `GlobalFooty_Design_${selection.shape}.png`;
      a.click();
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const shapes = {
    Round: { name: 'Sphere (Football)', clip: <circle cx="50" cy="50" r="49" /> },
    Oval: { name: 'Ellipsoid (Rugby)', clip: <ellipse cx="50" cy="50" rx="35" ry="49" /> }
  };

  const patterns = {
    Solid: { name: 'Blank Canvas', panels: [{ id: 's1', d: "M 0,0 L 100,0 L 100,100 L 0,100 Z" }], lines: null },
    Hexagon: {
      name: 'Classic Hex',
      panels: [
        { id: 'h1', d: "M 50,32 L 65,42 L 59,58 L 41,58 L 35,42 Z" },
        { id: 'h2', d: "M 0,0 L 100,0 L 50,32 Z" },
        { id: 'h3', d: "M 100,0 L 100,100 L 59,58 L 65,42 Z" },
        { id: 'h4', d: "M 0,100 L 100,100 L 59,58 L 41,58 Z" },
        { id: 'h5', d: "M 0,0 L 0,100 L 41,58 L 35,42 Z" },
      ],
      lines: <path d="M50,32 L65,42 L59,58 L41,58 L35,42 Z" fill="none" stroke="#1a1a1a" strokeWidth="1" />
    },
    Diamond: {
      name: 'Diamond Core',
      panels: [
        { id: 'd1', d: "M 50,20 L 80,50 L 50,80 L 20,50 Z" }, 
        { id: 'd2', d: "M 0,0 L 100,0 L 50,20 L 20,50 L 0,50 Z" }, 
        { id: 'd3', d: "M 100,0 L 100,50 L 80,50 L 50,20 Z" }, 
        { id: 'd4', d: "M 0,100 L 0,50 L 20,50 L 50,80 Z" }, 
        { id: 'd5', d: "M 100,100 L 50,80 L 80,50 L 100,50 Z" }, 
      ],
      lines: <path d="M 50,20 L 80,50 L 50,80 L 20,50 Z M 0,0 L 50,20 M 100,0 L 50,20 M 0,100 L 50,80 M 100,100 L 50,80" fill="none" stroke="#1a1a1a" strokeWidth="1" />
    },
    Waves: {
      name: 'Ocean Waves',
      panels: [
        { id: 'w1', d: "M 0,0 L 100,0 L 100,30 Q 75,50 50,30 T 0,30 Z" },
        { id: 'w2', d: "M 0,30 Q 25,10 50,30 T 100,30 L 100,60 Q 75,80 50,60 T 0,60 Z" },
        { id: 'w3', d: "M 0,60 Q 25,40 50,60 T 100,60 L 100,100 L 0,100 Z" }
      ],
      lines: <path d="M 0,30 Q 25,10 50,30 T 100,30 M 0,60 Q 25,40 50,60 T 100,60" fill="none" stroke="#1a1a1a" strokeWidth="1" />
    },
    Swirl: {
      name: 'Pro Swirl',
      panels: [
        { id: 'v1', d: "M 0,0 L 100,0 L 100,35 Q 50,50 0,20 Z" }, 
        { id: 'v2', d: "M 0,20 Q 50,50 100,35 L 100,65 Q 50,50 0,80 Z" }, 
        { id: 'v3', d: "M 0,80 Q 50,50 100,65 L 100,100 L 0,100 Z" }, 
      ],
      lines: <path d="M 0,20 Q 50,50 100,35 M 100,65 Q 50,50 0,80" fill="none" stroke="#1a1a1a" strokeWidth="1" />
    },
    Quadrants: {
      name: 'Quad Ribs',
      panels: [
        { id: 'q1', d: "M 0,0 L 50,0 L 50,50 L 0,50 Z" }, 
        { id: 'q2', d: "M 50,0 L 100,0 L 100,50 L 50,50 Z" }, 
        { id: 'q3', d: "M 50,50 L 100,50 L 100,100 L 50,100 Z" }, 
        { id: 'q4', d: "M 0,50 L 50,50 L 50,100 L 0,100 Z" }, 
      ],
      lines: (
        <g stroke="#1a1a1a" strokeWidth="1.5" fill="none">
          <path d="M 50,0 L 50,100 M 0,50 L 100,50" />
          <path d="M 20,-10 A 45,45 0 0,1 20,110" />
          <path d="M 80,-10 A 45,45 0 0,0 80,110" />
        </g>
      )
    }
  };

  const renderSticker = () => {
    if (selection.sticker === 'External' && externalImage) {
      return (
        <motion.g drag dragMomentum={false} onPointerDown={(e) => e.stopPropagation()} className="cursor-grab active:cursor-grabbing">
          <circle cx="50" cy="50" r="18" fill="url(#userUploadedPattern)" stroke="white" strokeWidth="0.2" style={{ filter: `drop-shadow(0px 4px 6px rgba(0,0,0,0.5))` }} />
        </motion.g>
      );
    }

    if (!selection.sticker || selection.sticker === 'None') return null;
    const color = selection.stickerColor;
    
    const stickerData = {
      'Swoosh': <path d="M 22 55 Q 45 70 80 32 Q 50 62 25 45 Z" fill={color} />,
      'Stripes': <g fill={color}><path d="M 38 40 L 45 30 L 48 35 L 41 45 Z"/><path d="M 45 45 L 52 35 L 55 40 L 48 50 Z"/><path d="M 52 50 L 59 40 L 62 45 L 55 55 Z"/></g>,
      'Star': <path d="M 50 25 L 56 42 L 75 42 L 60 52 L 65 70 L 50 60 L 35 70 L 40 52 L 25 42 L 44 42 Z" fill={color} />,
      'Lightning': <path d="M 55 25 L 35 55 L 50 55 L 45 80 L 70 45 L 55 45 Z" fill={color} />,
      'Messi': <text x="50" y="55" fontFamily="cursive, 'Brush Script MT'" fontSize="14" fontStyle="italic" fill={color} textAnchor="middle" transform="rotate(-15 50 50)">L. Messi 10</text>,
      'Ronaldo': <text x="50" y="55" fontFamily="'Times New Roman', serif" fontSize="14" fontWeight="bold" fontStyle="italic" fill={color} textAnchor="middle" transform="rotate(-10 50 50)">CR7</text>,
      'Pele': <text x="50" y="55" fontFamily="cursive, 'Brush Script MT'" fontSize="16" fill={color} textAnchor="middle" transform="rotate(-5 50 50)">Pelé</text>,
      'Maradona': <text x="50" y="55" fontFamily="cursive, 'Brush Script MT'" fontSize="14" fontStyle="italic" fill={color} textAnchor="middle" transform="rotate(-5 50 50)">D. Maradona</text>,
      'Zidane': <text x="50" y="55" fontFamily="'Courier New', Courier, monospace" fontSize="12" fontWeight="bold" fill={color} textAnchor="middle" transform="rotate(-10 50 50)">Z. ZIDANE</text>
    };

    return (
      <motion.g 
        drag 
        dragMomentum={false}
        onPointerDown={(e) => e.stopPropagation()} 
        style={{ filter: `drop-shadow(0px 2px 4px rgba(0,0,0,0.6))` }}
        className="cursor-grab active:cursor-grabbing"
      >
        {stickerData[selection.sticker]}
      </motion.g>
    );
  };

  const handleShapeSelect = (shapeKey) => {
    setSelection(prev => ({ ...prev, shape: shapeKey, pattern: 'Solid', panelColors: {}, sticker: 'None' }));
    resetSpin();
  };

  return (
    <section className="relative min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white py-20 px-4 md:px-8 overflow-hidden select-none transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 tracking-tighter italic text-[#b91c1c] text-center md:text-left">
          Custom Design Lab
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
          
          {/* LEFT: INTERACTIVE 3D BALL PREVIEW */}
          <div 
            className="w-full lg:w-1/2 aspect-square md:aspect-auto md:h-[600px] bg-white dark:bg-[#080808] border border-black/10 dark:border-white/5 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl transition-colors duration-500"
            style={{ perspective: "1000px" }} 
          >
            <motion.div 
              onPan={handleSpin} 
              style={{ 
                rotateY: smoothRotateY, 
                rotateX: smoothRotateX, 
                scale: zoom ? 1.4 : 1, 
                originX: "50%", 
                originY: "50%",
                transformStyle: "preserve-3d" 
              }}
              // Scaled down the ball on mobile so it fits the container
              className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
            >
              <svg id="ball-preview-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] transition-shadow duration-500">
                <defs>
                  <clipPath id="shapeOutline">{shapes[selection.shape].clip}</clipPath>
                  
                  {/* LIVE PREVIEW PATTERN DEFINITION */}
                  <pattern id="userUploadedPattern" x="0" y="0" width="1" height="1" viewBox="0 0 100 100">
                    <image preserveAspectRatio="xMidYMid slice" width="100" height="100" href={externalImage} />
                  </pattern>

                  {/* Adaptive Lighting based on Theme */}
                  <radialGradient id="studioLight" cx="30%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="30%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset="70%" stopColor="#000000" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
                  </radialGradient>
                  <radialGradient id="rimLight" cx="50%" cy="50%" r="50%">
                    <stop offset="85%" stopColor="transparent" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
                  </radialGradient>
                </defs>

                <g clipPath="url(#shapeOutline)">
                  {patterns[selection.pattern].panels.map((panel) => (
                    <path
                      key={panel.id + selection.pattern}
                      d={panel.d}
                      // Default panel color is lighter on white theme, darker on black theme
                      fill={selection.panelColors[panel.id] || "#f0f0f0"}
                      stroke={selection.pattern === 'Solid' ? "none" : "#333333"}
                      strokeWidth="0.5"
                      className={`transition-colors duration-200 hover:brightness-110 ${step === 3 && selection.pattern !== 'Solid' ? 'cursor-crosshair' : ''}`}
                      onClick={() => {
                        if (step === 3) {
                          setSelection(prev => ({ ...prev, panelColors: { ...prev.panelColors, [panel.id]: prev.activeColor } }))
                        }
                      }}
                    />
                  ))}

                  {patterns[selection.pattern].lines && patterns[selection.pattern].lines}
                  
                  {renderSticker()}

                  {/* Studio Lighting Overlays */}
                  <rect x="0" y="0" width="100" height="100" fill="url(#studioLight)" pointerEvents="none" style={{ mixBlendMode: 'overlay' }} />
                  <rect x="0" y="0" width="100" height="100" fill="url(#studioLight)" pointerEvents="none" opacity="0.3" className="dark:opacity-60 transition-opacity duration-500"/>
                  <rect x="0" y="0" width="100" height="100" fill="url(#rimLight)" pointerEvents="none" style={{ mixBlendMode: 'screen' }} />
                </g>
              </svg>
            </motion.div>

            {/* View Controls */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-2 md:gap-3 z-20">
              <button onClick={() => setZoom(!zoom)} className="p-2 md:p-3 bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full hover:bg-[#b91c1c] hover:text-white transition-all shadow-md">
                <Maximize2 size={16} className="md:w-[18px] md:h-[18px]" />
              </button>
              <button onClick={resetSpin} className="p-2 md:p-3 bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full hover:bg-[#b91c1c] hover:text-white transition-all shadow-md">
                <RotateCcw size={16} className="md:w-[18px] md:h-[18px]" />
              </button>
            </div>
            
            {/* Instruction Text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 opacity-60 dark:opacity-40 text-[8px] md:text-[9px] uppercase tracking-widest pointer-events-none w-full">
                <MousePointer2 size={10} className="md:w-3 md:h-3" /> Drag to spin
            </div>
          </div>

          {/* RIGHT: THE 5-STEP CONTROLS */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 bg-white dark:bg-white/[0.02] p-6 md:p-10 rounded-2xl border border-black/5 dark:border-white/5 shadow-xl md:shadow-2xl transition-colors duration-500">
            
            {/* Step Navigation */}
            <nav className="flex justify-start md:justify-between border-b border-black/10 dark:border-white/10 pb-4 md:pb-6 relative overflow-x-auto whitespace-nowrap gap-6 md:gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {['Shape', 'Layout', 'Colors', 'Decals', 'Finalize'].map((name, i) => (
                <button 
                  key={name} 
                  onClick={() => setStep(i+1)}
                  className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all relative pb-2 flex-shrink-0 ${step === i+1 ? 'text-[#b91c1c] font-bold' : 'text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white'}`}
                >
                  {name}
                  {step === i+1 && <motion.div layoutId="underline" className="absolute -bottom-[17px] md:-bottom-[25px] left-0 w-full h-[2px] bg-[#b91c1c]" />}
                </button>
              ))}
            </nav>

            {/* Dynamic Step Content */}
            <div className="min-h-[280px] md:min-h-[320px] py-4">
              <AnimatePresence mode="wait">
                
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="space-y-4 md:space-y-6">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-4 md:mb-6">Select the physical boundary</p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {Object.keys(shapes).map(s => (
                        <button 
                          key={s} onClick={() => handleShapeSelect(s)}
                          className={`py-6 md:py-8 px-2 md:px-4 border rounded-xl text-[9px] md:text-[10px] uppercase tracking-widest transition-all flex flex-col items-center gap-2 ${selection.shape === s ? 'border-[#b91c1c] bg-[#b91c1c]/10 text-[#b91c1c]' : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-black dark:text-white'}`}
                        >
                          <span className="font-bold text-center">{shapes[s].name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="space-y-4 md:space-y-6">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-4 md:mb-6">Select internal panel mapping</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                      {Object.keys(patterns).map(p => (
                        <button 
                          key={p} onClick={() => setSelection(prev => ({ ...prev, pattern: p, panelColors: {} }))}
                          className={`p-4 md:p-6 border rounded-xl transition-all text-[9px] md:text-[10px] uppercase tracking-widest ${selection.pattern === p ? 'border-[#b91c1c] bg-[#b91c1c]/10 text-[#b91c1c]' : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-black dark:text-white'}`}
                        >
                          {patterns[p].name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="space-y-6 md:space-y-8">
                    {selection.pattern === 'Solid' && (
                      <div className="bg-[#b91c1c]/10 border border-[#b91c1c]/30 p-4 rounded-xl text-[9px] md:text-[10px] uppercase tracking-widest text-[#b91c1c] mb-4">
                        Note: You selected a "Solid" canvas. Select a Layout (Step 2) to paint multiple panels.
                      </div>
                    )}
                    <div className="flex justify-between items-center bg-gray-50 dark:bg-black p-4 md:p-5 border border-black/10 dark:border-white/10 rounded-xl shadow-inner transition-colors duration-500">
                        <span className="text-[9px] uppercase tracking-widest text-black/60 dark:text-white/60">Active Paint Brush</span>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white dark:border-white shadow-lg overflow-hidden relative">
                           <input 
                              type="color" 
                              value={selection.activeColor} 
                              onChange={(e) => setSelection(prev => ({ ...prev, activeColor: e.target.value }))}
                              className="absolute -top-2 -left-2 w-16 h-16 cursor-crosshair"
                           />
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 md:pt-8">
                      <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-black/40 dark:text-white/40">Click panels on the ball to paint</p>
                      <button onClick={() => setSelection(prev => ({ ...prev, panelColors: {} }))} className="flex items-center gap-1 md:gap-2 text-[9px] uppercase text-black/60 dark:text-white/60 hover:text-[#b91c1c] dark:hover:text-[#b91c1c] transition-all">
                        <RotateCcw size={12} /> Reset
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="space-y-4 md:space-y-6">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-4 md:mb-6">Drag decal to position</p>

                    <div className="flex justify-between items-center bg-gray-50 dark:bg-black p-4 md:p-5 border border-black/10 dark:border-white/10 rounded-xl shadow-inner mb-4 md:mb-6 transition-colors duration-500">
                        <span className="text-[9px] uppercase tracking-widest text-black/60 dark:text-white/60">Decal Ink Color</span>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black/10 dark:border-white shadow-lg overflow-hidden relative">
                           <input 
                              type="color" 
                              value={selection.stickerColor} 
                              onChange={(e) => setSelection(prev => ({ ...prev, stickerColor: e.target.value }))}
                              className="absolute -top-2 -left-2 w-16 h-16 cursor-crosshair"
                           />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 md:gap-3">
                      {externalImage && (
                        <button 
                          onClick={() => setSelection(prev => ({ ...prev, sticker: 'External' }))}
                          className={`p-2 md:p-3 border rounded-xl text-[8px] md:text-[9px] uppercase transition-all flex flex-col items-center gap-1 ${selection.sticker === 'External' ? 'border-green-500 bg-green-500/10 text-green-500' : 'border-green-500/30 text-green-500/60 hover:border-green-500'}`}
                        >
                          <span className="font-bold">My Design</span>
                        </button>
                      )}
                      {['None', 'Swoosh', 'Stripes', 'Star', 'Lightning', 'Messi', 'Ronaldo', 'Pele', 'Maradona', 'Zidane'].map(st => (
                        <button 
                          key={st} 
                          onClick={() => setSelection(prev => ({ ...prev, sticker: st }))} 
                          className={`p-2 md:p-3 border rounded-xl text-[8px] md:text-[9px] uppercase transition-all ${selection.sticker === st ? 'border-[#b91c1c] bg-[#b91c1c]/10 text-[#b91c1c]' : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-black dark:text-white'}`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="space-y-4 md:space-y-6">
                    <div className="p-6 md:p-8 border border-black/10 dark:border-white/5 bg-gray-50 dark:bg-black rounded-xl text-center transition-colors duration-500">
                        <h4 className="text-[9px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-3">Configuration Ready</h4>
                        <p className="text-xl md:text-2xl font-serif italic text-black dark:text-white">{selection.shape} Edition</p>
                        {selection.sticker !== 'None' && <p className="text-[9px] md:text-[10px] text-[#b91c1c] mt-2 uppercase tracking-widest">Feat. {selection.sticker}</p>}
                    </div>
                    
                    <button onClick={downloadBlueprint} className="w-full bg-black text-white dark:bg-white dark:text-black py-4 md:py-5 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#b91c1c] hover:text-white dark:hover:bg-[#b91c1c] dark:hover:text-white transition-all shadow-lg">
                      Download Blueprint
                    </button>
                    
                    <button onClick={() => window.open(`https://wa.me/YOUR_NUMBER?text=Custom Order: ${selection.shape} ball with ${selection.pattern} pattern and ${selection.sticker} decal.`)} className="w-full border border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 py-4 md:py-5 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 md:gap-3 hover:bg-green-600 hover:text-white dark:hover:bg-green-500 dark:hover:text-black transition-all">
                      <Send size={14} /> Send to Workshop
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customizer;