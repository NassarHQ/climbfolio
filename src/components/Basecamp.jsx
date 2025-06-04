import { useState } from "react";

export default function SOSDevice() {
  const [poweredOn, setPoweredOn] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const handlePowerClick = () => {
    setPoweredOn(true);
    setIsTransmitting(true);
    setTimeout(() => {
      setIsTransmitting(false);
      const gear = document.getElementById("gear");
      gear?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  // Generate random stars for the background
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 200; i++) {
      const size = Math.random() < 0.7 ? 1 : Math.random() < 0.9 ? 2 : 3;
      const opacity = Math.random() * 0.8 + 0.2;
      const twinkleDelay = Math.random() * 3;
      
      stars.push(
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: opacity,
            animationDelay: `${twinkleDelay}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className="relative flex items-start justify-center min-h-screen overflow-hidden pt-32 w-full bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 font-mono">
      {/* Starfield Background */}
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        {generateStars()}
        
        {/* Mountain Silhouettes */}
        <svg className="absolute bottom-0 w-full h-96" viewBox="0 0 1200 400" preserveAspectRatio="none">
          {/* Back mountains */}
          <path
            d="M0,400 L0,200 L150,120 L300,180 L450,100 L600,160 L750,80 L900,140 L1050,60 L1200,120 L1200,400 Z"
            fill="#1e293b"
            opacity="0.6"
          />
          {/* Middle mountains */}
          <path
            d="M0,400 L0,250 L200,180 L350,220 L500,140 L650,200 L800,120 L950,180 L1200,160 L1200,400 Z"
            fill="#334155"
            opacity="0.7"
          />
          {/* Front mountains */}
          <path
            d="M0,400 L0,300 L180,240 L320,280 L480,200 L620,260 L780,180 L920,240 L1200,220 L1200,400 Z"
            fill="#475569"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Spiral Coil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0">
        <svg
          width="30"
          height="600"
          viewBox="0 0 20 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0 
              C15 8, 5 12, 15 20
              C5 28, 15 32, 5 40
              C15 48, 5 52, 15 60
              C5 68, 15 72, 5 80
              C15 88, 5 92, 15 100
              C5 108, 15 112, 5 120
              C15 128, 5 132, 15 140
              C5 148, 15 152, 5 160
              C15 168, 5 172, 15 180
              C5 188, 15 192, 5 200
              C15 208, 5 212, 15 220
              C5 228, 15 232, 5 240
              C15 248, 5 252, 15 260
              C5 268, 15 272, 5 280
              C15 288, 5 292, 15 300
              C5 308, 15 312, 5 320
              C15 328, 5 332, 15 340
              C5 348, 15 352, 5 360
              C15 368, 5 372, 15 380
              C5 388, 15 392, 5 400
              C15 408, 5 412, 15 420
              C5 428, 15 432, 5 440
              C15 448, 5 452, 15 460
              C5 468, 15 472, 5 480
              C15 488, 5 492, 10 500"
            stroke="#9EA8AC"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Transmission Animation */}
      {isTransmitting && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute border-2 border-red-500/20 rounded-full animate-ping"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      )}

      {/* Device with port */}
      <div className="relative mt-24 w-96">
        {/* Semi-circle port */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-yellow-400 rounded-t-full border-2 border-yellow-700 z-10"></div>

        {/* Main Device */}
        <div className="relative z-10 bg-gradient-to-b from-red-600 to-red-800 rounded-2xl shadow-2xl w-full h-[28rem] flex flex-col items-center justify-between p-4 border-4 border-red-700/50">
          {/* Corner dots */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-red-300/30 rounded-full"></div>
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-300/30 rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-red-300/30 rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-red-300/30 rounded-full"></div>

          {!poweredOn ? (
            <>
              {/* Initial Screen */}
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-4 w-full h-24 flex items-center justify-center mb-4 border border-slate-700/50">
                <div className="text-center">
                  <h2 className="text-green-400 font-bold text-lg tracking-wider mb-1">
                    Mo Nassar
                  </h2>
                  <p className="text-slate-300 text-sm">
                    Code creator turning mountain adventures into digital experiences
                  </p>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={handlePowerClick}
                  className="relative bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white font-bold text-lg rounded-full w-40 h-40 shadow-lg border-2 border-red-800 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  SOS
                </button>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-500 rounded-full px-2 py-1 text-xs text-slate-900 font-medium shadow-lg">
                  ACTIVATE
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-3 w-full mt-4">
                <p className="text-slate-300 text-xs text-center leading-relaxed">
                  Emergency portfolio beacon ready for deployment. 
                  Signal strength optimal for reaching potential collaborators 
                  across all digital peaks.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Active State */}
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-4 w-full h-32 flex flex-col justify-center mb-4 border border-green-500/30">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                    <h2 className="text-red-400 font-bold text-sm tracking-wider">
                      SIGNAL TRANSMITTED
                    </h2>
                  </div>
                  <p className="text-white text-xs mb-2">Portfolio coordinates sent successfully</p>
                  <p className="text-green-400 text-xs">Establishing connection to base camp...</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-b from-green-500 to-green-700 text-white font-bold text-sm rounded-full w-24 h-24 shadow-lg border-2 border-green-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse mx-auto mb-1"></div>
                    <div className="text-xs">LIVE</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}