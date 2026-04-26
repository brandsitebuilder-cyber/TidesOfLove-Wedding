import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import TravelStay from './components/TravelStay';
import Schedule from './components/Schedule';
import ThingsToDo from './components/ThingsToDo';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A2F3B] font-body overflow-x-hidden">
      <Hero />
      <Story />
      <Gallery />
      <TravelStay />
      <Schedule />
      <ThingsToDo />
      <RSVP />
      <Footer />
    </div>
  );
}
