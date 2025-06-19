'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SignedIn } from '@clerk/nextjs';
import { PlusIcon } from 'lucide-react';
import FloatingUserButton from './FloatingUserButton';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-black/70 backdrop-blur-sm text-white/90 px-6 py-4 border-b border-white/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-bold tracking-tight"
          >
            L1NK
          </motion.div>
        </Link>

        <SignedIn>
          <div className="flex items-center gap-10">
            <FloatingUserButton />
            <Link href="/dashboard">
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="p-2 bg-white/20 backdrop-blur-md text-white/80 rounded-3xl hover:cursor-pointer shadow-md hover:bg-white/20 border border-white/20 transition duration-300 ease-out transform hover:scale-105 motion-safe:animate-[float_3s_ease-in-out_infinite]"
              >
                <PlusIcon size={20}/>
              </motion.button>
            </Link>
          </div>
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;