// // src/components/Projects.jsx
// import React from "react";
// import { Zap, Target } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "DropAlert – Student Dropout Prediction",
//       timeframe: "Spring 2025",
//       description: [
//         "Built an end‐to‐end pipeline (preprocessing, modeling, deployment) using XGBoost & SMOTE, achieving 86% accuracy and 0.78 F1‐score.",
//         "Improved early identification of at‐risk students by 24% versus baseline logistic regression, enabling personalized support.",
//         "Optimized feature selection & hyperparameters, cutting training time by 35%, and containerized for cloud deployment.",
//         "Used SQL for data preprocessing & feature engineering.",
//       ],
//       techStack: ["Python", "XGBoost", "SQL", "Docker", "AWS"],
//     },
//     {
//       title: "AmusePark – Park Management Simulator",
//       timeframe: "Fall 2024",
//       description: [
//         "Designed a modular full‐stack system in Java for managing 20+ entities (visitors, rides, stores).",
//         "Implemented clear separation of concerns: Service, DAO, Controller layers for easy maintenance.",
//         "Demonstrated to peers & instructors, translating technical details for non‐technical audiences.",
//       ],
//       techStack: ["Java", "OOP", "Maven", "JUnit", "MySQL"],
//     },
//     {
//       title: "Motion AI – Pose Analyzer",
//       timeframe: "Fall 2024",
//       description: [
//         "Collaborated using Python & OpenCV to build a real‐time pose analyzer with 95% accuracy.",
//         "Optimized preprocessing & model tuning to reduce inference time by 30%.",
//         "Integrated GenAI APIs for enhanced feedback, boosting accuracy by 12% and cutting processing time by 20%.",
//         "Ensured code quality with peer reviews & unit tests (pytest).",
//       ],
//       techStack: ["Python", "OpenCV", "pandas", "NumPy", "GenAI APIs"],
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-rock-gray/95 text-chalk-white"
//     >
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-climbing-orange mb-8">
//           Projects
//         </h2>
//         <div className="space-y-8">
//           {projects.map((proj, idx) => (
//             <div
//               key={idx}
//               className="bg-rock-gray p-6 rounded-2xl border border-climbing-green/50 hover:border-climbing-orange transition-all transform hover:scale-105 shadow-md"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xl sm:text-2xl font-semibold">
//                   {proj.title}
//                 </h3>
//                 <span className="text-sm sm:text-base text-chalk-white/70 italic">
//                   {proj.timeframe}
//                 </span>
//               </div>
//               <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base text-chalk-white/80">
//                 {proj.description.map((line, j) => (
//                   <li key={j}>{line}</li>
//                 ))}
//               </ul>
//               <div className="flex flex-wrap gap-2">
//                 {proj.techStack.map((tech, k) => (
//                   <span
//                     key={k}
//                     className="px-2 py-1 bg-climbing-green text-rock-gray text-xs rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
