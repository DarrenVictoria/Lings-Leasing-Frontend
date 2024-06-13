import React from 'react';
import Kia from '../assets/brand-logos/Kia.png';
import Mitsubishi from '../assets/brand-logos/Mitsubishi.png';
import Ford from '../assets/brand-logos/Ford.png';
import Toyota from '../assets/brand-logos/Toyota.jpg';
import Honda from '../assets/brand-logos/Honda.png';
import AlfaRomeo from '../assets/brand-logos/AlfaRomeo.png';
import Geely from '../assets/brand-logos/Geely.png';
import Mazda from '../assets/brand-logos/Mazda.png';
import Jeep from '../assets/brand-logos/Jeep.png';
import Fiat from '../assets/brand-logos/Fiat.png';
import Nissan from '../assets/brand-logos/Nissan.png';
import Tesla from '../assets/brand-logos/Tesla.png';


const BrandGrid = () => {
  const brands = [
    {
      name: 'Alfa Romeo',
      logo: AlfaRomeo,
    },
    {
      name: 'Fiat',
      logo: Fiat,
    },
    {
      name: 'Ford',
      logo: Ford,
    },
    {
      name: 'Geely',
      logo: Geely,
    },
    {
      name: 'Honda',
      logo: Honda,
    },
    {
      name: 'Jeep',
      logo: Jeep,
    },
    {
      name: 'Kia',
      logo: Kia,
    },
    {
      name: 'Mazda',
      logo: Mazda,
    },
    {
      name: 'Mitsubishi',
      logo: Mitsubishi,
    },
    {
      name: 'Nissan',
      logo: Nissan,
    },
    {
      name: 'Tesla',
      logo: Tesla,
    },
    {
      name: 'Toyota',
      logo: Toyota,
    },
  ];
  

  const handleClick = (brandName) => {
    alert(`You clicked on ${brandName}`);
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-8">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => handleClick(brand.name)}
            className="flex flex-col items-center bg-white shadow-2xl p-4 rounded-lg w-48 h-48 transform transition-transform duration-300 hover:scale-105 focus:outline-none"
          >
            <img src={brand.logo} alt={`${brand.name} logo`} className="w-20 h-20" />
            <h2 className="text-xl font-bold mt-4 text-gray-800">{brand.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandGrid;
