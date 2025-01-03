import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="heroImg"
        src="/HeroImg.jpg"
        width={600}
        height={720}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Shop Smarter, Live Better - 
        <br className="hidden lg:inline-block" />
        All Your Favorites in One Place!
      </h1>
      <p className="mb-8 leading-relaxed">
      Discover the best deals on top-quality products, from fashion to gadgets and everything in between. Shop with ease, enjoy fast delivery, and make every purchase worth it!
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 py-2 px-6 rounded text-lg hover:scale-110">
         <Link href={"/Product"}>See Products</Link> 
        </button>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
