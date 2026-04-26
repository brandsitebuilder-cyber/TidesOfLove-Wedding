import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
      }}
      className="py-10 bg-ocean-dark text-white/60"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm">
          Sarah &amp; Daniel · 15 February 2027
        </p>
        <p className="font-body text-sm">
          Made with love · Tides of Love
        </p>
        <p className="font-body text-xs text-white/40">
          The Oyster Box Hotel · Umhlanga
        </p>
      </div>
    </footer>
  );
}
