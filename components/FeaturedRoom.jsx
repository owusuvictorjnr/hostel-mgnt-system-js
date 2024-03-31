import React from 'react'
import Image from 'next/image'

const FeaturedRoom = () => {
  return (
    <section className="min-h-[20rem] bg-sate-400 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* image section */}
        <div className="space-y-10">
          <Image
            src="/assets/pic1.jpg"
            alt=""
            height="900"
            width="900"
            data-aos="zoom-in"
            data-aos-duration="800"
            className="w-full rounded-[1rem] h-[13rem] lg:h-[25rem] px-2"
          />
          <div
            data-aos="zoom-in"
            data-aos-duration="1300"
            className="grid grid-cols-2 space-x-3  px-3"
          >
            <Image
              src="/assets/pic2.jpg"
              alt=""
              height="900"
              width="900"
              className=" rounded-xl h-[10rem] w-[15rem] md:w-[13.5rem] lg:w-full lg:h-[20rem]"
            />

            <Image
              src="/assets/pic3.jpg"
              alt=""
              height="900"
              width="900"
              className=" w-[15rem] rounded-xl h-[10rem] md:w-[13.5rem] lg:w-full lg:h-[20rem]"
            />
          </div>
        </div>
        <div className="px-5 space-y-5 lg:flex lg:flex-col lg:items-center lg:mt-[10rem]">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1600"
            className="text-2xl capitalize font-bold mt-5 md:mt-[3rem] lg:text-center lg:text-4xl"
          >
            featured rooms
          </h1>

          <p
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="lg:px-[10rem]"
          >
            Experience comfort and convenience in our rooms designed to make
            your stay unforgettable. Whether you&#39;re solo, with friends, or
            for business, our carefully curated selection of rooms offers a
            blend of style, functionality, and affordability. From cozy single
            rooms to spacious executive suites, each accommodation is equipped
            with modern amenities and personalized touches to ensure a relaxing
            and enjoyable stay. Explore our featured rooms below and book your
            perfect retreat today.
          </p>

          <div className="grid grid-cols-3 container mx-auto lg:flex lg:justify-center lg:space-x-[5rem]">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="capitalize font-normal  text-lg"
            >
              <h1 className="">start from</h1>

              <h1 className="font-bold">&#8373; 500</h1>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="capitalize font-normal  text-lg"
            >
              <h1 className="">discount</h1>
              <h1 className="font-bold">&#8373; 200</h1>
            </div>

            <button
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="border-tertiary-dark border-2 rounded-lg text-tertiary-dark hover:scale-110 duration-300 capitalize font-bold lg:px-5"
            >
              more details
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedRoom
