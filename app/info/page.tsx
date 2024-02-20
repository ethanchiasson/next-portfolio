// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import Head from "next/head";
// import { Github, LinkedinIcon, Twitter } from "lucide-react";
// import { Ampersand } from "lucide-react";
// import { Linkedin } from "lucide-react";
// import { useState } from "react";

// export default function Info() {
//   const [sections, setSections] = useState([
//     {
//       title: "info",
//       subSections: [
//         { title: "about", content: "→", link: "/about" },
//       ],
//       // content: "Content for Section 2",
//       isOpen: true,
//     },
//   ]);


//   return (
//     <main className="flex flex-col p-8 mx-auto font-light">
//            <div className="flex flex-row gap-2 mb-2 text-sm text-gray-500">
//            <p><Link href={"/"}>home</Link></p>
//            <p>/</p>
//            <p className="underline">info</p>
//         </div>
//       {sections.map((section, index) => (
//         <div key={index} className="accordion-section">
//           {section.isOpen && (
//             <div className="accordion-content">
//               {/* {section.content} */}
//               {section.subSections && (
//                 <div className="inline-flex">
//                   <div className="accordion-submenu">
//                     {section.subSections.map((subSection, subIndex) => (
//                       <Link href={subSection.link}>
//                       <div
//                         key={subIndex}
//                         className="accordion-subsection group"
//                       >
//                         <p className="hover:cursor-pointer">
//                           {" "}
//                           {subSection.title}{" "}
//                           <span className="text-gray-500 text-sm ml-2 group-hover:ml-4 duration-300">
//                             {subSection.content}
//                           </span>
//                         </p>
//                       </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </main>
//   );
// }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import Head from "next/head";
// import { useState } from "react";

// export default function About() {
  
//   return (
//     <main className="flex flex-col p-8 mx-auto font-light ">
//         <div className="flex flex-row gap-2 mb-8 text-sm text-gray-500">
//            <p><Link href={"/"}>home</Link></p>
//            <p>/</p>
//            {/* <p><Link href={"/info"}>info</Link></p>
//            <p>/</p> */}
//            <p className="underline">about</p>
//         </div>
//       <div className="text-md">
//         <h1>I'm Ethan Chiasson. I'm a software developer from the United States.</h1>
//         <br/>
//         <p>I am current building <span className="underline cursor-pointer"><a href="https://stake.gg">StakeOS</a></span>, and A.I. powered investment platform.</p>
//         <br/>
//         <p>I am usually active on <span className="underline cursor-pointer"><a href="https://twitter.com/ethan_chiasson">Twitter</a></span> and <span className="underline cursor-pointer">LinkedIn</span> where my DMs are open.</p>
//         <br/>
//         <p>I am always interested in new oppourtunities - my email is <span className="underline">chiassonethan@gmail.com</span></p>
//         </div>
//     </main>
//   );
// }
