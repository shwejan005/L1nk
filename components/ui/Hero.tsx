'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white text-black py-32">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-7 items-center">

        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            One Link. Limitless Possibilities.
          </h1>
          <p className="text-lg text-gray-700 max-w-xl py-10">
            Create a stylish, shareable page to bundle your social links, resources, personal picks,
            or anything else—all in one link. Designed for creators, learners, and professionals
            who want to make a bold first impression.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <ArrowRightCircle className="h-5 w-5 mt-1 text-black" />
              <span>Bundle multiple links in one elegant page</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRightCircle className="h-5 w-5 mt-1 text-black" />
              <span>Design and customize your link card</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRightCircle className="h-5 w-5 mt-1 text-black" />
              <span>Share via custom URL or QR code</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRightCircle className="h-5 w-5 mt-1 text-black" />
              <span>Perfect for creators, educators & study groups</span>
            </li>
          </ul>

          {/* CTA */}
          <Button className="mt-6 text-base px-6 py-5 bg-black text-white hover:opacity-90 hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-out rounded-lg shadow-md">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* VISUAL or ANIMATION PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden md:block"
        >
          <div className="w-full h-[400px] bg-gray-100 rounded-2xl shadow-xl flex items-center justify-center text-gray-400 text-xl">
            <Image src={'/images/ex.png'} width={800} height={800} alt="Example Image" className="rounded-2xl" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
