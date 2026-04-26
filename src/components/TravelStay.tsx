import React from 'react';

const venuePhoto =
  '/images/venue.jpg';

const accommodations = [
  {
    name: 'The Oyster Box Hotel',
    description: 'Our wedding venue — a 5-star beachfront icon with colonial charm, infinity pool, and world-class spa.',
    price: 'From R4,500/night',
    tag: 'Wedding Venue',
  },
  {
    name: 'Umhlanga Sands Resort',
    description: 'Family-friendly beach resort just 5 minutes from the venue. Self-catering apartments available.',
    price: 'From R1,800/night',
    tag: 'Recommended',
  },
  {
    name: 'Beverley Hills Hotel',
    description: 'Sister property to Oyster Box, offering stunning sea views and direct beach access.',
    price: 'From R3,200/night',
    tag: 'Nearby',
  },
];

export default function TravelStay() {
  return (
    <section
      id="travel"
      style={{
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
      }}
      className="py-20 md:py-28 bg-ocean text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-sand mb-2">
            Travel &amp; Stay
          </h2>
          <div className="w-16 h-1 bg-coral rounded-full mx-auto mb-4" />
          <p className="text-white/70 font-body text-base max-w-xl mx-auto">
            Everything you need to plan your trip to Umhlanga
          </p>
        </div>

        {/* Venue highlight */}
        <div className="rounded-[20px] overflow-hidden shadow-xl mb-12">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto">
              <img
                src={venuePhoto}
                alt="The Oyster Box Hotel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-coral-light font-medium mb-2">
                The Venue
              </span>
              <h3 className="font-display text-3xl text-sand mb-3">
                The Oyster Box Hotel
              </h3>
              <p className="text-white/80 font-body text-base leading-relaxed mb-4">
                Perched on the Umhlanga coastline, this legendary hotel offers
                breathtaking Indian Ocean views, award-winning dining, and the
                perfect setting for our seaside celebration.
              </p>
              <p className="text-white/60 font-body text-sm">
                2 Lighthouse Road, Umhlanga Rocks, Durban
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {accommodations.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[16px] bg-white/10 backdrop-blur-sm p-6 shadow-lg hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-coral-light font-medium">
                  {item.tag}
                </span>
                {idx === 0 && (
                  <svg className="w-5 h-5 text-coral" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                )}
              </div>
              <h3 className="font-body font-semibold text-lg text-sand mb-2">
                {item.name}
              </h3>
              <p className="text-white/70 font-body text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <p className="text-coral-light font-body font-medium text-sm">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* Travel tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-[16px] bg-white/10 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="font-body font-semibold text-sand text-lg mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Getting There
            </h3>
            <ul className="space-y-2 text-white/70 text-sm font-body">
              <li>• Fly into King Shaka International Airport (DUR) — 15 min drive</li>
              <li>• Shuttle services available from the airport</li>
              <li>• Car rental recommended for exploring the coast</li>
              <li>• Uber & Bolt widely available in Umhlanga</li>
            </ul>
          </div>
          <div className="rounded-[16px] bg-white/10 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="font-body font-semibold text-sand text-lg mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Pro Tips
            </h3>
            <ul className="space-y-2 text-white/70 text-sm font-body">
              <li>• February is summer — pack light, breathable clothing</li>
              <li>• Sunscreen and hats are essential!</li>
              <li>• Book accommodation early — February is peak season</li>
              <li>• The wedding is beach-adjacent, not on sand — heels welcome</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
