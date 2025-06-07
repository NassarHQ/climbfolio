// // src/components/Experience.jsx
// import React from "react";
// import { Zap, Users } from "lucide-react";

// const Experience = () => {
//   const experiences = [
//     {
//       role: "Research Intern",
//       company: "San Jose State University",
//       timeframe: "June 2024 – Aug 2024",
//       bullets: [
//         "Implemented predictive model to estimate MPEA elastic constants, cutting DFT simulation costs by 50%.",
//         "Integrated physical descriptors (cohesive energy, bond length) to improve accuracy by 18%.",
//         "Packaged model as a reusable Python module; deployed on Google Cloud for scalable testing.",
//       ],
//       icon: Zap,
//     },
//     {
//       role: "Supplemental Instruction Leader",
//       company: "San Jose City College",
//       timeframe: "Jan 2023 – May 2023",
//       bullets: [
//         "Tutored 7–20 students weekly in foundational math (Calc I & II).",
//         "Improved student comprehension by 80% through tailored learning materials.",
//         "Developed multiple teaching strategies to accommodate different learning styles.",
//       ],
//       icon: Users,
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-rock-gray/90 text-chalk-white"
//     >
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-climbing-orange mb-8">
//           Experience
//         </h2>
//         <div className="space-y-6">
//           {experiences.map((exp, idx) => (
//             <div
//               key={idx}
//               className="bg-rock-gray p-6 rounded-2xl border border-climbing-green/50 hover:border-climbing-orange transition-all transform hover:scale-105 shadow-md"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl sm:text-2xl font-semibold">
//                     {exp.role}
//                   </h3>
//                   <p className="text-chalk-white/80">{exp.company}</p>
//                 </div>
//                 <span className="text-sm sm:text-base text-chalk-white/70 italic">
//                   {exp.timeframe}
//                 </span>
//               </div>
//               <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-chalk-white/80 mb-2">
//                 {exp.bullets.map((b, i) => (
//                   <li key={i}>{b}</li>
//                 ))}
//               </ul>
//               <exp.icon className="w-6 h-6 text-climbing-orange mt-2" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
