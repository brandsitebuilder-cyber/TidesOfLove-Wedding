import React from 'react';

const bgImage =
  'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80';

export default function RSVP() {
  return (
    <section
      id="rsvp"
      style={{
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
      }}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl text-sand mb-2">
            Join the Celebration
          </h2>
          <div className="w-16 h-1 bg-coral rounded-full mx-auto mb-4" />
          <p className="text-white/70 font-body text-base">
            Please RSVP by 15 December 2026
          </p>
        </div>

        <div className="rounded-[20px] bg-white/10 backdrop-blur-md p-8 md:p-10 shadow-xl">
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/80 font-body text-sm font-medium mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-[12px] bg-white/20 border border-white/20 px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-transparent transition"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-white/80 font-body text-sm font-medium mb-1.5">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-[12px] bg-white/20 border border-white/20 px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-transparent transition"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 font-body text-sm font-medium mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full rounded-[12px] bg-white/20 border border-white/20 px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-transparent transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-white/80 font-body text-sm font-medium mb-1.5">
                Number of Guests *
              </label>
              <select
                required
                className="w-full rounded-[12px] bg-white/20 border border-white/20 px-4 py-3 text-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-transparent transition appearance-none"
              >
                <option value="" className="text-gray-700">Select...</option>
                <option value="1" className="text-gray-700">1 Guest</option>
                <option value="2" className="text-gray-700">2 Guests</option>
                <option value="3" className="text-gray-700">3 Guests</option>
                <option value="4" className="text-gray-700">4 Guests</option>
              </select>
            </div>

            <div>
              <label className="block text-white/80 font-body text-sm font-medium mb-1.5">
                Meal Preference
              </label>
              <select className="w-full rounded-[12px] bg-white/20 border border-white/20 px-4 py-3 text-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-transparent transition appearance-none">
                <option value="" className="text-gray-700">Select preference...</option>
                <option value="seafood" className="text-gray-700">Seafood</option>
                <option value="vegetarian" className="text-gray-700">Vegetarian</option>
                <option value="vegan" className="text-gray-700">Vegan</option>
                <option value="no-preference" className="text-gray-700">No Preference</option>
              </select>
            </div>

            <div>
              <label className="block text-white/80 font-body text-sm font-medium mb-1.5">
                Accommodation Needed?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="accommodation" className="accent-coral" />
                  <span className="text-white/80 text-sm font-body">Yes, please</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="accommodation" defaultChecked className="accent-coral" />
                  <span className="text-white/80 text-sm font-body">No, thanks</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-white/80 font-body text-sm font-medium mb-1.5">
                Special Requests or Dietary Restrictions
              </label>
              <textarea
                rows={3}
                className="w-full rounded-[12px] bg-white/20 border border-white/20 px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-transparent transition resize-none"
                placeholder="Let us know..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-[12px] bg-coral hover:bg-coral-light text-white font-body font-semibold text-base py-3.5 transition-colors shadow-lg hover:shadow-xl"
            >
              Send RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
