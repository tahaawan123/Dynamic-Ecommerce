import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className='bg-gradient-to-b from-slate-400 to-gray-200 min-h-screen'>
      <div className='container mx-auto p-6'>
        {/* Heading */}
        <div className='text-center py-10 text-white bg-blue-600 rounded-lg mb-8 shadow-md'>
          <h1 className='text-5xl font-bold mb-2'>About Us</h1>
          <p className='text-lg'>Your trusted partner in quality and convenience.</p>
        </div>

        {/* Our Story */}
        <div className='bg-white p-6 shadow-lg rounded-lg mb-8'>
          <h2 className='text-3xl font-semibold mb-4'>Our Story</h2>
          <p className='text-gray-700'>
            Founded in 2020, our mission is to provide the best products and seamless shopping experiences for our customers. From humble beginnings, we have grown into a platform that connects customers with high-quality goods and outstanding service.
          </p>
        </div>

        {/* Values */}
        <div className='bg-white p-6 shadow-lg rounded-lg mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Our Values</h2>
          <ul className='list-disc pl-6 space-y-2 text-gray-700'>
            <li>Commitment to Quality</li>
            <li>Customer-Centric Approach</li>
            <li>Sustainability and Responsibility</li>
            <li>Innovation and Excellence</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className='bg-white p-6 shadow-lg rounded-lg mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Meet Our Team</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='text-center'>
              <Image src={"/About/img1.png"} alt='Jane Doe' width={150} height={150} className='mx-auto rounded-full mb-2' />
              <p className='font-semibold'>Jane Doe</p>
              <p className='text-gray-500 text-sm'>Founder & CEO</p>
            </div>
            <div className='text-center'>
              <Image src={"/About/img2.jpg"} alt='John Smith' width={150} height={150} className='mx-auto rounded-full mb-2' />
              <p className='font-semibold'>John Smith</p>
              <p className='text-gray-500 text-sm'>Head of Operations</p>
            </div>
            <div className='text-center'>
              <Image src={"/About/image3.jpg"} alt='Emily Johnson' width={150} height={150} className='mx-auto rounded-full mb-2' />
              <p className='font-semibold'>Emily Johnson</p>
              <p className='text-gray-500 text-sm'>Marketing Lead</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className='bg-white p-6 shadow-lg rounded-lg mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>What Our Customers Say</h2>
          <p className='border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4'>
            "Amazing shopping experience! The quality of the products exceeded my expectations." - Sarah W.
          </p>
          <p className='border-l-4 border-blue-500 pl-4 italic text-gray-700'>
            "Excellent customer service and fast delivery. Highly recommend this store!" - Michael B.
          </p>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
            <button className=' bg-gradient-to-r from-blue-500 to-green-600 text-white py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105'>
           
               <Link href='/Product'>
              Explore Our Products
        
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
