import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t py-4'>

      <div className='flex items-center gap-4 mt-2'>
        <img 
          className='hidden md:block w-20' 
          src={assets.Edulogo} 
          alt="logo"
        />
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>

        <p className="text-center text-xs md:text-sm text-gray-500">
          Copyright 2026 © Edume. All Right Reserved.
        </p>
      </div>

      {/* Social Icons */}
      <div className='flex items-center gap-4 max-md:mt-4'>

        <a href="#" className='w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full text-black hover:bg-blue-600 hover:text-white transition duration-300'>
          <i className="fab fa-facebook-f"></i>
        </a>

        <a href="#" className='w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full text-black hover:bg-black hover:text-white transition duration-300'>
          <i className="fab fa-x-twitter"></i>
        </a>

        <a href="#" className='w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full text-black hover:bg-pink-600 hover:text-white transition duration-300'>
          <i className="fab fa-instagram"></i>
        </a>

        <a href="#" className='w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full text-black hover:bg-blue-700 hover:text-white transition duration-300'>
          <i className="fab fa-linkedin-in"></i>
        </a>

      </div>

    </footer>
  )
}

export default Footer
