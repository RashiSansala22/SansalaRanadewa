import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-sm shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with two light colors */}
        <div className="text-3xl font-bold transition-all duration-300 cursor-pointer">
          <span className="dark:text-[#2900FC]">Sansala</span>{" "}
          <span className="text-gray-200">Ranadewa</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-200 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#about"
            className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-200 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#skills"
            className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 group"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-200 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#projects"
            className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-200 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-200 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? 
            <X size={24} className="transform rotate-0 transition-transform duration-200" /> : 
            <Menu size={24} className="transform rotate-0 transition-transform duration-200" />
          }
        </button>
      </div>
      
      {/* Mobile Navigation with smooth animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-1">
            <a
              href="#home"
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header