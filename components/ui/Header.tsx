'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-black">
      <Link
        href="/"
        className="text-white font-semibold text-4xl flex items-center justify-center p-5"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          L1NK
        </motion.div>
      </Link>

      
    </header>
  );
}

export default Header;