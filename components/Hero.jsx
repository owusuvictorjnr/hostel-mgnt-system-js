import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="m-h-[20rem] bg-slte-500 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center mt-5 px-2 md:px-0 lg:grid lg:place-items-center">
          <div data-aos="zoom-in" data-aos-duration="800" className="">
            <h1 className="text-[3rem]  capitalize font-bold md:text-[2.5rem] md:px-5">
              explore our exquisite hostel
            </h1>
          </div>

          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-[1rem] md:text-lg md:px-5"
          >
            Experience an Exquisite Hostel Immersed in Rich History and Timeless
            Elegance
          </p>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className=" bg-primary py-2 px-5 w-1/2 rounded-xl mb-10 font-bold text-center mt-4 md:mt-12 lg:mt-[10rem] hidden md:block"
          >
            <button className="capitalize text-white">get started</button>
          </div>
        </div>
        {/* image section */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="space-y-10 mt-5 md:mt-0"
        >
          <Image
            src="/assets/pic1.jpg"
            alt=""
            height="900"
            width="900"
            className="w-full rounded-[1rem] h-[13rem] lg:h-[25rem] px-2"
          />
          <div className="grid grid-cols-2 space-x-3 lg:flex lg:justify-center px-1">
            <Image
              src="/assets/pic2.jpg"
              alt=""
              height="900"
              width="900"
              className=" rounded-xl h-[10rem] w-[15rem] md:w-[13.5rem] lg:w-full lg:h-[18rem]"
            />

            <Image
              src="/assets/pic3.jpg"
              alt=""
              height="900"
              width="900"
              className=" w-[15rem] rounded-xl h-[10rem] md:w-[13.5rem] lg:w-full lg:h-[18rem]"
            />
          </div>
        </div>

        {/* Rooms */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1800"
          className="flex justify-between px-5 font-bold capitalize mt-10 md:text-[1.3rem]"
        >
          <div className="">
            <h1 className="">basic room</h1>
            <p className="text-center text-2xl md:text-3xl">20</p>
          </div>

          <div className="">
            <h1 className="">executive room</h1>
            <p className="text-center text-2xl md:text-3xl">10</p>
          </div>

          <div className="">
            <h1 className="">suit room</h1>
            <p className="text-center text-2xl md:text-3xl">5</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className=" bg-primary py-2 px-5 w-1/2 rounded-xl mb-10 font-bold text-center mt-4 md:mt-12 lg:mt-[10rem] block md:hidden"
          >
            <button className="capitalize text-white">get started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
