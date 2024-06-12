import React from 'react';
import camry from '../assets/latest-deliveries-mockup/camry.jpg';
import civic from '../assets/latest-deliveries-mockup/honda-civic.png';
import mustang from '../assets/latest-deliveries-mockup/ford-mustang.jpg';
import corvette from '../assets/latest-deliveries-mockup/chervolet-corvette.jpg';

// Array of objects representing the vehicle details
const vehicleData = [
  {
    model: 'Toyota Camry',
    year: 2021,
    imagePath: camry,
  },
  {
    model: 'Honda Civic',
    year: 2020,
    imagePath: civic,
  },
  {
    model: 'Ford Mustang',
    year: 2019,
    imagePath: mustang,
  },
  {
    model: 'Chevrolet Corvette',
    year: 2022,
    imagePath: corvette,
  },
];

const LatestDeliveries = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center">
          {vehicleData.map((vehicle, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-900 border border-gray-700 rounded-lg shadow m-2 w-64 sm:w-72"
            >
              <img
                className="object-cover w-full h-40 rounded-t-lg"
                src={vehicle.imagePath}
                alt={vehicle.model}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-white">
                  {vehicle.model}
                </h5>
                <p className="mb-3 font-normal text-gray-400">
                  Year: {vehicle.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default LatestDeliveries;