'use client';

import { motion } from 'framer-motion';
import {
  Layers3Icon,
  BrushIcon,
  QrCodeIcon,
  GraduationCapIcon,
} from 'lucide-react';

const features = [
  {
    title: 'All-in-One Link',
    description: 'Bundle your important links into a single, elegant destination.',
    icon: Layers3Icon,
  },
  {
    title: 'Customizable Cards',
    description: 'Design and personalize your card to match your brand or vibe.',
    icon: BrushIcon,
  },
  {
    title: 'QR Code & Share',
    description: 'Easily share your page via custom URL or scannable QR code.',
    icon: QrCodeIcon,
  },
  {
    title: 'For Creators & Learners',
    description: 'Perfect for sharing content, resources, or study materials.',
    icon: GraduationCapIcon,
  },
];

export default function FeaturesSection() {
  return (
    <section className="text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Everything You Need, In One Link</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-12">
          L1NK is your personal landing page — built for creators, learners, and anyone who wants to simplify their digital presence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-md text-left hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.05)] transition-all duration-300 transform hover:scale-[1.02] motion-safe:animate-[float_5s_ease-in-out_infinite]"
              >
                <Icon className="text-white mb-4 h-6 w-6" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
