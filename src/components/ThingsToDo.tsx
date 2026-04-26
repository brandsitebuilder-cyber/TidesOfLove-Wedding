import React from 'react';

const activities = [
  {
    title: 'Surfing at Umhlanga',
    description: 'Catch waves at the famous Umhlanga Lighthouse Beach. Boards available for rent right on the sand.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80',
    tag: 'Adventure',
  },
  {
    title: 'Dolphin Watching',
    description: 'Bottlenose dolphins frequent these waters year-round. Morning boat tours depart from the harbor.',
    image: 'https://images.unsplash.com/photo-1602438620213-1c5b86d06390?w=600&q=80',
    tag: 'Wildlife',
  },
  {
    title: 'Umhlanga Promenade',
    description: 'A 3km coastal walkway perfect for sunset strolls, connecting the lighthouse to the main beach.',
    image: 'https://images.unsplash.com/photo-1587502536263-5c74f4e1762a?w=600&q=80',
    tag: 'Leisure',
  },
  {
    title: 'Snorkeling at Aliwal Shoal',
    description: 'World-class snorkeling and diving just 30 minutes south. See turtles, rays, and colorful reef fish.',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&q=80',
    tag: 'Underwater',
  },
];

export default function ThingsToDo() {
  return (
    <section
      id="activities"
      style={{
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
      }}
      className="py-20 md:py-28 bg-sand-light"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-ocean mb-2">
            Things to Do
          </h2>
          <div className="w-16 h-1 bg-coral rounded-full mx-auto mb-4" />
          <p className="text-[#1A2F3B]/60 font-body text-base max-w-xl mx-auto">
            Make a holiday of it — Umhlanga has something for everyone
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[16px] overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="inline-block text-[10px] uppercase tracking-widest font-body font-semibold text-coral mb-2">
                  {item.tag}
                </span>
                <h3 className="font-body font-bold text-[#1A2F3B] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-[#1A2F3B]/60 font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
