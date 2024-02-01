'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Head from "next/head";
import { Github, LinkedinIcon, Twitter } from "lucide-react";
import { Ampersand } from "lucide-react";
import { Linkedin } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [sections, setSections] = useState([
    {
      title: "work",
      subSections: [
        { title: "Stake", content: "→", link: "/work/stake" },
        // { title: "Rune", content: "→", link: "/rune" },
        { title: "Storyflow", content: "→", link: "/work/story-flow" },
        { title: "PandaBot", content: "→", link: "/work/panda-bot" },
     
      ],
      // content: "Content for Section 2",
      isOpen: true,
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
           <p>/</p>
           <p className="underline">work</p>
        </div>
      {sections.map((section, index) => (
        <div key={index} className="accordion-section">
          {section.isOpen && (
            <div className="accordion-content">
              {/* {section.content} */}
              {section.subSections && (
                <div className="inline-flex">
                  <div className="accordion-submenu">
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
