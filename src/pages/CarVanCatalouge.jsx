import React from 'react';
import Navbar from '../components/Navbar';
import CatalougeHero from '../components/CatalougeHero';
import CatalougeCards from '../components/CatalougeCards';
import Footer from '../components/Footer';

const CarVanCatalouge = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <CatalougeHero title="CAR / VANS" />
      <CatalougeCards />

      <div className="max-w-4xl mx-auto px-4 py-6 bg-yellow-100 border border-yellow-500 rounded-lg mt-8 md:px-8 lg:px-12">
        <p className="text-center text-yellow-800">
          Thanks for taking the time to look at my headline cars. Please note I can quote on any car on Contract Hire, or any Lease Cars or Lease Hire. In fact I can supply any kind of car leasing. Leasing is a very general term. However, Contract Hire and PCP are by far my favourite products and my customers' favourite products too! The rest can be a little confusing although in a few (business) cases can be appropriate.
        </p>
        <br />
        <p className="text-center text-yellow-800">
          I publish all the best and cheapest deals I can source, above; so most bespoke quotes will by their nature be slightly more expensive. - Ling
        </p>
      </div>

      <Footer/>
    </div>
  );
}

export default CarVanCatalouge;
