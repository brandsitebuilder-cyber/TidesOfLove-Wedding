import React, { useEffect } from 'react';
import Accommodation from '../components/Accommodation';
import ThingsToDo from '../components/ThingsToDo';
import FAQ from '../components/FAQ';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';

export default function Details() {
  const { language } = useLanguage();
  const t = content[language].nav;

  return (
    <div className="pt-16 pb-20">
      <Accommodation />
      <ThingsToDo />
      <FAQ />
    </div>
  );
}
