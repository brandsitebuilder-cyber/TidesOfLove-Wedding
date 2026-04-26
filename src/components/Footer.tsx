import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="bg-brand-bg py-24 text-center border-t border-brand-text/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="font-[Pacifico] text-5xl text-brand-accent mb-8 select-none">
          S & K
        </div>
        <div className="w-12 h-[1px] bg-brand-accent/50 mb-8"></div>
        <p className="text-xs uppercase tracking-[0.3em] text-brand-text/50 font-light">
          {t.text}
        </p>
      </div>
    </footer>
  );
}
