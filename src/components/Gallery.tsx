import React from 'react';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80',
    alt: 'Sunset beach view',
  },
  {
    src: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80',
    alt: 'Tropical beach',
  },
  {
    src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80',
    alt: 'Ocean aerial view',
  },
  {
    src: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&q=80',
    alt: 'Palm trees at sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&q=80',
    alt: 'Coastal rocks',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    alt: 'Tropical island',
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
      }}
      className="py-20 md:py-28 bg-sand-light"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-ocean mb-2">
            Our Paradise
          </h2>
          <div className="w-16 h-1 bg-coral rounded-full mx-auto mb-4" />
          <p className="text-[#1A2F3B]/60 font-body text-base max-w-xl mx-auto">
            The places that inspired our love story
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
