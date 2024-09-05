"use client";  // Ensures client-side rendering

import Link from 'next/link';  // Import Link from Next.js
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <div className="relative flex flex-col items-center justify-start pt-2 pb-8 px-4 sm:px-8">
        <div className="absolute inset-0 z-0 w-full h-[30vh] sm:h-[50vh] md:h-[75vh] lg:h-[75vh] xl:h-[70vh]">
          <img
            src="/images/fam.png"
            alt="Background Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgb(239,236,215)]" />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center sm:justify-start w-full max-w-4xl text-center sm:text-left">
         
          {/* Text content */}
          <div className="flex flex-col sm:items-start sm:justify-center w-full sm:w-auto">
            <span className="text-base sm:text-base font-medium text-black mb-1 sm:mb-2">
              Deli of Springfield
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Welcome to Our Deli
            </h1>
            <span className="text-sm sm:text-base font-medium text-black mt-1 sm:mt-2">
              Est. 2023
            </span>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full max-w-4xl mt-8 z-10">
          <Carousel />
        </div>

        {/* New Section for Text and Icons */}
        <div className="flex flex-col items-center mt-12 px-4 z-10">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-6 text-center">
            What we can make happen for you
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <img src="/images/deli-sand.png" alt="Deli Sandwich" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36" />
            <img src="/images/deli-bagel1.png" alt="Deli Bagel" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36" />  {/* Icon 2 */}
            <img src="/images/deli-yum.png" alt="sand" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36" />  {/* Icon 3 */}
            <img src="/images/salad.png" alt="salad" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36" />
            <img src="/images/delivery-man.png" alt="delivery" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36" />
          </div>
        </div>

        {/* Our Services Section */}
        <div className="w-full mt-12 px-4 sm:px-8 flex flex-col items-center">
          <div className="bg-[rgb(200,195,160)] py-12 px-4 sm:px-8 rounded-3xl w-full max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
              Our Services
            </h2>

            <div className="flex flex-col md:flex-row md:justify-around md:space-x-4 md:ml-8">
              {/* Deli Platters & Catering */}
              <div className="mb-8 md:mb-0 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Deli Platters & Catering</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-4">Having Company? Let Deli of Springfield take care of that for you.</p>
                <Link href="/contact">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-md">Learn More</button>
                </Link>
              </div>

              {/* Delivery? */}
              <div className="mb-8 md:mb-0 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Delivery?</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-4">Order, delivered, Repeat.</p>
                <Link href="/contact">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-md"> Now</button>
                </Link>
              </div>

              {/* Private Events */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Private Events</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-4">Make your event special with our custom catering and service options.</p>
                <Link href="/contact">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-md">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-[rgb(200,195,160)] py-8 mt-12 w-full flex flex-col items-center text-center">
          <img
            src="/images/logodeli2.png"
            alt="Deli Logo"
            className="w-32 h-auto mb-4" // Adjusted width and height to prevent distortion
          />
          <div className="text-gray-800 text-base sm:text-lg">
            <p className="mb-2">234 Morris Ave, Springfield, NJ</p>
            <p className="mb-2">Phone: (908) 442-9100</p>
            <p className="mb-2">Email: thedeliofspringfield@gmail.com</p>
          </div>
          <div className="text-gray-700 text-sm mt-4">
            <p>&copy; 2023 Deli of Springfield. All rights reserved.</p>
            <p className="mt-1">Developed by Christopher Vargas</p>
          </div>
        </footer>
      </div>
    </main>
  );
}