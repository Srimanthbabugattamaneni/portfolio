import React, { useState } from 'react';
import pic1 from './pic1.jpg';

import { Github, Linkedin, MapPin, Globe, Cloud, TestTube, Lock, Server, Database, Gauge, GraduationCap, Mail, Send, MessageSquare, GitBranch, TestTubes, Building2 } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    window.location.href = `mailto:amit@example.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#0a0b14] text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#0a0b14]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">

          </div>
          <div className="flex items-center space-x-8">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#education" className="hover:text-gray-300">Education</a>
            <a href="#experience" className="hover:text-gray-300">Experience</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
            <a 
  href="../srimanth_resume.pdf" 
  download="srimanth_resume.pdf" 
  className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
>
  Download Resume
</a>

          </div>
        </div>
      </nav>
      

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-6">
              Hi, I'm Srimanth <span className="wave">👋</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
            I'm a passionate developer who enjoys using programming to solve issues. I'm currently a master's student at Northeastern University studying Information systems. My prior experiences have given me knowledge of full-stack technologies. I'm immersed in the latest trends and technologies 
              in software engineering. With proficiency in JavaScript, MERN stack, Spring Boot, Kafka, Docker, Aws, Gcp and FrontEnd Technologies, I'm committed to pushing the boundaries of what's possible in the 
              digital realm. Let's embark on this journey together, shaping the future of technology one line of code at a time.
            </p>
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Boston, Massachussets</span>
              </div>
             
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/Srimanthbabugattamaneni" className="p-2 hover:bg-gray-800 rounded-full" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/srimanth-gattamaneni/" className="p-2 hover:bg-gray-800 rounded-full" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-9">
              <img 
                src={pic1}
                alt="Profile"
                className="w-full max-w-md rounded-lg mx-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-gray-800 rounded-lg -z-10"></div>
          </div>
        </div>

        <section id="education" className="mt-32">
  {/* Education Section */}
  <div className="max-w-7xl mx-auto mt-32">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-gray-800 text-sm font-medium inline-block mb-4">
              Education
            </span>
            <h2 className="text-3xl font-bold mb-4">Academic Background</h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Northeastern University */}
            <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">Northeastern University, Boston</h3>
                      <p className="text-gray-400 mt-1">Master's Degree</p>
                    </div>
                    <span className="text-gray-400">2023 - 2025</span>
                  </div>
                  <p className="mt-4 text-gray-300 leading-relaxed">
                    Currently pursuing a Master of Science in Information Systems with an expected graduation in May 2025. 
                    My studies emphasize key areas like  Network Structures and Cloud Computing ,Web Design, User Experience Engineering, Application Development, 
                    as well as Program Structures and Object-oriented Design.
                  </p>
                </div>
              </div>
            </div>

            {/* JNTU */}
            <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-purple-400">Vellore Institute of Technological , Vellore</h3>
                      <p className="text-gray-400 mt-1">Bachelor's Degree</p>
                    </div>
                    <span className="text-gray-400">2019 - 2023</span>
                  </div>
                  <p className="mt-4 text-gray-300 leading-relaxed">
                    Graduated with a Bachelor of Technology in Mechanical Enginnering, where I focused on coursework in 
                    Data Structures ,Database Management, Operating Systems, and Algorithm Design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
</section>

<section>
   {/* Experience Section */}
   <div className="max-w-7xl mx-auto mt-32">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-gray-800 text-sm font-medium inline-block mb-4">
              Experience
            </span>
            <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <Building2 className="w-8 h-8 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-green-400">Software Engineer</h3>
                      <p className="text-gray-400 mt-1">Nuronics - Hyderabad, India</p>
                    </div>
                    <span className="text-gray-400">May 2022 - July 2022</span>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">Developed an application to manage AI-driven voice interactions, meaning-based document search, and speech recognition using React for the frontend and Node.js for the backend.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <GitBranch className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">Built a REST API that receives data from Apache Kafka using Node.js and Express.js. The processed data is then efficiently pushed to the dashboard, achieving a 30 percent reduction in data processing latency and ensuring high availability and scalability for data management.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TestTubes className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">Resolved customer-reported issues and automated frontend testing using Playwright, ensuring robust application performance and reliability.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Express.js</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Apache Kafka</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Playwright</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">REST API</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</section>

        

        {/* Skills Section */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-gray-800 text-sm font-medium inline-block mb-4">
              Skills
            </span>
            <h2 className="text-3xl font-bold mb-4">
              The skills, tools and technologies I am really good at:
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {[
              { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/spring/6DB33F' },
              { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
              { name: 'Kafka', icon: 'https://cdn.simpleicons.org/apachekafka/231F20' },
              { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
              { name: 'GCP', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
              { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
              { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
              { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
              { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
              { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
              { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
              { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/000000' },
              { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
              { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
              { name: 'CSS', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
              { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
              { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
              { name: 'Sass', icon: 'https://cdn.simpleicons.org/sass/CC6699' },
              { name: 'Java', icon: 'https://cdn.simpleicons.org/java/007396' },
              { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux/764ABC' },
              { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' }
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-800 transition-colors">
                <img 
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-12 h-12 mb-3"
                />
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <section id="experience" className="mt-32">
          {/* Projects Section */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-gray-800 text-sm font-medium inline-block mb-4">
              Projects
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Metaverse Project */}
            <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Metaverse Platform</h3>
                  <p className="text-gray-400 text-sm">October 2024</p>
                </div>
                <Globe className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <TestTube className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-300">Developed a full-stack real-time collaborative platform, increasing user engagement by 60% through seamless avatar customization and dynamic space creation.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Gauge className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-gray-300">Implemented a robust Node.js backend API with 95% test coverage using Jest, reducing post-release bugs by 40%.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Server className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-gray-300">Integrated WebSocket for real-time communication, decreasing latency by 70% and enabling fluid user interactions.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Lock className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-gray-300">Designed a secure user authentication system, enhancing data protection and reducing unauthorized access attempts by 80%.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Jest</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">WebSocket</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>

            {/* Cloud-Native Web Application Project */}
            <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Cloud-Native Web Application</h3>
                  <p className="text-gray-400 text-sm">January 2024 - April 2024</p>
                </div>
                <Cloud className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Database className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-300">Built a robust backend system for user operations using Node.js, SQL Server and Sequelize ORM with custom AMI creation using Packer.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Lock className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-gray-300">Implemented comprehensive user authentication with JWT tokens, email verification, and role-based access control.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Server className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-gray-300">Deployed on GCP using Terraform with automated CI/CD pipelines via GitHub Actions, including load balancers and auto-scaling.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">GCP</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Terraform</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">SQL Server</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">GitHub Actions</span>
              </div>
            </div>
          </div>
        </div>

 
</section>

<section id="contact" className="mt-32">
  {/* Contact Section */}
  <div className="max-w-7xl mx-auto mt-32 mb-20">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-gray-800 text-sm font-medium inline-block mb-4">
              Contact
            </span>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Mail</h3>
                    <a href="mailto:gattmaneni.s@northeastern.edu" className="text-gray-400 hover:text-blue-400 transition-colors">
                      gattmaneni.s@northeastern.edu
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">Boston, Massachusetts</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <Linkedin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-white"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-white resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      

</section>
</main>

        
        

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Amit. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/srimanth-gattamaneni/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;