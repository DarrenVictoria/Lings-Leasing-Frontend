import React from 'react';
import Navbar from '../components/Navbar';
import CatalougeHero from '../components/CatalougeHero';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordian';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

// Define a custom icon for the marker
const customIcon = new Icon({
  iconUrl: 'https://example.com/marker-icon.png', // Update with your marker icon URL
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <CatalougeHero title="ABOUT US" />

      <div className="flex flex-col items-center py-8">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-4">ABOUT OUR SERVICES</h2>
          <p className="mb-8">
            Lings Leasing is a premier leasing company dedicated to providing flexible and innovative
            leasing solutions to businesses and individuals. With a strong commitment to excellence,
            we have established ourselves as a trusted partner in the leasing industry, offering a
            comprehensive range of services to meet diverse leasing needs. Our mission is to deliver
            unparalleled value to our clients through customized leasing options, competitive pricing,
            and exceptional customer service.
          </p>
        </div>
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-4">HISTORY</h2>
          <p>
            Lings Leasing was founded in 1995 by Michael Ling and Susan Carter, two industry
            veterans with a shared vision of revolutionizing the leasing market. Both brought years of
            experience in finance and leasing to the table, envisioning a company that prioritizes
            client needs and offers innovative leasing solutions. From the outset, their goal was to
            create a company that not only meets but exceeds customer expectations through
            integrity, innovation, and outstanding service.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center my-8 px-4">
        <h1 className="text-4xl font-bold text-center">COMMON QUESTION FAQ</h1>
      </div>
      <FAQAccordion />

      <div className="flex flex-col md:flex-row justify-center items-start my-8 px-4">
        <div className="w-full md:w-1/2 h-64 md:h-96 p-4">
          <MapContainer center={[54.96163268069649, -1.6431876704045263]} zoom={13} className="w-full h-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]} icon={customIcon} />
          </MapContainer>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">Feel free to reach out to us through any of the following methods:</p>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2 text-gray-700" /> +44 191 460 9444
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-gray-700" /> info@lingsleasing.com
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/lingscars/" className="text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/LINGsCARS" className="text-blue-400">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      
    </div>
  );
};

export default AboutUs;
