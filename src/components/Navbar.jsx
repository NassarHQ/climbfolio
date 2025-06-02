// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const navigation = [
//   { name: "🏕️ Basecamp", href: "#basecamp" },
//   { name: "🧗 About", href: "#about" },
//   { name: "🔥 Projects", href: "#projects" },
//   { name: "📍 Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       {/* Centered Gradient Cylinder */}
//       <div className="w-full flex justify-center pt-4">
//         <div className="w-full max-w-6xl bg-gradient-to-tr from-blue-900 to-orange-600 rounded-full backdrop-blur-md overflow-hidden px-6 py-2 flex justify-between items-center">
//           <div className="relative group">
//             <div className="absolute -inset-2 bg-gradient-to-r from-emerald-700 via-green-500 to-yellow-300 rounded-lg blur opacity-10 group-hover:opacity-35 transition duration-1000 group-hover:duration-500"></div>
//             <div className="relative text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
//               Nassar.Dev
//             </div>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="relative px-4 py-2 font-medium text-white/80 transition-all duration-300 group flex items-center space-x-1"
//               >
//                 <span className="text-white/80">{item.name.slice(0, 2)}</span>
//                 <span className="group-hover:bg-gradient-to-r group-hover:from-blue-900 to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
//                   {item.name.slice(2)}
//                 </span>
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 text-gray-100 hover:text-white focus:outline-none"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white/95 backdrop-blur-xl px-6 pb-4 pt-2 shadow-md border-t border-gray-200">
//           {navigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               onClick={() => setIsOpen(false)}
//               className="block py-3 text-gray-800 hover:text-black font-medium transition"
//             >
//               {item.name}
//             </a>
//           ))}
//           <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
//             Let’s Talk ✨
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }
