import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="m-h-[20rem] bg-slte-500 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center mt-5 px-2 md:px-0">
          <h1 className="text-[3rem]  capitalize font-bold md:text-[2.5rem] md:px-5">
            expolre our exquisite hostel
          </h1>

          <p className="text-[1.5rem] md:text-lg md:px-5">
            Experience an Exquisite Hostel Immersed in Rich History and Timeless
            Elegance
          </p>
          <div className=" bg-primary py-2 px-5 w-1/2 rounded-xl mb-10 font-bold text-center mt-4 md:mt-12 lg:mt-[10rem]">
            <button className="capitalize">get started</button>
          </div>
        </div>
        {/* image section */}
        <div className="space-y-10">
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
        <div className="flex justify-between px-5 font-bold capitalize mt-4 md:text-[1.3rem]">
          <h1 className="">basic room</h1>

          <h1 className="">executive room</h1>

          <h1 className="">suit room</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
