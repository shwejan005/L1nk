'use client'

import { ArrowRightCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "All-in-One Link",
    description: "Bundle your important links into a single, elegant destination.",
  },
  {
    title: "Customizable Cards",
    description: "Design and personalize your card to match your brand or vibe.",
  },
  {
    title: "QR Code & Share",
    description: "Easily share your page via custom URL or scannable QR code.",
  },
  {
    title: "For Creators & Learners",
    description: "Perfect for sharing content, resources, or study materials.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white text-black py-12 pb-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Everything You Need, In One Link</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          L1NK is your personal landing page — built for creators, learners, and anyone who wants to simplify their digital presence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md text-left hover:shadow-lg transition-shadow"
            >
              <ArrowRightCircle className="text-black mb-4 h-6 w-6" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
