import React from 'react'
import { BookOpen, Briefcase, GraduationCap, Code, User, Target, Users, Lightbulb, Rocket } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/20"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital solutions with creativity and precision
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Description */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700/50">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 shadow-lg">
                  <User size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who am I?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I am a Dedicated undergraduate software engineering student with a strong passion for building modern, user-friendly, and scalable applications. My focus is on full-stack development, where I enjoy designing intuitive interfaces, writing clean and efficient code, and solving real-world problems with technology.
With hands-on experience in React, Node.js, Java, Python, and databases, I am constantly exploring new frameworks and tools to stay up to date with the latest industry trends. 
<br />
<br />
Beyond coding, I'm deeply interested in areas like mobile app development, cloud computing, and AI-driven solutions.
I thrive in collaborative environments where I can share ideas, learn from others, and contribute to impactful projects. My goal is to grow as a software engineer while creating innovative solutions that make a meaningful difference.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Actively involved in extracurricular activities to develop leadership and collaborative 
                skills while staying updated with the latest technology trends.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="space-y-6">
            {/* Skills Progress Bars */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-medium text-gray-300">Frontend Development</span>
                    <span className="text-blue-400 font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full w-[90%] transition-all duration-1000 shadow-lg shadow-blue-500/30"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-medium text-gray-300">Backend Development</span>
                    <span className="text-purple-400 font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-3 rounded-full w-[80%] transition-all duration-1000 shadow-lg shadow-purple-500/30"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-medium text-gray-300">Database Management</span>
                    <span className="text-green-400 font-semibold">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full w-[75%] transition-all duration-1000 shadow-lg shadow-green-500/30"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-medium text-gray-300">Problem Solving</span>
                    <span className="text-orange-400 font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-3 rounded-full w-[95%] transition-all duration-1000 shadow-lg shadow-orange-500/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Qualities Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Fast Learner Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700/50 group">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-3 rounded-full">
                <Rocket size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fast Learner</h3>
            <p className="text-gray-300">
              Quick to adapt to new technologies and frameworks, always eager to expand my knowledge base.
            </p>
          </div>

          {/* Team Player Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700/50 group">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-3 rounded-full">
                <Users size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Team Player</h3>
            <p className="text-gray-300">
              Excellent communication skills and ability to collaborate effectively in diverse team environments.
            </p>
          </div>

          {/* Problem Solver Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-gray-700/50 group">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-green-400 p-3 rounded-full">
                <Lightbulb size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Problem Solver</h3>
            <p className="text-gray-300">
              Creative approach to problem-solving with a focus on efficiency and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection