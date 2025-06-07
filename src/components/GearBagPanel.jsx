// import React, { useState, useEffect } from 'react';
// import { Mountain, Code, Mail, Phone, MapPin, Github, Linkedin, Award, Target, Zap, GraduationCap, Briefcase, Trophy, Brain, Database, Globe, Terminal, BookOpen, Users, TrendingUp } from 'lucide-react';

// const ClimbingPortfolio = () => {
//   const [activeSection, setActiveSection] = useState('hero');
//   const [chalkParticles, setChalkParticles] = useState([]);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [typedText, setTypedText] = useState('');
//   const [isTyping, setIsTyping] = useState(true);

//   // Famous boulder problems themed around Mohammed's projects
//   const famousBoulders = [
//     { name: "DropAlert Dynamo", grade: "V12", location: "ML Valley" },
//     { name: "MPEA Predictor", grade: "V11", location: "Research Ridge" },
//     { name: "AmusePark Ascent", grade: "V10", location: "Java Junction" },
//     { name: "Motion AI Boulder", grade: "V9", location: "Computer Vision Cliff" },
//     { name: "The GPA Crusher", grade: "V13", location: "SJSU Summit" },
//     { name: "Internship Intimidator", grade: "V8", location: "Career Canyon" }
//   ];

//   // Climbing grades progression
//   const grades = ['V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', 'V13'];

//   // Mohammed's actual data
//   const portfolioData = {
//     name: "Mohammed Nassar",
//     title: "Computer Science Student & Problem Solver",
//     subtitle: "Climbing the peaks of Machine Learning, Full-Stack Development & Research",
//     contact: {
//       email: "mnassar.personal@gmail.com",
//       phone: "(650) 732-7573",
//       location: "Santa Clara, CA",
//       linkedin: "linkedin.com/in/monassardev",
//       github: "github.com/NassarHQ"
//     },
//     education: {
//       school: "San Jose State University",
//       degree: "Bachelor of Science in Computer Science",
//       gpa: "3.94/4.0",
//       graduation: "Expected May 2026",
//       coursework: ["Data Structures & Algorithms", "Object-Oriented Design", "Machine Learning", "Automata Theory", "Programming Paradigms", "System Architecture", "Big Data Processing"]
//     },
//     skills: [
//       { category: "Languages", items: ["Python", "Java", "C++", "Scheme", "Haskell"], level: "V11", icon: "🐍" },
//       { category: "Databases", items: ["MySQL", "MongoDB", "SQL", "Oracle"], level: "V9", icon: "🗄️" },
//       { category: "ML & Frameworks", items: ["scikit-learn", "React", "OpenCV", "pandas", "NumPy"], level: "V10", icon: "🤖" },
//       { category: "Web & Cloud", items: ["JavaScript", "HTML", "CSS", "REST APIs", "AWS", "Google Cloud"], level: "V9", icon: "☁️" },
//       { category: "Tools", items: ["Git", "Linux", "Maven", "pytest", "JUnit", "Spark"], level: "V8", icon: "🔧" }
//     ],
//     projects: [
//       {
//         name: "DropAlert - The AI Oracle",
//         grade: "V12",
//         description: "Built an ML pipeline that predicts student dropouts with 86% accuracy using XGBoost and SMOTE",
//         highlights: ["24% better than baseline", "35% faster training", "End-to-end deployment"],
//         tech: ["Python", "XGBoost", "SQL", "Cloud", "ML"],
//         type: "Machine Learning",
//         impact: "Helps identify at-risk students early for personalized support"
//       },
//       {
//         name: "MPEA Predictor - Research Beast",
//         grade: "V11",
//         description: "Reduced costly DFT simulations by 50% with predictive modeling for elastic constants",
//         highlights: ["18% accuracy improvement", "Google Cloud deployment", "R&D Innovation"],
//         tech: ["Python", "Machine Learning", "Google Cloud", "Research"],
//         type: "Research Project",
//         impact: "Saves thousands in computational costs for materials research"
//       },
//       {
//         name: "AmusePark - Java Juggernaut",
//         grade: "V10",
//         description: "Full-stack amusement park management system with 20+ entities and scalable architecture",
//         highlights: ["Modular design", "Java backend", "Scalable architecture"],
//         tech: ["Java", "OOP", "Backend", "System Design"],
//         type: "Full-Stack App",
//         impact: "Demonstrates enterprise-level system design skills"
//       },
//       {
//         name: "Motion AI - Vision Master",
//         grade: "V9",
//         description: "95% accurate pose analyzer using OpenCV with 30% speed optimization",
//         highlights: ["95% accuracy", "30% speed boost", "GenAI integration"],
//         tech: ["Python", "OpenCV", "Computer Vision", "GenAI"],
//         type: "AI Application",
//         impact: "Real-time pose feedback for fitness and rehabilitation"
//       }
//     ],
//     experience: {
//       role: "Research Intern",
//       company: "San Jose State University",
//       period: "June 2024 – August 2024",
//       grade: "V10",
//       achievements: [
//         "Implemented predictive models reducing DFT simulation costs by 50%",
//         "Improved model accuracy by 18% through feature engineering",
//         "Deployed scalable solution on Google Cloud platform"
//       ]
//     },
//     leadership: {
//       role: "Supplemental Instruction Leader",
//       organization: "San Jose City College",
//       period: "January 2023 - May 2023",
//       achievement: "Improved student comprehension by 80% through innovative tutoring"
//     }
//   };

//   // Typing animation
//   const fullText = "Ready to tackle your hardest problems! 🧗‍♂️";
//   useEffect(() => {
//     let i = 0;
//     const typingInterval = setInterval(() => {
//       if (i < fullText.length) {
//         setTypedText(fullText.slice(0, i + 1));
//         i++;
//       } else {
//         setIsTyping(false);
//         clearInterval(typingInterval);
//       }
//     }, 100);
//     return () => clearInterval(typingInterval);
//   }, []);

//   // Mouse tracking for chalk effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
      
//       if (Math.random() > 0.8) {
//         const newParticle = {
//           id: Date.now() + Math.random(),
//           x: e.clientX + (Math.random() - 0.5) * 20,
//           y: e.clientY + (Math.random() - 0.5) * 20,
//           life: 100,
//           size: Math.random() * 3 + 1
//         };
//         setChalkParticles(prev => [...prev.slice(-15), newParticle]);
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Animate chalk particles
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setChalkParticles(prev => 
//         prev.map(p => ({ ...p, life: p.life - 3 }))
//            .filter(p => p.life > 0)
//       );
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   const GradeTag = ({ grade, size = "sm" }) => (
//     <span className={`inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full ${size === 'sm' ? 'text-xs' : 'text-sm'} shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer`}>
//       {grade}
//     </span>
//   );

//   const ChalkParticle = ({ particle }) => (
//     <div
//       className="fixed pointer-events-none z-50"
//       style={{
//         left: particle.x,
//         top: particle.y,
//         opacity: particle.life / 100,
//         transform: `translate(-50%, -50%) scale(${particle.life / 100})`
//       }}
//     >
//       <div 
//         className="bg-white rounded-full blur-sm"
//         style={{ 
//           width: `${particle.size}px`, 
//           height: `${particle.size}px` 
//         }}
//       ></div>
//     </div>
//   );

//   const StatCard = ({ icon: Icon, label, value, grade }) => (
//     <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-600 hover:border-yellow-400 transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer">
//       <div className="flex items-center justify-between mb-3">
//         <Icon className="w-8 h-8 text-yellow-400" />
//         <GradeTag grade={grade} />
//       </div>
//       <div className="text-2xl font-bold text-white mb-1">{value}</div>
//       <div className="text-gray-400 text-sm">{label}</div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative">
      
//       {/* Chalk Particles */}
//       {chalkParticles.map(particle => (
//         <ChalkParticle key={particle.id} particle={particle} />
//       ))}

//       {/* Dynamic Mountain Background */}
//       <div className="fixed inset-0 opacity-5 pointer-events-none">
//         <img 
//           src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80" 
//           alt="Mountain climbing background" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 25% 25%, yellow 1px, transparent 1px),
//                            radial-gradient(circle at 75% 75%, orange 1px, transparent 1px),
//                            radial-gradient(circle at 50% 50%, yellow 1px, transparent 1px)`,
//           backgroundSize: '60px 60px',
//           animation: 'float 20s ease-in-out infinite'
//         }}></div>
//       </div>

//       {/* Hero Section */}
//       <section className="min-h-screen flex items-center justify-center relative px-4">
//         <div className="text-center z-10 max-w-4xl">
//           <div className="mb-8 relative">
//             <div className="relative inline-block">
//               <Mountain className="w-24 h-24 mx-auto text-yellow-400 mb-4 animate-pulse" />
//               <div className="absolute -top-2 -right-2 animate-bounce">
//                 <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
//               </div>
//               <div className="absolute -bottom-1 -left-2 animate-ping">
//                 <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
//               </div>
//             </div>
//           </div>
          
//           <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
//             {portfolioData.name}
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-300 mb-2">
//             {portfolioData.title}
//           </p>
          
//           <p className="text-lg text-yellow-400 mb-8 font-medium">
//             {portfolioData.subtitle}
//           </p>

//           {/* Key Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
//             <StatCard icon={GraduationCap} label="GPA" value="3.94" grade="V13" />
//             <StatCard icon={Trophy} label="Projects" value="4+" grade="V12" />
//             <StatCard icon={Brain} label="ML Accuracy" value="95%" grade="V11" />
//             <StatCard icon={TrendingUp} label="Cost Reduction" value="50%" grade="V10" />
//           </div>
          
//           <div className="flex flex-wrap justify-center gap-3 mb-8">
//             {grades.slice(8, 14).map((grade, i) => (
//               <GradeTag key={grade} grade={grade} size="md" />
//             ))}
//           </div>

//           {/* Real Climbing Equipment Images */}
//           <div className="flex justify-center space-x-8 mb-8">
//             <div className="hover:scale-125 transition-transform cursor-pointer animate-bounce group" title="Climbing Shoes" style={{animationDelay: '0s'}}>
//               <img 
//                 src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
//                 alt="Climbing Shoes" 
//                 className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 group-hover:border-orange-500 transition-all shadow-lg"
//               />
//             </div>
//             <div className="hover:scale-125 transition-transform cursor-pointer animate-bounce group" title="Chalk Bag" style={{animationDelay: '0.2s'}}>
//               <img 
//                 src="https://images.unsplash.com/photo-1551524164-6cf6ac2b5c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
//                 alt="Chalk Bag" 
//                 className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 group-hover:border-orange-500 transition-all shadow-lg"
//               />
//             </div>
//             <div className="hover:scale-125 transition-transform cursor-pointer animate-bounce group" title="Climbing Harness" style={{animationDelay: '0.4s'}}>
//               <img 
//                 src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
//                 alt="Climbing Harness" 
//                 className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 group-hover:border-orange-500 transition-all shadow-lg"
//               />
//             </div>
//             <div className="hover:scale-125 transition-transform cursor-pointer animate-bounce group" title="Climbing Rope" style={{animationDelay: '0.6s'}}>
//               <img 
//                 src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
//                 alt="Climbing Rope" 
//                 className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 group-hover:border-orange-500 transition-all shadow-lg"
//               />
//             </div>
//           </div>

//           <div className="mb-8">
//             <p className="text-lg text-gray-300">
//               {typedText}
//               {isTyping && <span className="animate-pulse">|</span>}
//             </p>
//           </div>

//           <button 
//             onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
//             className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-red-500 text-black px-8 py-4 rounded-full font-bold text-lg transform hover:scale-110 transition-all shadow-2xl animate-pulse hover:animate-none"
//           >
//             Begin the Ascent 🚀
//           </button>
//         </div>

//         {/* Famous Boulder Names Floating */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {famousBoulders.map((boulder, i) => (
//             <div
//               key={boulder.name}
//               className="absolute text-gray-600 text-sm opacity-20 hover:opacity-60 transition-all duration-500 transform hover:scale-110"
//               style={{
//                 left: `${15 + (i * 12) % 70}%`,
//                 top: `${25 + (i * 8) % 50}%`,
//                 animationDelay: `${i * 0.8}s`,
//                 animation: 'float 15s ease-in-out infinite'
//               }}
//             >
//               <div className="hover:text-yellow-400 transition-colors cursor-pointer">
//                 <div className="font-bold">{boulder.name}</div>
//                 <div className="text-xs">{boulder.grade} • {boulder.location}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* About/Education Section */}
//       <section id="about" className="py-20 px-4 bg-gradient-to-r from-gray-900/80 to-black/80">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400">
//             🎓 Base Camp: Education
//           </h2>
          
//           <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-600 hover:border-yellow-400 transition-all transform hover:scale-105 shadow-2xl">
//             <div className="flex flex-wrap items-center justify-between mb-6">
//               <div>
//                 <h3 className="text-3xl font-bold text-yellow-400">{portfolioData.education.school}</h3>
//                 <p className="text-xl text-gray-300">{portfolioData.education.degree}</p>
//                 <p className="text-gray-400">{portfolioData.education.graduation}</p>
//               </div>
//               <div className="text-right">
//                 <div className="text-4xl font-bold text-white mb-2">{portfolioData.education.gpa}</div>
//                 <GradeTag grade="V13" size="lg" />
//               </div>
//             </div>
            
//             <div className="mb-6">
//               <h4 className="text-xl font-bold text-yellow-400 mb-4">🧗‍♂️ Technical Routes Conquered:</h4>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
//                 {portfolioData.education.coursework.map((course, i) => (
//                   <div key={course} className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 cursor-pointer">
//                     <span className="text-sm font-medium">{course}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400">
//             ⚡ Technical Arsenal
//           </h2>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {portfolioData.skills.map((skillGroup, i) => (
//               <div key={skillGroup.category} className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all transform hover:scale-105 hover:shadow-2xl">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center space-x-3">
//                     <span className="text-3xl">{skillGroup.icon}</span>
//                     <h3 className="text-xl font-bold text-yellow-400">{skillGroup.category}</h3>
//                   </div>
//                   <GradeTag grade={skillGroup.level} />
//                 </div>
                
//                 <div className="space-y-2">
//                   {skillGroup.items.map((skill, j) => (
//                     <div key={skill} className="flex items-center justify-between bg-gray-700 px-3 py-2 rounded-lg hover:bg-gray-600 transition-all">
//                       <span className="text-sm font-medium">{skill}</span>
//                       <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="mt-4 w-full bg-gray-700 rounded-full h-3">
//                   <div 
//                     className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-2000 animate-pulse"
//                     style={{ width: `${85 + i * 3}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-black/80 to-gray-900/80">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400">
//             🏆 Epic Problem Solves
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {portfolioData.projects.map((project, i) => (
//               <div key={project.name} className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-2xl border border-gray-600 hover:border-yellow-400 transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-2xl font-bold text-yellow-400">{project.name}</h3>
//                   <GradeTag grade={project.grade} size="lg" />
//                 </div>
                
//                 <p className="text-gray-300 mb-4 text-lg">{project.description}</p>
                
//                 <div className="mb-4">
//                   <h4 className="text-yellow-400 font-bold mb-2">🎯 Key Achievements:</h4>
//                   <div className="space-y-2">
//                     {project.highlights.map((highlight, j) => (
//                       <div key={j} className="flex items-center space-x-2">
//                         <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
//                         <span className="text-gray-300 text-sm">{highlight}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map(tech => (
//                     <span key={tech} className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-xs rounded-full font-medium hover:from-yellow-400 hover:to-orange-500 hover:text-black transition-all cursor-pointer">{tech}</span>
//                   ))}
//                 </div>
                
//                 <div className="flex items-center justify-between">
//                   <div className="text-sm text-gray-400 flex items-center">
//                     <Target className="w-4 h-4 mr-1" />
//                     {project.type}
//                   </div>
//                   <div className="text-xs text-yellow-400 font-medium">
//                     💡 {project.impact}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400">
//             💼 Professional Ascents
//           </h2>
          
//           <div className="space-y-8">
//             <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all transform hover:scale-105 shadow-2xl">
//               <div className="flex flex-wrap items-center justify-between mb-6">
//                 <div>
//                   <h3 className="text-3xl font-bold text-yellow-400">{portfolioData.experience.role}</h3>
//                   <p className="text-xl text-gray-300">{portfolioData.experience.company}</p>
//                   <p className="text-gray-400">{portfolioData.experience.period}</p>
//                 </div>
//                 <GradeTag grade={portfolioData.experience.grade} size="lg" />
//               </div>
              
//               <div className="grid md:grid-cols-1 gap-4">
//                 {portfolioData.experience.achievements.map((achievement, j) => (
//                   <div key={j} className="flex items-center space-x-3 bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-all">
//                     <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
//                     <span className="text-gray-300 font-medium">{achievement}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all transform hover:scale-105 shadow-2xl">
//               <div className="flex flex-wrap items-center justify-between mb-4">
//                 <div>
//                   <h3 className="text-2xl font-bold text-yellow-400">{portfolioData.leadership.role}</h3>
//                   <p className="text-lg text-gray-300">{portfolioData.leadership.organization}</p>
//                   <p className="text-gray-400">{portfolioData.leadership.period}</p>
//                 </div>
//                 <GradeTag grade="V8" />
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <Users className="w-5 h-5 text-yellow-400" />
//                 <span className="text-gray-300">{portfolioData.leadership.achievement}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 px-4 bg-gradient-to-t from-black via-gray-900 to-gray-800">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-5xl font-bold mb-8 text-yellow-400">
//             🤝 Ready to Rope Up?
//           </h2>
          
//           <p className="text-xl text-gray-300 mb-12">
//             Let's tackle your next challenging project together!
//           </p>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl hover:from-yellow-400 hover:to-orange-500 hover:text-black transition-all transform hover:scale-105 shadow-xl">
//               <Mail className="w-6 h-6" />
//               <span className="font-medium text-sm">{portfolioData.contact.email}</span>
//             </a>
//             <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl hover:from-yellow-400 hover:to-orange-500 hover:text-black transition-all transform hover:scale-105 shadow-xl">
//               <Phone className="w-6 h-6" />
//               <span className="font-medium">{portfolioData.contact.phone}</span>
//             </div>
//             <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl hover:from-yellow-400 hover:to-orange-500 hover:text-black transition-all transform hover:scale-105 shadow-xl">
//               <Linkedin className="w-6 h-6" />
//               <span className="font-medium text-sm">LinkedIn</span>
//             </a>
//             <a href={`https://${portfolioData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl hover:from-yellow-400 hover:to-orange-500 hover:text-black transition-all transform hover:scale-105 shadow-xl">
//               <Github className="w-6 h-6" />
//               <span className="font-medium text-sm">GitHub</span>
//             </a>
//           </div>

//           {/* Call to Action */}
//           <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-2xl text-black mb-8">
//             <h3 className="text-2xl font-bold mb-4">🎯 Why Choose Mohammed?</h3>
//             <div className="grid md:grid-cols-3 gap-4 text-sm font-medium">
//               <div>🏆 3.94 GPA Excellence</div>
//               <div>🤖 95% ML Accuracy</div>
//               <div>💰 50% Cost Reduction</div>
//               <div>⚡ 35% Speed Optimization</div>
//               <div>📈 24% Performance Boost</div>
//               <div>🎓 Research Experience</div>
//             </div>
//           </div>

//           {/* Real Chalk Bag Effect with Image */}
//           <div className="text-center">
//             <div className="inline-block relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1551524164-6cf6ac2b5c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80" 
//                 alt="Chalk bag" 
//                 className="w-20 h-20 rounded-full mx-auto mb-4 animate-bounce shadow-2xl border-4 border-yellow-400 object-cover"
//               />
//               <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full opacity-80 animate-ping"></div>
//               <p className="text-gray-400 text-lg font-medium">
//                 Let's climb to new heights together! 🧗‍♂️✨
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-10px) rotate(1deg); }
//           66% { transform: translateY(5px) rotate(-1deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ClimbingPortfolio;