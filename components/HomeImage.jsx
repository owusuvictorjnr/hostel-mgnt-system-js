import React from 'react'
import Image from 'next/image'

const HomeImage = () => {
  return (
    <section className="min-h-[20rem] bg-slae-400 mt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0">
        {/* Left Top Images */}
        <div className="space-y-5 px-3">
          <div className="flex space-x-5">
            <div data-aos="zoom-in" data-aos-duration="800" className="">
              <Image
                src="/assets/pic3.jpg"
                alt="image"
                height="900"
                width="900"
                className="md:h-[15rem] lg:h-[20rem]"
              />
            </div>

            <div data-aos="zoom-in" data-aos-duration="1200" className="">
              <Image
                src="/assets/pic2.jpg"
                alt="image"
                height="900"
                width="900"
                className="md:h-[15rem] lg:h-[20rem]"
              />
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1500" className="">
            <Image
              src="/assets/pic1.jpg"
              alt="image"
              height="900"
              width="900"
              className="h-[15rem] w-full lg:h-[20rem]"
            />
          </div>
        </div>

        {/* Right Images */}
        <div className="space-y-5 px-3">
          <div data-aos="zoom-in" data-aos-duration="1800" className="">
            <Image
              src="/assets/pic3.jpg"
              alt="image"
              height="900"
              width="900"
              className="h-[15rem] w-full lg:h-[20rem]"
            />
          </div>
          <div className="flex space-x-5">
            <div data-aos="zoom-in" data-aos-duration="2000" className="">
              <Image
                src="/assets/pic2.jpg"
                alt="image"
                height="900"
                width="900"
                className="md:h-[15rem] lg:h-[20rem]"
              />
            </div>

            <div data-aos="zoom-in" data-aos-duration="2500" className="">
              <Image
                src="/assets/pic1.jpg"
                alt="image"
                height="900"
                width="900"
                className="md:h-[15rem] lg:h-[20rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeImage
