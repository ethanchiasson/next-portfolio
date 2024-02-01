"use client";

import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import Link from "next/link";
const NavbarV2 = () => {


  return (
    <div className="flex flex-row justify-between items-center px-8 py-4">
      
      <div className="flex flex-row items-center gap-2">
        {/* <motion.span
      className="text-[18px] dark:text-white"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.33, delay: 0.88 }}
          >✦</motion.span> */}
        <div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 3.3, delay: 0.33 }}
        >
          <Link href={"/"}>
            <h1 className="dark:text-white text-[14px]">
              {/* <Typer text="ethan"/> */}
              ethan chiasson
            </h1>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3">
        {/* <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link className="text-gray-500 transition-all duration-500 hover:text-white dark:hover:text-white" href="#contact">
            <AtSign className="h-4 w-4"/>
          </Link>
        </motion.div> */}

        {/* <motion.div
              initial={{ opacity: 0, x:-30, y: 10, scale: 0 }}
              animate={{ opacity: 1, x:0, y: 0, scale: 1 }}
              transition={{ duration: 0.88, delay: 0.8, type: 'spring', bounce: 0.33 }}
        className="flex flex-row items-center gap-2 border border-sky-900 rounded-full px-2 py-1">
          <Link className="text-gray-500" href="/contact">
            <p className="text-sm flex flex-row items-center">
              available
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
            </p>
          </Link>
        </motion.div> */}
        {/* <Link className="text-gray-500 transition-all duration-500 hover:text-slate-900 dark:hover:text-slate-100" href="https://github.com/ethanchiasson">
                  <Github className="h-4 w-4"/>
                  </Link> */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.33, delay: 0.3 }}
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </div>
  );
};

export default NavbarV2;
