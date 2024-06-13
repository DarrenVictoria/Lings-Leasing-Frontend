import React from 'react';
import carhero from '../assets/car-hero.png';

function CatalougeHero({ title }) {
  return (
    <section className="bg-gray-800 dark:bg-gray-900 mb-14">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl text-customAqua">
            {title}
          </h1>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
          <img
            src={carhero}
            alt="mockup"
            className="absolute top-0 right-0 w-full h-auto scale-100"
          />
        </div>
      </div>
    </section>
  );
}

export default CatalougeHero;
