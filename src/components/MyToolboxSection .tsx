import React, { useState } from 'react';
import { Code, Palette, Server, Database, Wrench } from 'lucide-react';

const MyToolboxSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const tools = [
    { id: 1, name: 'React', category: 'frontend', proficiency: 90, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { id: 2, name: 'TypeScript', category: 'frontend', proficiency: 85, icon: 'TS', color: 'from-blue-500 to-blue-600' },
    { id: 3, name: 'Next.js', category: 'frontend', proficiency: 80, icon: 'N', color: 'from-gray-800 to-black' },
    { id: 4, name: 'Spring Boot', category: 'backend', proficiency: 95, icon: '🍃', color: 'from-green-600 to-green-700' },
    { id: 5, name: 'Figma', category: 'design', proficiency: 75, icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { id: 7, name: 'Node.js', category: 'backend', proficiency: 85, icon: '🟢', color: 'from-green-500 to-green-600' },
    { id: 8, name: 'Express', category: 'backend', proficiency: 80, icon: 'EX', color: 'from-gray-600 to-gray-700' },
    { id: 10, name: 'MongoDB', category: 'database', proficiency: 85, icon: '🍃', color: 'from-green-500 to-green-600' },
    { id: 13, name: 'Java', category: 'backend', proficiency: 80, icon: '☕', color: 'from-red-500 to-orange-500' },
    { id: 14, name: 'Python', category: 'backend', proficiency: 85, icon: '🐍', color: 'from-blue-500 to-yellow-500' },
    // New tools
    { id: 15, name: 'JavaScript', category: 'frontend', proficiency: 90, icon: 'JS', color: 'from-yellow-400 to-yellow-500' },
    { id: 16, name: 'C++', category: 'backend', proficiency: 75, icon: 'C++', color: 'from-blue-600 to-blue-700' },
    { id: 17, name: 'HTML', category: 'frontend', proficiency: 95, icon: '📄', color: 'from-orange-400 to-red-500' },
    { id: 18, name: 'CSS', category: 'frontend', proficiency: 90, icon: '🎨', color: 'from-blue-400 to-indigo-500' },
    { id: 19, name: 'Tailwind', category: 'frontend', proficiency: 85, icon: 'TW', color: 'from-teal-400 to-blue-500' },
    { id: 20, name: 'MySQL', category: 'database', proficiency: 80, icon: '🐬', color: 'from-blue-500 to-blue-700' },
    { id: 21, name: 'Git', category: 'other', proficiency: 85, icon: '🔧', color: 'from-red-500 to-orange-500' }
  ];

  const categories = [
    { key: 'all', label: 'All Tools', count: tools.length },
    { key: 'frontend', label: 'Frontend', count: tools.filter(t => t.category === 'frontend').length },
    { key: 'backend', label: 'Backend', count: tools.filter(t => t.category === 'backend').length },
    { key: 'database', label: 'Database', count: tools.filter(t => t.category === 'database').length },
    { key: 'design', label: 'Design', count: tools.filter(t => t.category === 'design').length },
    { key: 'other', label: 'Other', count: tools.filter(t => t.category === 'other').length }
  ];

  const filteredTools = activeFilter === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'frontend': return <Code size={16} className="text-slate-800 dark:text-slate-200" />;
      case 'backend': return <Server size={16} className="text-slate-800 dark:text-slate-200" />;
      case 'database': return <Database size={16} className="text-slate-800 dark:text-slate-200" />;
      case 'design': return <Palette size={16} className="text-slate-800 dark:text-slate-200" />;
      case 'other': return <Wrench size={16} className="text-slate-800 dark:text-slate-200" />;
      default: return <Code size={16} className="text-slate-800 dark:text-slate-200" />;
    }
  };

  return (
    <section id="toolbox" className="py-16 bg-slate-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            My Toolbox
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center bg-white dark:bg-gray-800 rounded-xl p-2 shadow-sm border border-slate-200 dark:border-gray-700">
            {categories.map(({ key, label, count }) => (
              <button
                key={key}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === key
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveFilter(key)}
              >
                {key !== 'all' && getCategoryIcon(key)}
                <span>{label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === key 
                    ? 'bg-white/20' 
                    : 'bg-slate-200 dark:bg-gray-700'
                }`}>
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              {/* Tool Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {tool.icon}
                </div>
                <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {tool.proficiency}%
                </span>
              </div>

              {/* Tool Name */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  {tool.name}
                </h3>
              </div>

              {/* Proficiency Bar */}
              <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                <div 
                  className={`h-2.5 rounded-full bg-gradient-to-r ${tool.color} transition-all duration-1000`}
                  style={{ width: `${tool.proficiency}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-300">
                <span>Proficiency</span>
                <span>{tool.proficiency}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-slate-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-blue-500 mb-2">
              {tools.filter(t => t.category === 'frontend').length}+
            </div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Frontend Tools</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-slate-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-green-500 mb-2">
              {tools.filter(t => t.category === 'backend').length}+
            </div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Backend Tools</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-slate-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-purple-500 mb-2">
              {tools.filter(t => t.category === 'database').length}+
            </div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Databases</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-slate-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-orange-500 mb-2">
              2+
            </div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyToolboxSection;
