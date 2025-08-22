import React from 'react'
import { ArrowUpIcon, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Sansala Ranadewa
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative web solutions and seamless user experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/RashiSansala22" 
                className="bg-slate-800/50 p-3 rounded-full border border-slate-700/50 hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sansala-ranadewa-1950992b4" 
                className="bg-slate-800/50 p-3 rounded-full border border-slate-700/50 hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                className="bg-slate-800/50 p-3 rounded-full border border-slate-700/50 hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan-400 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3 md:col-start-9">
            <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mt-1 mr-4 text-cyan-400" size={18} />
                <span className="text-gray-300">rashisansala2002@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-4 text-cyan-400" size={18} />
                <span className="text-gray-300">+94 (76) 187-4842</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mt-1 mr-4 text-cyan-400" size={18} />
                <span className="text-gray-300">Puttalam, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sansala Ranadewa. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full shadow-lg hover:shadow-cyan-500/25 hover:scale-110 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon size={20} />
      </button>
    </footer>
  )
}

export default Footer