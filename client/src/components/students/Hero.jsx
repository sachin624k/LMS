import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-20 md:pt-36 px-7 md:px-0 space-y-4 text-center bg-gradient-to-b from-cyan-100/70 to-white overflow-hidden">

      <h1 className="text-3xl md:text-5xl leading-snug font-bold text-gray-800 max-w-3xl mx-auto relative z-10">
        Empower your future with courses designed to{' '}
        <span className="relative inline-block text-blue-600 pb-6">
          fit your choice.
          <img
            src={assets.sketch}
            alt="decorative wave"
            className="hidden md:block absolute left-1/2 -bottom-6 w-[260px] -translate-x-[25%] opacity-80"
          />
        </span>
      </h1>

      <p className="hidden md:block text-gray-500 max-w-2xl mx-auto relative z-10">
        We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal & professional goals.
      </p>

      <p className="md:hidden text-gray-500 max-w-sm mx-auto relative z-10">
        We bring together world-class instructors to help you achieve your professional goals.
      </p>
      <SearchBar />
    </div>
  )
}


export default Hero
