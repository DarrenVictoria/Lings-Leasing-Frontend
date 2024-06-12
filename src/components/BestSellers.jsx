import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import EVStationIcon from '@mui/icons-material/EVStation';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import SettingsIcon from '@mui/icons-material/Settings';
import PaletteIcon from '@mui/icons-material/Palette';
import BrushIcon from '@mui/icons-material/Brush';
import MegaHatch from '../assets/best-seller-mockups/mega-hatch.jpg';
import Kamik from '../assets/best-seller-mockups/kamik.webp';
import MG from '../assets/best-seller-mockups/mg-zs.webp';


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
];

const BestSellers = () => {
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

  return (
    <Grid container spacing={4} justifyContent="center">
      {carData.map((car, index) => (
        <Grid item key={index}>
          <Card sx={{ maxWidth: 300 }}>
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
                }}
            />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {car.model}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {car.details}
                </Typography>
                <Typography variant="h6" color="text.primary" mt={2}>
                  Rent New: £{car.price}/mth
                  <br />

                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Initial Payment: £{car.initialPayment}
                  <br />
                  {car.contractDuration} Month Contract
                  <br />
                  {car.annualMileage} miles p/a
                  <br /><br />
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {getFuelTypeIcon(car.fuelType)} {car.fuelType} Engine
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {getTransmissionIcon(car.transmission)} {car.transmission} Gearbox
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {getPaintIcon(car.paint)} {car.paint}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <br />
                *Excess mileage may apply
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Lease Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BestSellers;