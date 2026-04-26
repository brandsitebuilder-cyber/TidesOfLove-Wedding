import React from 'react';

const events = [
  {
    time: '14:00',
    label: 'Ceremony',
    description: 'Beachfront gazebo overlooking the Indian Ocean',
    color: '#FF7F50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    time: '15:30',
    label: 'Cocktail Hour',
    description: 'Poolside canapés, signature cocktails & live acoustic set',
    color: '#20B2AA',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    time: '18:00',
    label: 'Reception & Dinner',
    description: 'Three-course seafood feast under the stars',
    color: '#006994',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    time: '21:00',
    label: 'After-Party',
    description: 'Beach bonfire, dancing & dessert bar',
    color: '#F5DEB3',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      style={{
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
      }}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-ocean mb-2">
            The Celebration
          </h2>
          <div className="w-16 h-1 bg-coral rounded-full mx-auto mb-4" />
          <p className="text-[#1A2F3B]/60 font-body text-base max-w-xl mx-auto">
            15 February 2027 · The Oyster Box Hotel
          </p>
        </div>

        {/* Timeline cards */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral via-teal to-ocean md:-translate-x-0.5 rounded-full" />

          <div className="space-y-8 md:space-y-12">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-start gap-6 md:gap-0"
              >
                {/* Mobile: left side dot */}
                <div
                  className="md:hidden relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: event.color === '#F5DEB3' ? '#006994' : event.color }}
                >
                  {event.icon}
                </div>

                {/* Desktop: alternating layout */}
                <div className={`hidden md:flex w-1/2 ${idx % 2 === 0 ? 'pr-12 justify-end text-right' : 'pl-12'}`}>
                  <div
                    className="rounded-[16px] bg-white shadow-lg border border-sand/30 p-6 hover:shadow-xl transition-shadow max-w-sm"
                  >
                    <span
                      className="inline-block text-xs font-body font-semibold tracking-widest uppercase mb-2"
                      style={{ color: event.color === '#F5DEB3' ? '#006994' : event.color }}
                    >
                      {event.time}
                    </span>
                    <h3 className="font-body font-bold text-lg text-[#1A2F3B] mb-1">
                      {event.label}
                    </h3>
                    <p className="text-[#1A2F3B]/60 font-body text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Desktop: center dot */}
                <div
                  className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-6 h-6 rounded-full border-4 border-white shadow"
                  style={{ backgroundColor: event.color === '#F5DEB3' ? '#006994' : event.color }}
                />

                {/* Desktop: empty spacer for alternating */}
                <div className={`hidden md:flex w-1/2 ${idx % 2 === 0 ? 'pl-12' : 'pr-12'}`} />

                {/* Mobile card (always renders) */}
                <div className="md:hidden flex-1">
                  <div className="rounded-[16px] bg-white shadow-lg border border-sand/30 p-5">
                    <span
                      className="inline-block text-xs font-body font-semibold tracking-widest uppercase mb-1"
                      style={{ color: event.color === '#F5DEB3' ? '#006994' : event.color }}
                    >
                      {event.time}
                    </span>
                    <h3 className="font-body font-bold text-lg text-[#1A2F3B] mb-1">
                      {event.label}
                    </h3>
                    <p className="text-[#1A2F3B]/60 font-body text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
