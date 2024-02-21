"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useState } from "react";

export default function About() {
  
  return (
    <main className="flex flex-col p-8 mx-auto font-light ">
        <div className="flex flex-row gap-2 mb-8 text-sm text-gray-500">
           <p><Link href={"/"}>home</Link></p>
           <p>/</p>
           {/* <p><Link href={"/info"}>info</Link></p>
           <p>/</p> */}
           <p className="underline">about</p>
        </div>

        {/* <span className="underline cursor-pointer"><a href="https://twitter.com/ethan_chiasson">Twitter</a></span> and  */}
      <div className="text-md">
        <h1>I'm Ethan Chiasson. I'm a software developer from the United States.</h1>
        <br/>
        <p>I am currently building <span className="underline cursor-pointer"><a href="https://stake.gg">StakeOS</a></span>, and A.I. powered investment platform.</p>
        <br/>
        <p>I am active on <span className="underline cursor-pointer"><a href="https://www.linkedin.com/in/ethanchiasson/">LinkedIn</a></span> where my DMs are open.</p>
        <br/>
        <p>I am always interested in new oppourtunities - feel free to email me at <span className="underline">chiassonethan@gmail.com</span></p>
        </div>
    </main>
  );
}
