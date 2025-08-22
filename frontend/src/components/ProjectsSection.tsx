import React, { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'Smart Pet Care Marketplace',
      category: 'fullstack',
      image: 'https://i.postimg.cc/bwnTJkBB/1746553023458.jpg',
      description: 'An all-in-one platform connecting pet owners with trusted services, products, and wellness solutions—from grooming and veterinary care to meditation, fitness tracking, and training.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB','Vite'],
      liveLink: 'https://paw-go.vercel.app/',
      githubLink: 'https://github.com/RashiSansala22/Smart-Pet-Care-Marketplace',
    },
    {
      id: 2,
      title: 'Online Bus Ticket Reservation System',
      category: 'fullstack',
      image: 'https://i.postimg.cc/FKB3VK8L/1746440084635.jpg',
      description: 'A web-based app that simplifies bus booking, allowing users to browse routes, select dates, and reserve tickets online with a secure and user-friendly interface.',
      technologies: ['Java', 'HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://github.com/RashiSansala22/Bus-Ticket-Reservation-System',
      githubLink: 'https://github.com/RashiSansala22/Bus-Ticket-Reservation-System',
    },
    {
      id: 3,
      title: 'Loomse: Textile and Garment Management System',
      category: 'fullstack',
      image: 'https://i.postimg.cc/ZRfbd9MG/1746439556928.jpg',
      description: 'Loomse is transforming how the textile and garment industry operates with an innovative, user-friendly platform designed to streamline workflows and boost efficiency.',
      technologies: ['HTML', 'CSS', 'JavaScript','PHP'],
      liveLink: 'https://github.com/RashiSansala22/Textile-Garment-Management-System',
      githubLink: 'https://github.com/RashiSansala22/Textile-Garment-Management-System',
    },
    {
      id: 4,
      title: 'Food Ordering System KFC',
      category: 'frontend',
      image: 'https://i.postimg.cc/LXZSnyj1/1739001021738.jpg',
      description: 'A user-friendly platform inspired by popular fast-food apps, allowing customers to browse menus, customize their orders, and place transactions quickly and smoothly online.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      liveLink: 'https://github.com/RashiSansala22/Food-Ordering-System-KFC',
      githubLink: 'https://github.com/RashiSansala22/Food-Ordering-System-KFC',
    },
    {
      id: 5,
      title: 'Pet Flix Mobile App',
      category: 'MobileApps',
      image: 'https://i.postimg.cc/VNfWR6gf/1750420778597.jpg',
      description: 'PetFlix Pet Care a seamless and user friendly mobile app designed to simplify pet management and enhance the way pet owners care for their furry friends!',
      technologies: ['Kotlin', 'Android Studio'],
      liveLink: '#',
      githubLink: '#',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter((project) => project.category === activeFilter)

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects. Each project reflects my skills
            and experience in different areas of development, showcasing creativity and technical expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 justify-center bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'frontend', label: 'Frontend' },
              { key: 'backend', label: 'Backend' },
              { key: 'fullstack', label: 'Full Stack' },
              { key: 'MobileApps', label: 'Mobile Apps' }
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === key
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setActiveFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <ExternalLink size={20} />
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm p-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 text-xs font-semibold rounded-full uppercase tracking-wide">
                    {project.category === 'MobileApps' ? 'Mobile App' : project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 text-sm rounded-lg font-medium hover:from-blue-100 hover:to-indigo-100 hover:text-blue-700 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>

                  {project.githubLink && project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-200 mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try selecting a different category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let's Talk
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
