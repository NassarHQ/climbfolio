import { useState, useEffect, useRef } from 'react';

export default function GearBagPanel({ onNext }) {
  const [isUnzipped, setIsUnzipped] = useState(false);
  const [toolsSpilled, setToolsSpilled] = useState([]);
  const [zipperPosition, setZipperPosition] = useState(0);
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hoveredTool, setHoveredTool] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const containerRef = useRef(null);

  const skills = [
    { name: "JavaScript", icon: "🟨", color: "bg-yellow-500", description: "Dynamic web programming language" },
    { name: "React", icon: "⚛️", color: "bg-cyan-500", description: "Component-based UI library" },
    { name: "Tailwind CSS", icon: "🌬️", color: "bg-blue-500", description: "Utility-first CSS framework" },
    { name: "Java", icon: "☕", color: "bg-orange-600", description: "Object-oriented programming language" },
    { name: "Python", icon: "🐍", color: "bg-green-600", description: "Versatile programming language" },
    { name: "Git", icon: "🔧", color: "bg-gray-600", description: "Version control system" },
    { name: "VSCode", icon: "🖥️", color: "bg-blue-600", description: "Code editor and IDE" },
    { name: "Figma", icon: "🎨", color: "bg-purple-600", description: "Design and prototyping tool" },
  ];

  // Predefined positions to avoid overlap
  const toolPositions = [
    { x: 15, y: 70 }, { x: 35, y: 75 }, { x: 55, y: 72 }, { x: 75, y: 78 },
    { x: 25, y: 85 }, { x: 45, y: 88 }, { x: 65, y: 83 }, { x: 20, y: 95 }
  ];

  // Generate random stars for night sky
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 80; i++) {
      const size = Math.random() < 0.8 ? 1 : 2;
      const opacity = Math.random() * 0.4 + 0.3;
      
      stars.push(
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`, // Keep stars in upper portion
            opacity: opacity,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      );
    }
    return stars;
  };

  const handleBackpackClick = () => {
    if (isUnzipped) return;
    
    setIsUnzipped(true);
    
    // Animate zipper opening
    const zipperInterval = setInterval(() => {
      setZipperPosition(prev => {
        if (prev >= 100) {
          clearInterval(zipperInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 60);

    // Drop tools one by one with smooth timing
    skills.forEach((_, index) => {
      setTimeout(() => {
        setToolsSpilled(prev => [...prev, index]);
      }, 1000 + (index * 150));
    });
  };

  const handleReset = () => {
    setIsUnzipped(false);
    setToolsSpilled([]);
    setZipperPosition(0);
    setSelectedTool(null);
  };

  const handleMouseDown = (e, toolIndex) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    setDraggedItem(toolIndex);
    setDragOffset({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    });
  };

  const handleMouseMove = (e) => {
    if (draggedItem !== null && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - containerRect.left - dragOffset.x) / containerRect.width) * 100;
      const y = ((e.clientY - containerRect.top - dragOffset.y) / containerRect.height) * 100;
      
      // Update position for dragged item
      setToolsSpilled(prev => prev.map(index => 
        index === draggedItem ? { ...index, dragX: x, dragY: y } : index
      ));
    }
  };

  const handleMouseUp = (e) => {
    if (draggedItem !== null) {
      // Check if dropped near backpack for details
      const containerRect = containerRef.current.getBoundingClientRect();
      const dropX = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      const dropY = ((e.clientY - containerRect.top) / containerRect.height) * 100;
      
      // If dropped near backpack area (center-top area)
      if (dropX > 40 && dropX < 60 && dropY < 50) {
        setSelectedTool(skills[draggedItem]);
      }
      
      setDraggedItem(null);
      setDragOffset({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    if (draggedItem !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedItem, dragOffset]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-slate-900 via-blue-900 to-slate-700 font-mono overflow-hidden select-none"
    >
      {/* Night Sky with Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {generateStars()}
      </div>
      
      {/* Lake and Mountain Background */}
      <div className="absolute inset-0">
        {/* Mountains */}
        <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1200 250" preserveAspectRatio="none">
          <path
            d="M0,250 L0,100 L200,60 L350,80 L500,40 L650,70 L800,30 L950,60 L1200,50 L1200,250 Z"
            fill="#1e293b"
            opacity="0.6"
          />
          <path
            d="M0,250 L0,140 L180,110 L320,120 L480,100 L620,115 L780,90 L920,105 L1200,100 L1200,250 Z"
            fill="#334155"
            opacity="0.8"
          />
        </svg>
        
        {/* Lake Surface */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-blue-900/80 to-blue-800/60">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/10 to-transparent animate-pulse"></div>
        </div>
        
        {/* Lake Reflections */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-slate-800/50 to-transparent">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/5 animate-pulse"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${10 + Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 80}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-lg px-6 py-3 mb-4">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${isUnzipped ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`}></div>
              <span className="text-xs text-slate-300 font-bold tracking-wider">
                {isUnzipped ? 'GEAR DEPLOYED' : 'SURVIVAL KIT READY'}
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-2 tracking-wide">LAKESIDE GEAR BAG</h2>
          <p className="text-slate-300 max-w-2xl text-center leading-relaxed">
            {isUnzipped 
              ? "Tools deployed by the mountain lake. Hover to inspect, drag to backpack for details."
              : "Click the backpack to unpack your survival toolkit by the serene lake."
            }
          </p>
        </div>

        {/* Backpack */}
        <div className="relative mb-8">
          <div 
            onClick={handleBackpackClick}
            className={`relative cursor-pointer transition-all duration-300 ${!isUnzipped ? 'hover:scale-105' : ''}`}
          >
            {/* Backpack Body */}
            <div className="relative w-80 h-96">
              {/* Main bag */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-700 to-red-900 rounded-3xl shadow-2xl border-4 border-red-800/50">
                
                {/* Backpack details */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-red-300/30 rounded-full"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-red-300/30 rounded-full"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-6 bg-red-800 rounded-full"></div>
                
                {/* Straps */}
                <div className="absolute -left-2 top-12 w-6 h-32 bg-red-800 rounded-full transform -rotate-12"></div>
                <div className="absolute -right-2 top-12 w-6 h-32 bg-red-800 rounded-full transform rotate-12"></div>
                
                {/* Zipper track */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-80 bg-gray-400 rounded-full"></div>
                
                {/* Zipper */}
                <div 
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-4 bg-yellow-500 rounded-sm shadow-lg transition-all duration-1000 z-20"
                  style={{ 
                    transform: `translateX(-50%) translateY(${zipperPosition * 3.2}px)`,
                  }}
                >
                  <div className="w-2 h-2 bg-yellow-600 rounded-full absolute top-1 left-2"></div>
                </div>

                {/* Opening effect */}
                {isUnzipped && (
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div 
                      className="absolute top-8 left-1/2 w-1 bg-slate-900 transition-all duration-1000 z-10"
                      style={{ 
                        height: `${zipperPosition * 3.2}px`,
                        transform: 'translateX(-50%)'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Click indicator */}
              {!isUnzipped && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center animate-bounce">
                  <div className="bg-yellow-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    CLICK TO UNPACK
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Spilled Tools */}
        <div className="relative w-full max-w-6xl h-96">
          {toolsSpilled.map((toolIndex) => {
            const tool = skills[toolIndex];
            const position = toolPositions[toolIndex];
            const isDragged = draggedItem === toolIndex;
            const isHovered = hoveredTool === toolIndex;
            
            return (
              <div
                key={toolIndex}
                className={`absolute transition-all duration-300 cursor-grab active:cursor-grabbing ${
                  isDragged ? 'z-50 scale-110' : isHovered ? 'z-40 scale-105' : 'z-30'
                } animate-bounce-in`}
                style={{
                  left: isDragged && toolsSpilled.find(t => t === toolIndex)?.dragX 
                    ? `${toolsSpilled.find(t => t === toolIndex).dragX}%` 
                    : `${position.x}%`,
                  top: isDragged && toolsSpilled.find(t => t === toolIndex)?.dragY 
                    ? `${toolsSpilled.find(t => t === toolIndex).dragY}%` 
                    : `${position.y}%`,
                  animationDelay: `${toolIndex * 0.15}s`,
                }}
                onMouseDown={(e) => handleMouseDown(e, toolIndex)}
                onMouseEnter={() => setHoveredTool(toolIndex)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <div className={`${tool.color} rounded-2xl p-4 shadow-xl border-2 border-white/20 backdrop-blur-sm transform transition-all duration-200 ${
                  isHovered ? 'shadow-2xl border-white/40 animate-pulse' : ''
                }`}>
                  <div className="text-center text-white">
                    <div className="text-3xl mb-2 filter drop-shadow-lg">{tool.icon}</div>
                    <div className="text-sm font-bold">{tool.name}</div>
                  </div>
                  
                  {/* Tool status */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  
                  {/* Hover tooltip */}
                  {isHovered && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-slate-600">
                      Drag to backpack for details
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool Details Modal */}
        {selectedTool && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setSelectedTool(null)}>
            <div className="bg-slate-800 rounded-2xl p-8 max-w-md mx-4 border-2 border-slate-600" onClick={(e) => e.stopPropagation()}>
              <div className="text-center">
                <div className="text-6xl mb-4">{selectedTool.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedTool.name}</h3>
                <p className="text-slate-300 mb-6">{selectedTool.description}</p>
                <button
                  onClick={() => setSelectedTool(null)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-4 mt-8">
          {isUnzipped && (
            <button
              onClick={handleReset}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-sm border-2 border-red-500 transition-all transform hover:scale-105"
            >
              🎒 REPACK GEAR
            </button>
          )}
          
          {onNext && toolsSpilled.length === skills.length && (
            <button
              onClick={onNext}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-2xl transition-all transform hover:scale-105 border-2 border-green-500"
            >
              <span className="flex items-center">
                CONTINUE TO ROUTE MAP
                <span className="ml-2 text-xl">⛰️</span>
              </span>
            </button>
          )}
        </div>

        {/* Status */}
        {isUnzipped && (
          <div className="mt-4 text-center">
            <p className="text-slate-400 text-sm font-mono">
              GEAR STATUS: {toolsSpilled.length}/{skills.length} TOOLS DEPLOYED BY THE LAKE
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.3) rotate(-10deg);
          }
          60% {
            opacity: 1;
            transform: translateY(5px) scale(1.05) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
}