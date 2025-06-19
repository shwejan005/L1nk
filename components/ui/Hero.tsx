"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-white py-32">
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
          <p className="text-lg text-white/70 max-w-xl py-10">
            Create a stylish, shareable page to bundle your social links, resources, personal picks,
            or anything else—all in one link. Designed for creators, learners, and professionals
            who want to make a bold first impression.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-3">
              <ArrowRightCircle className="h-5 w-5 mt-1 text-white/80" />
              <span>Bundle multiple links in one elegant page</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRightCircle className="h-5 w-5 mt-1 text-white/80" />
              <span>Design and customize your link card</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRightCircle className="h-5 w-5 mt-1 text-white/80" />
              <span>Share via custom URL or QR code</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRightCircle className="h-5 w-5 mt-1 text-white/80" />
              <span>Perfect for creators, educators & study groups</span>
            </li>
          </ul>

          {/* CTA */}
          <SignedIn>
            <Link href="/dashboard">
              <Button className="mt-6 text-base px-10 py-5 bg-white/10 backdrop-blur-md text-white/80 hover:cursor-pointer shadow-md hover:bg-white/20 border border-white/20 transition duration-300 ease-out transform hover:scale-105 rounded-3xl">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button className="mt-6 text-base px-10 py-5 bg-white/10 backdrop-blur-md text-white/80 hover:cursor-pointer shadow-md hover:bg-white/20 border border-white/20 transition duration-300 ease-out transform hover:scale-105 rounded-3xl">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignInButton>
          </SignedOut>
        </motion.div>

        {/* VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden md:block"
        >
          <div className="w-full h-[400px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center text-white/30 text-xl">
            <Image
              src={'/images/ex.png'}
              width={580}
              height={580}
              alt="Example Image"
              className="rounded-4xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}