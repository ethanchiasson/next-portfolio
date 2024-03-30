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

import { TextGenerateEffect } from "./components/RenderWords";

export default function Home() {
  const intro = "Hey, Im Ethan, a software developer from the united States.";
  const [sections, setSections] = useState([
    {
      title: "info",
      subSections: [{ title: "about", content: "→", link: "/about" }],
      isOpen: false,
    },
    {
      title: "work",
      subSections: [
        { title: "StakeOS", content: "→", link: "/work/stake" },
        { title: "Storyflow", content: "→", link: "/work/story-flow" },
        // { title: "Rune", content: "→", link: "/rune" },
        { title: "PandaBot", content: "→", link: "/work/panda-bot" },
      ],
      isOpen: false,
    },
    {
      title: "resources",
      subSections: [
        // { title: "Resume", content: "↗", link: "/resume.pdf" },
        {
          title: "LinkedIn",
          content: "↗",
          link: "https://linkedin.com/in/ethanchiasson",
        },
        {
          title: "Github",
          content: "↗",
          link: "https://github.com/ethanchiasson",
        },
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
      <TextGenerateEffect
        className="mb-8 text-3xl"
        words="Hey I'm Ethan, a software developer and product designer based in the United States."
      />
      {/* <div className="flex flex-row gap-2 mb-2 text-sm">
           <p><Link href={"/"}>home</Link></p>
        </div> */}
      {sections.map((section, index) => (
        <div key={index} className="accordion-section">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 + index / 2 }}
            className="accordion-header hover:cursor-pointer inline-flex text-gray-500 dark:hover:text-white hover:text-black md:text-lg"
            onClick={() => handleToggle(index)}
          >
            {section.isOpen ? (
              <p className="transition duration-500 text-black dark:text-white">
                - {section.title}
              </p>
            ) : (
              <p className="transition duration-500">+ {section.title}</p>
            )}
          </motion.div>
          {section.isOpen && (
            <div className="accordion-content md:text-lg ">
              {section.subSections && (
                <div className="inline-flex">
                  <div className="accordion-submenu ml-8">
                    {section.subSections.map((subSection, subIndex) => (
                      <Link
                        href={subSection.link}
                        {...(subSection.link.startsWith("http") ||
                        subSection.link.startsWith("/resume")
                          ? { rel: "noopener noreferrer", target: "_blank" }
                          : {})}
                      >
                        <div
                          key={subIndex}
                          className="accordion-subsection group"
                        >
                          <p className="hover:cursor-pointer text-gray-500 dark:hover:text-white hover:text-black">
                            {" "}
                            {subSection.title}{" "}
                            <span className="text-gray-500 text ml-2 group-hover:ml-4 duration-300">
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
