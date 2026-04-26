import React from 'react';

const unsplashHero =
  '/images/hero.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
      }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${unsplashHero})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
        <p className="text-coral-light text-lg md:text-xl tracking-widest uppercase font-body font-medium mb-4">
          Destination Wedding
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          Sarah &amp; Daniel
        </h1>
        <div className="w-20 h-0.5 bg-coral mx-auto mb-6 rounded-full" />
        <p className="font-body text-lg md:text-xl text-white/90 mb-2">
          15 February 2027
        </p>
        <p className="font-body text-base md:text-lg text-white/70">
          The Oyster Box Hotel · Umhlanga, South Africa
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase font-body">Scroll</span>
        <svg
          className="w-5 h-5 animate-bounce-down"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
