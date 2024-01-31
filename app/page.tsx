"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Head from "next/head";
import { Github, LinkedinIcon, Twitter } from "lucide-react";
import { Ampersand } from "lucide-react";
import { Linkedin } from "lucide-react";
import Bento from "./components/Bentov2";
import { useState } from "react";

export default function Home() {
  const [sections, setSections] = useState([
    {
      title: "misc",
      // content: "index.js",
      subSections: [
        { title: "about", content: "→", link: "/info/about" },
        // { title: "resume", content: "→", link: "/resume" },
        // { title: "Subsection 1.2", content: "Content for Subsection 1.2" },
      ],
      isOpen: false,
    },
    {
      title: "work",
      subSections: [
        { title: "Stake", content: "→", link: "/work/stake" },
        // { title: "Rune", content: "→", link: "/rune" },
        { title: "Pregame", content: "→", link: "/work/pregame" },
        { title: "Prompter", content: "→", link: "/work//prompter" },
      ],
      // content: "Content for Section 2",
      isOpen: false,
    },
    {
      title: "links",
      // content: "Content for Section 3",
      subSections: [
        { title: "Github", content: "↗", link: "https://github.com/ethanchiasson" },
        { title: "Twitter", content: "↗", link: "https:/twitter.com/ethan_chiasson" },
        { title: "LinkedIn", content: "↗", link: "https://linkedin.com/in/ethanchiasson" },
      
      ],
      isOpen: false,
    },
  ]);

  const handleToggle = (index: any) => {
    setSections((prevSections) => {
      return prevSections.map((section, i) => {
        if (i === index) {
          return { ...section, isOpen: !section.isOpen };
        }
        return section;
      });
    });
  };

  return (
    <main className="flex flex-col p-8 mx-auto font-light">
        <div className="flex flex-row gap-2 mb-2 text-sm">
           <p><Link href={"/"}>home</Link></p>
        </div>
      {sections.map((section, index) => (
        <div key={index} className="accordion-section">
          <div
            className="accordion-header hover:cursor-pointer inline-flex"
            onClick={() => handleToggle(index)}
          >
            {section.isOpen ? (
              <p className="transition duration-500">- {section.title}</p>
            ) : (
              <p className="transition duration-500">+ {section.title}</p>
            )}
          </div>
          {section.isOpen && (
            <div className="accordion-content">
              {/* {section.content} */}
              {section.subSections && (
                <div className="inline-flex">
                  <div className="accordion-submenu ml-8">
                    {section.subSections.map((subSection, subIndex) => (
                      <Link href={subSection.link}>
                      <div
                        key={subIndex}
                        className="accordion-subsection group"
                      >
                        <p className="hover:cursor-pointer">
                          {" "}
                          {subSection.title}{" "}
                          <span className="text-gray-500 text-sm ml-2 group-hover:ml-4 duration-300">
                            {subSection.content}
                          </span>
                        </p>
                      </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
