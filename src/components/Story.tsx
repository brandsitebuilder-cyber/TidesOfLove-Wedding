import React from 'react';

const storyPhoto =
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80';

export default function Story() {
  return (
    <section
      id="story"
      style={{
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
      }}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-[20px] overflow-hidden shadow-xl">
              <img
                src={storyPhoto}
                alt="Beach at sunset"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-teal/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-coral/10 -z-10" />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ocean mb-2">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-coral rounded-full mb-8" />

            <div className="space-y-5 text-[#1A2F3B]/80 leading-relaxed text-base md:text-lg">
              <p>
                It all began beneath the waves off the coast of Mozambique. Sarah,
                a marine biologist from Cape Town, was leading a research dive in the
                crystal-clear waters of the Bazaruto Archipelago. Daniel, a
                Johannesburg-based architect on holiday, had signed up for a
                recreational dive — never imagining it would change his life.
              </p>
              <p>
                Midway through the dive, Daniel's regulator malfunctioned. Sarah
                noticed his distress signal and calmly swam over, sharing her
                alternate air source as they ascended together. On the surface,
                surrounded by nothing but ocean and sky, they shared a look that
                neither could forget.
              </p>
              <p>
                What followed was a whirlwind of beach walks, sunset dhow cruises,
                and conversations that stretched late into the tropical nights. Two
                years, countless coastal adventures, and one unforgettable
                proposal on that same Mozambican beach later — they're ready to say
                "I do" by the sea.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-teal">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="font-body font-medium text-sm uppercase tracking-wider">
                From the ocean, for forever
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
