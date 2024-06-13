import React from 'react'
import Navbar from '../components/Navbar'
import CatalougeHero from '../components/CatalougeHero'
import Footer from '../components/Footer'
import FAQAccordion from '../components/FAQAccordian'

const AboutUs = () => {
  return (
    <div>
       <Navbar />
       <CatalougeHero title="ABOUT US" />

       <div className="flex flex-col items-center py-8">
        <div className="max-w-3xl mx-auto">
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
        <div className="max-w-3xl mx-auto">
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

      <div className="flex justify-center items-center my-8">
        <h1 className="text-4xl font-bold text-center">COMMON QUESTION FAQ</h1>
      </div>



        <FAQAccordion/>


       <Footer/>
    </div>
  )
}

export default AboutUs