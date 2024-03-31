import React from 'react'

const NewsLetter = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="min-h-[20rem] bg-primary mt-10 px-5 grid place-items-center"
    >
      <div className="">
        <div className="space-y-5">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1300"
            className="capitalize text-center text-white font-bold text-xl"
          >
            explore more about our hostel
          </h1>

          <p
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="capitalize text-center text-white text-3xl font-bold tracking-wider md:text-4xl"
          >
            sign up for our NewsLetter
          </p>

          <div
            data-aos="zoom-in"
            data-aos-duration="1800"
            className="space-x-3 text-center"
          >
            <input
              type="text"
              placeholder="Your email"
              className="px-2 py-2 rounded-lg"
            />

            <button
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="border-2 border-secondary text-white py-2 bg-secondary capitalize font-bold px-3 rounded-lg hover:scale-105 duration-300 md:w-1/3"
            >
              subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
