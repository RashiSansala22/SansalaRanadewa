import React, { useState, useEffect } from 'react'
import { Code2, Database, GraduationCap, Monitor, Sparkles, Brush, Zap } from 'lucide-react'

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('skills')
  const [animatedBars, setAnimatedBars] = useState({})

  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Kotlin', level: 70 },
    { name: 'Next.js', level: 80 },
  ]

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 80 },
    { name: 'Java', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'PHP', level: 70 },
  ]

  const education = [
    {
      degree: "BSc (Hons) in Information Technology, specializing in Software Engineering",
      institution: "SLIIT UNIVERSITY ",
      year: "2023 - Present",
      description: "Specialized in full-stack development, software architecture, and modern web technologies."
    },
    {
      degree: "Advanced Level",
      institution: "Bandaranayakapura M.V",
      year: "2018 - 2021",
      description: "Commerce stream with distinction in ICT"
    },
    {
      degree: "Ordinary Level",
      institution: "Bandaranayakapura M.V", 
      year: "2016 - 2018",
      description: "Successfully Completed"
    }
  ]

  const softwareTools = [
    { name: 'GitHub', icon: '🐙', level: 90 },
    { name: 'VS Code', icon: '🖥️', level: 95 },
    { name: 'Android Studio', icon: '🤖', level: 85 },
    { name: 'Eclipse', icon: '🟦', level: 80 },
    { name: 'Visual Studio', icon: '🖥️', level: 85 },
    { name: 'IntelliJ IDEA', icon: '💡', level: 90 },
  ]

  useEffect(() => {
    if (activeTab === 'skills' || activeTab === 'softwareTools') {
      const timer = setTimeout(() => {
        const newAnimatedBars = {}
        frontendSkills.forEach((_, index) => {
          newAnimatedBars[`frontend-${index}`] = true
        })
        backendSkills.forEach((_, index) => {
          newAnimatedBars[`backend-${index}`] = true
        })
        softwareTools.forEach((_, index) => {
          newAnimatedBars[`software-${index}`] = true
        })
        setAnimatedBars(newAnimatedBars)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [activeTab])

  const SkillBar = ({ skill, index, type }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-200">{skill.name}</span>
        <span className="text-sm font-semibold text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full rounded-full h-3 bg-gray-700">
        <div
          className="h-3 rounded-full transition-all duration-1000 ease-out"
          style={{
            background: 'linear-gradient(to right, #4f46e5, #22d3ee)',
            width: animatedBars[`${type}-${index}`] ? `${skill.level}%` : '0%'
          }}
        ></div>
      </div>
    </div>
  )

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-gray-900"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my technical expertise, educational background, and software I use
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-2">
          {[ 
            { id: 'skills', icon: <Code2 size={20} />, label: 'Skills' },
            { id: 'education', icon: <GraduationCap size={20} />, label: 'Education' },
            { id: 'softwareTools', icon: <Monitor size={20} />, label: 'Software & Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300
                ${activeTab === tab.id ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg' : 'text-gray-300 bg-gray-800'}`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="p-8 rounded-2xl border bg-gray-800 shadow-lg space-y-4">
                <div className="flex items-center mb-6">
                  <Code2 size={24} className="text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-200">Frontend</h3>
                </div>
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} type="frontend" />
                ))}
              </div>
              <div className="p-8 rounded-2xl border bg-gray-800 shadow-lg space-y-4">
                <div className="flex items-center mb-6">
                  <Database size={24} className="text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-200">Backend</h3>
                </div>
                {backendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} type="backend" />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="max-w-4xl mx-auto space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl border bg-gray-800 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <GraduationCap size={28} className="text-cyan-400 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-200">{edu.degree}</h4>
                      <p className="font-semibold text-gray-400">{edu.institution}</p>
                      <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'softwareTools' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {softwareTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-gray-900 font-bold text-lg">
                      {tool.icon}
                    </div>
                    <span className="text-gray-200 font-semibold">{tool.level}%</span>
                  </div>
                  <h3 className="text-gray-200 font-semibold mb-3">{tool.name}</h3>
                  <div className="w-full bg-gray-700 h-2.5 rounded-full">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                      style={{ width: animatedBars[`software-${index}`] ? `${tool.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Development Philosophy Section - Moved to bottom */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              My Development Philosophy
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide my approach to software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Clean Code */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg mr-3">
                  <Sparkles size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200">Clean Code</h3>
              </div>
              <p className="text-gray-300">
                I write maintainable, readable, and efficient code following best practices.
              </p>
            </div>

            {/* Pixel Perfect */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2 rounded-lg mr-3">
                  <Brush size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200">Pixel Perfect</h3>
              </div>
              <p className="text-gray-300">
                I obsess over details to create polished, visually appealing interfaces.
              </p>
            </div>

            {/* Performance First */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-green-500/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg mr-3">
                  <Zap size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200">Performance First</h3>
              </div>
              <p className="text-gray-300">
                I optimize for speed and efficiency across the entire stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection