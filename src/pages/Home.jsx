import {React, useState} from 'react'
import Navbar from '../components/Navbar'
import carhero from '../assets/car-hero.png'
import guardianlogo from '../assets/guardian-logo.png'
import BestSellers from '../components/BestSellers'
import LatestDeliveries from '../components/LatestDeliveries'
import SecondsDisplay from '../components/SecondsDisplay'
import BrandGrid from '../components/BrandGrid'
import Footer from '../components/Footer'

const Home = () => {

  // I added two use states here incase needed to update orders and proposals

  const [customersInProposals, setCustomersInProposals] = useState(79);
  const [customersInOrders, setCustomersInOrders] = useState(63);



  return (
    <div>
      <Navbar />

      {/* Hero Section */}

      <section className="bg-gray-800 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl text-customAqua">LINGs LEASING</h1>
            <p className="max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white font-black">
              YOU CAN TRUST US 
            </p>
            <a
              href="/carvan-catalouge"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-customAqua hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              CARS / VANS
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
            <img src={carhero} alt="mockup" className="absolute top-0 right-0 w-full h-auto scale-150" />
          </div>

        </div>
      </section>

      {/* Testemonial by the Guardian */}

      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <blockquote>
                    <p class="text-2xl font-bold text-gray-900 dark:text-white">"Ling Valentine is Britain's BIGGEST individual seller<br></br> of new cars."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-18 h-12 " src={guardianlogo} alt="The Guardian Logo"/>
                    
                </figcaption>
            </figure>
        </div>
      </section>

      {/* Car Leasing Deals Section */}

      <div className="flex justify-center items-center my-8">
        <h1 className="text-4xl font-bold text-center">BEST SELLING CAR LEASING DEALS</h1>
      </div>

      <BestSellers/>


      <div className="flex justify-center items-center my-8">
        <h1 className="text-4xl font-bold text-center px-4">CAR LEASING ONLINE SERVICES RESPONSE TIMES</h1>
      </div>

      <div className="flex justify-center items-center my-4">
          <p>Quote &gt; Proposal &gt; Order &gt; Delivery</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-8">
        <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">{customersInProposals} customers in Proposals</h2>
        <h5 className="text-xl font-bold mb-4">Ling replies in...</h5>
          <SecondsDisplay seconds={120} />
        </div>
      
        <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">{customersInOrders} customers in Orders</h2>
        <h5 className="text-xl font-bold mb-4">Ling replies in...</h5>
          <SecondsDisplay seconds={150} />
        </div>
      </div>

      <div className="flex justify-center items-center my-8">
        <h1 className="text-4xl font-bold text-center">LATEST 4 DELIVERIES</h1>
      </div>

      <LatestDeliveries/>

      {/* Sort by Vehicle Brand Section */}
      <div className="flex justify-center items-center my-8">
        <h1 className="text-4xl font-bold text-center">SORT BY VEHICLE BRAND ALPHABETICALLY</h1>
      </div>

      <BrandGrid/>

      <Footer/>

      



     
    </div>
  )
}

export default Home