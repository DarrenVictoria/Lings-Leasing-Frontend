import React from 'react';
import Kia from '../assets/brand-logos/Kia.png';
import Mitsubishi from '../assets/brand-logos/Mitsubishi.png';
import Ford from '../assets/brand-logos/Ford.png';
import Toyota from '../assets/brand-logos/Toyota.jpg';
import Honda from '../assets/brand-logos/Honda.png';

const BrandGrid = () => {
  const brands = [
    {
      name: 'Toyota',
      logo: Toyota,
    },
    {
      name: 'Ford',
      logo: Ford,
    },
    {
      name: 'Mitsubishi',
      logo: Mitsubishi,
    },
    {
      name: 'Kia',
      logo: Kia,
    },
    {
        name: 'Honda',
        logo: Honda,
      },
  ];

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-8">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center bg-white shadow-2xl p-4 rounded-lg w-48 h-48">
            <img src={brand.logo} alt={`${brand.name} logo`} className="w-20 h-20" />
            <h2 className="text-xl font-bold mt-4 text-gray-800">{brand.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandGrid;
