'use client';

import { useClerk } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { UserIcon } from 'lucide-react';

export default function FloatingUserIconButton() {
  const { openUserProfile } = useClerk();

  return (
    <motion.button
      onClick={() => openUserProfile()}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="p-2 bg-white/20 backdrop-blur-md text-white/80 rounded-3xl hover:cursor-pointer shadow-md hover:bg-white/20 border border-white/20 transition duration-300 ease-out transform hover:scale-105 motion-safe:animate-[float_3s_ease-in-out_infinite]"
    >
      <UserIcon size={20} />
    </motion.button>
  );
}
