import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-start px-6 py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900/10"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Text content */}
          <div className="lg:w-7/12 lg:pr-12 text-left">
            <p className="text-blue-400 font-bold mb-2 text-5xl animate-fade-in-up">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              <span className="text-white">Sansala</span>{" "}
              <span className="text-gray-300">Ranadewa</span>
            </h1>
            <h2 className="text-2xl font-bold md:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Full Stack Developer
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-lg leading-relaxed animate-fade-in-up">
              I build exceptional and accessible digital experiences for the web.
              Passionate about creating solutions that are both beautiful and
              functional.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-transparent text-blue-400 border-2 border-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 text-center shadow-lg hover:shadow-blue-400/25 transform hover:scale-105"
              >
                View My Work
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 animate-fade-in-up">
              <a
                href="https://github.com/RashiSansala22"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6 p-3 rounded-full hover:bg-gray-800/50"
                title="GitHub"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sansala-ranadewa-1950992b4"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6 p-3 rounded-full hover:bg-gray-800/50"
                title="LinkedIn"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="/Sansala Ranadewa Resume.pdf"
                download
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6 p-3 rounded-full hover:bg-gray-800/50"
                title="Download Resume"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-5/12 mt-12 lg:mt-0 flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-600 shadow-2xl shadow-blue-500/20 group-hover:shadow-purple-500/30 transition-all duration-500 transform group-hover:scale-105">
                <img
                  src="https://i.postimg.cc/g2xTz9YG/Whats-App-Image-2024-06-11-at-19-08-27-20fff6ef.jpg"
                  alt="Sansala Ranadewa"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
              <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border border-purple-400/20 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Scroll down */}
        <div className="flex justify-center mt-16 animate-fade-in-up">
          <a
            href="#about"
            className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 group"
          >
            <span className="mr-3 font-medium">Scroll Down</span>
            <svg
              className="w-5 h-5 animate-bounce group-hover:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
