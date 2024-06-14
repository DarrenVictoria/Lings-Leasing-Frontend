import {react, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, TextField, Pagination } from '@mui/material';
import Grid from '@mui/material/Grid';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import EVStationIcon from '@mui/icons-material/EVStation';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import SettingsIcon from '@mui/icons-material/Settings';
import PaletteIcon from '@mui/icons-material/Palette';
import BrushIcon from '@mui/icons-material/Brush';

// Images fed in for mockup
import MegaHatch from '../assets/best-seller-mockups/mega-hatch.jpg';
import Kamik from '../assets/best-seller-mockups/kamik.webp';
import MG from '../assets/best-seller-mockups/mg-zs.webp';
import AudiA8 from '../assets/best-seller-mockups/audi-a8.jpg';
import BMW1 from '../assets/best-seller-mockups/BMW-Series1.jpg';
import MercedesA from '../assets/best-seller-mockups/Mercedes-A.jpg';
import TeslaModel3 from '../assets/best-seller-mockups/TeslaModel3.jpg';
import NissanLeaf from '../assets/best-seller-mockups/NissanLeaf.jpg';
import HyudaiIoniq from '../assets/best-seller-mockups/HyudaiIoniq.jpg';

// Array of objects representing the car details
const carData = [
  {
    model: 'Seat Ibiza',
    details: '1.0 TSI FR (95bhp) Hatchback 5dr',
    fuelType: 'Petrol',
    transmission: 'Manual',
    paint: 'Metallic Paint',
    price: 248,
    initialPayment: 744,
    contractDuration: 36,
    annualMileage: 10000,
    imagePath: MegaHatch,
  },
  {
    model: 'Ford Fiesta',
    details: '1.0 EcoBoost Zetec 5dr',
    fuelType: 'Petrol',
    transmission: 'Manual',
    paint: 'Solid Paint',
    price: 218,
    initialPayment: 654,
    contractDuration: 36,
    annualMileage: 8000,
    imagePath: Kamik,
  },
  {
    model: 'Volkswagen Polo',
    details: '1.0 TSI Life 5dr',
    fuelType: 'Petrol',
    transmission: 'Manual',
    paint: 'Metallic Paint',
    price: 238,
    initialPayment: 714,
    contractDuration: 36,
    annualMileage: 10000,
    imagePath: MG,
  },
  {
    model: 'Audi A3',
    details: '1.5 TFSI Sport 5dr',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    paint: 'Solid Paint',
    price: 299,
    initialPayment: 897,
    contractDuration: 36,
    annualMileage: 12000,
    imagePath: AudiA8,
  },
  {
    model: 'BMW 1 Series',
    details: '1.5 118i SE 5dr',
    fuelType: 'Petrol',
    transmission: 'Manual',
    paint: 'Metallic Paint',
    price: 320,
    initialPayment: 960,
    contractDuration: 36,
    annualMileage: 15000,
    imagePath: BMW1,
  },
  {
    model: 'Mercedes A-Class',
    details: 'A180 AMG Line 5dr',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    paint: 'Metallic Paint',
    price: 340,
    initialPayment: 1020,
    contractDuration: 36,
    annualMileage: 12000,
    imagePath: MercedesA,
  },
  {
    model: 'Tesla Model 3',
    details: 'Standard Plus 4dr',
    fuelType: 'Electric',
    transmission: 'Automatic',
    paint: 'Solid Paint',
    price: 450,
    initialPayment: 1350,
    contractDuration: 36,
    annualMileage: 15000,
    imagePath: TeslaModel3,
  },
  {
    model: 'Nissan Leaf',
    details: '110kW Acenta 40kWh 5dr Auto',
    fuelType: 'Electric',
    transmission: 'Automatic',
    paint: 'Metallic Paint',
    price: 310,
    initialPayment: 930,
    contractDuration: 36,
    annualMileage: 10000,
    imagePath: NissanLeaf,
  },
  {
    model: 'Hyundai Ioniq',
    details: '1.6 GDi Hybrid Premium SE 5dr DCT',
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    paint: 'Metallic Paint',
    price: 290,
    initialPayment: 870,
    contractDuration: 36,
    annualMileage: 12000,
    imagePath: HyudaiIoniq,
  }
];

const CatalougeCards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredCars = carData.filter(car => 
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const getFuelTypeIcon = (fuelType) => {
    switch (fuelType) {
      case 'Petrol':
        return <GasMeterIcon />;
      case 'Electric':
        return <ElectricCarIcon />;
      case 'Hybrid':
        return <EVStationIcon />;
      default:
        return null;
    }
  };

  const getTransmissionIcon = (transmission) => {
    return transmission === 'Manual' ? <SettingsIcon /> : <AutoAwesomeMotionIcon />;
  };

  const getPaintIcon = (paint) => {
    return paint === 'Metallic Paint' ? <PaletteIcon /> : <BrushIcon />;
  };

  // Calculate the current items to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <form className="max-w-md mx-auto my-4 px-2">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative mb-12">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input 
            type="search" 
            id="default-search" 
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:customAqua focus:border-customAqua dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-customAqua dark:focus:border-customAqua" 
            placeholder="Search cars..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="submit" 
            className="text-white absolute end-2.5 bottom-2.5 bg-customAqua hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-customAquafont-medium rounded-lg text-sm px-4 py-2 dark:bg-customAqua dark:hover:bg-customAqua dark:focus:ring-customAqua"
          >
            Search
          </button>
        </div>
      </form>
      <Grid container spacing={3} justifyContent="center">
        {currentCars.map((car, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 300, minWidth: 300, borderRadius: 2, border: '1px solid black', boxShadow: 3, backgroundColor: 'gray.800' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={200}
                  image={car.imagePath}
                  alt={car.model}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 'inherit',
                    borderTopRightRadius: 'inherit',
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                    {car.model}
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
                    {car.details}
                  </Typography>
                  <Typography variant="h6" color="text.primary" mt={2}>
                    Rent New: £{car.price}/mth
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Initial Payment: £{car.initialPayment}
                    <br />
                    {car.contractDuration} Month Contract
                    <br />
                    {car.annualMileage} miles p/a
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
                    {getFuelTypeIcon(car.fuelType)} {car.fuelType} Engine
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
                    {getTransmissionIcon(car.transmission)} {car.transmission} Gearbox
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
                    {getPaintIcon(car.paint)} {car.paint}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    *Excess mileage may apply
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Button 
                    size="small" 
                    variant="contained" 
                    className="bg-customAqua text-white" 
                  >
                    Lease Now
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination 
        count={Math.ceil(filteredCars.length / itemsPerPage)} 
        page={currentPage} 
        onChange={handleChangePage} 
        className="mb-8"
        sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};


export default CatalougeCards;
