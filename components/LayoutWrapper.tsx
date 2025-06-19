import React from 'react';
import ParticlesBackground from './ParticlesBackground';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Glow, shape, and particles background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 w-full h-0.5 bg-white/30 blur-xl" />
        <div className="absolute top-14 w-full h-0.5 bg-white/15 blur-md" />

        {/* Diamond shapes with balanced visibility */}
        <div className="absolute right-10 top-40 w-[45%] h-[35%] rotate-45 bg-gradient-to-br from-white/20 via-white/10 to-transparent blur-2xl opacity-50" />
        <div className="absolute left-10 top-80 w-[35%] h-[25%] -rotate-45 bg-gradient-to-tr from-white/10 via-white/20 to-transparent blur-2xl opacity-40" />
        <div className="absolute left-[20%] bottom-32 w-[25%] h-[25%] rotate-45 bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl opacity-35" />
        <div className="absolute right-[25%] top-[70%] w-[22%] h-[22%] -rotate-45 bg-gradient-to-br from-white/5 via-white/10 to-transparent blur-2xl opacity-30" />
        <div className="absolute top-[30%] left-[40%] w-[18%] h-[18%] rotate-12 bg-gradient-to-tr from-white/10 via-white/20 to-transparent blur-2xl opacity-40" />

        <ParticlesBackground />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}