import React from 'react'
import { CiSearch } from 'react-icons/ci'

import { FaAngleDown } from 'react-icons/fa6'

const SearchRooms = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="2000"
      className=" bg-secondary min-h-[10rem] px-2 rounded-lg pb-10 "
    >
      <div className="grid grid-cols-1 md:grid-cols-3 pt-10 px-5 capitalize font-bold md:text-xl md:space-x-5 space-y-5 md:space-y-0">
        <div className="">
          <h1 className="">room type</h1>
          <div className="flex">
            <input type="text" className="py-1 px-2  rounded-lg w-full" />
            <FaAngleDown className="mt-2" />
          </div>
        </div>

        <div className="">
          <h1 className="">search</h1>

          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="py-1 px-2 rounded-lg w-full"
            />
            <CiSearch className="mt-2" />
          </div>
        </div>

        <button className=" bg-primary px-5 py-1 mt-4 rounded-lg capitalize text-white lg:w-1/2">
          search
        </button>
      </div>
    </section>
  )
}

export default SearchRooms
