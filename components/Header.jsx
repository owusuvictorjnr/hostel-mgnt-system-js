'use client'

import ThemeContext from '@/context/ThemeContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3">
        <Link href="/" className=" font-black text-tertiary-dark capitalize">
          ebenezer hostel
        </Link>

        <ul className="flex item-center ml-5">
          {/* Auth and dark mode section */}
          <li className="flex items-center">
            <Link href="/auth">
              <FaUserCircle className=" cursor-pointer" />
            </Link>
          </li>

          <li className=" ml-2">
            {darkTheme ? (
              <MdOutlineLightMode
                className=" cursor-pointer"
                onClick={() => {
                  setDarkTheme(false)
                  localStorage.removeItem('hostel-theme')
                }}
              />
            ) : (
              <MdDarkMode
                className=" cursor-pointer"
                onClick={() => {
                  setDarkTheme(true)
                  localStorage.setItem('hostel-theme', 'true')
                }}
              />
            )}
          </li>
        </ul>
      </div>

      <ul className=" flex items-center justify-between capitalize w-full lg:w-1/3">
        <li className=" hover:-translate-y-2 duration-500 transition-all">
          <Link href="/" className="">
            home
          </Link>
        </li>

        <li className=" hover:-translate-y-2 duration-500 transition-all">
          <Link href="/rooms" className="">
            rooms
          </Link>
        </li>

        <li className=" hover:-translate-y-2 duration-500 transition-all">
          <Link href="/about-us" className="">
            about us
          </Link>
        </li>

        <li className=" hover:-translate-y-2 duration-500 transition-all">
          <Link href="/contact-us" className="">
            contact us
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
