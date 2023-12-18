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

export default function Home() {

  return (
    <>
      <main className="flex flex-col p-8 mx-auto">
        {/* <div className="absolute top-0 left-0 w-full h-full z-[-99]">
        <Image
          src="/Gradient.png"  // Make sure the path is correct
          alt="Gradient Rays"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div> */}

        <div className="w-full flex flex-col grid auto-rows grid-cols-1 md:grid-cols-8 gap-3 z-10 cursor-pointer">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            // dark:bg-gradient-to-br dark:from-gray-800 dark:to-black bg-gradient-to-b p-8
            className="col-span-1 md:col-span-6 from-sky-100 via-white to-blue-100 rounded-[33px] dark:bg-gradient-to-br dark:from-[#0c0f19] dark:to-[#10152a] bg-gradient-to-b p-8 justify-between"
          >
            <div className="flex flex-col justify-between">
              <div className="flex flex-row justify-between flex-wrap items-center">
                <h1 className="text-lg text-gray-500">
                  Hey, my name is Ethan.
                </h1>
                {/* <div>
                <a className="text-sm text-gray-300" href="google.com">
                twitter
                </a>
              </div> */}
              </div>
              {/* <p className="text-gray-500 mt-12 mb-8">I work in the technology sector where I am the
              founder of a small start-up.</p> */}
              <p className="text-5xl mt-5 max-w-[550px]">
                I'm a software developer, product designer, and founder of a
                small start-up.
              </p>
              {/* <h2 className="text-6xl mt-5">I build digital experiences</h2>
            <p className="text-gray-500 mt-8 pointer-events-none">
              I am a founder, product designer, and full-stack software
              developer. I am currently working in the tech space where I am the
              founder of a small start-up.
            </p> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            className="relative col-span-1 md:col-span-2 md:col-start-7 md:col-end-9 dark:bg-gradient-to-br dark:from-[#0c0f19] dark:to-[#10152a] bg-gradient-to-b from-sky-100 via-white to-blue-100 rounded-[33px] hover:transform hover:translate-x-1 transition-transform duration-300 ease-in-out shadow-md"
          >
            <Image
              alt="stake.gg"
              src={"/radiant-dots-v2.png"}
              className="absolute inset-0 w-full h-full object-cover rounded-md"
              width={350}
              height={350}
            />
            <div className="flex flex-col h-full justify-between items-center min-h-[300px] px-8">
              <div></div>
              <Image
                alt="stake.gg"
                src={"/memoji.png"}
                className="group:object-none group:object-bottom z-10" // Ensure the other content is above the background image
                width={350}
                height={350}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
            className="col-span-1 md:col-span-3 dark:bg-gradient-to-br dark:from-[#0c0f19] dark:to-[#10152a] bg-gradient-to-b from-sky-100 via-white to-blue-100 rounded-[33px] hover:transform hover:-translate-x-1 transition-transform duration-300 ease-in-out shadow-md"
          >
            <div className="flex flex-col overflow-y-hidden max-h-[450px] items-center">
              <div className="p-8">
                <h1 className="text-5xl font-light max-w-[400px] dark:text-gray-300 text-center sm:text-left">
                  I am currently building{" "}
                  <span className="font-bold dark:text-white">StakeOS</span>
                </h1>
                <p className="text-gray-500 text-lg mt-3 sm:max-w-[300px] text-center sm:text-left">
                  Where my core focus is AI and product design.
                </p>
              </div>
              <Image
                alt="art"
                src={"/radiant-dots-v2.png"}
                className="rounded-md"
                width={300}
                height={300}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
            className="col-span-1 md:col-span-5 md:col-start-4 md:col-end-9 rounded-[33px] over:transform hover:translate-x-1 transition-transform duration-300 ease-in-out dark:bg-gradient-to-br dark:from-[#0c0f19] dark:to-[#10152a] bg-gradient-to-br from-sky-100 via-white to-blue-100 shadow-md"
          >
            <div className="flex flex-col overflow-y-hidden max-h-[450px] items-left group">
              <div className="p-8">
                <h1 className="text-3xl font-bold dark:text-gray-300 cursor-pointer">
                  Stake
                  <span className="font-light dark:text-gray-500">.gg</span>
                </h1>
                <p className="dark:text-gray-500 text-lg mt-3 max-w-[300px]">
                  The AI investment platform powered by StakeOS.
                </p>
              </div>
              <div className="p-8">
                <video
                  className="rounded-2xl transform group-hover:-translate-y-2 duration-700 hover:ping"
                  autoPlay={true}
                  muted
                  width="auto"
                  height="auto"
                  loop
                  // controls
                >
                  <source src="/stakeosdemovideo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.4 }}
            className="col-span-1 md:col-span-5 md:col-start-1 md:col-end-6 bg-gray-500 rounded-lg p-4 rounded-2xl over:transform hover:-translate-x-1 transition-transform duration-300 ease-in-out dark:bg-gradient-to-br dark:from-[#0c0f19] dark:to-[#10152a] bg-gradient-to-br from-sky-100 via-white to-blue-100 shadow-md"
          >
            <div className="flex flex-col overflow-y-hidden max-h-[400px]">
              <div className="p-8">
                <h1 className="text-5xl font-light max-w-[400px] dark:text-gray-300">
                  You may recognize some of my other work.
                </h1>
                <p className="dark:text-gray-500 text-lg mt-3 max-w-[300px]">
                  Learn more &rArr;
                </p>
              </div>
              <Image
                alt="stake.gg"
                src={"/radiant-dots-v2.png"}
                className="rounded-md"
                width={300}
                height={300}
              />
            </div>
          </motion.div> */}
          <motion.div
            id="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 3 }}
            className="col-span-1 md:col-span-3  md:col-start-1 md:col-end-9 rounded-[33px] p-4 over:transform hover:translate-x-1 transition-transform duration-300 ease-in-out dark:bg-gradient-to-br dark:from-[#0c0f19] dark:to-[#10152a] bg-gradient-to-br from-sky-100 via-white to-blue-100 shadow-md"
          >
            <div className="flex flex-col p-8 justify-between">
              <div>
                <h1 className="text-5xl font-light dark:text-gray-300">
                  Let's connect 
                  {/* <span className="font-light dark:text-gray-500">↙</span> */}
                </h1>
                <p className="dark:text-gray-500 text-lg mt-3">
                  Reach out via email, github, or twitter.
                </p>
              </div>

              <div className="flex flex-row items-center gap-2 mt-10">
                <a
                  href="mailto:chiassonethan@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant={"ghost"}
                    className="text-xl px-4 backdrop-blur bg-white/5 text-gray-500"
                  >
                    @
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/ethanchiasson/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant={"ghost"}
                    className="text-xl px-4 backdrop-blur bg-white/5 text-gray-500"
                  >
                    <LinkedinIcon className="h-4 w4" />
                  </Button>
                </a>
                <a
                  href="https://twitter.com/ethan_chiasson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant={"ghost"}
                    className="text-xl px-4 backdrop-blur bg-white/5 text-gray-500"
                  >
                    <Twitter className="h-4 w4" />
                  </Button>
                </a>
              </div>

              {/* <Image
                alt="stake.gg"
                src={"/radiant-dots-v2.png"}
                className="rounded-md"
                width={300}
                height={300}
              /> */}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
