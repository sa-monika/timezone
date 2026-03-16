"use client";
import { Star } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James W.",
      text: "Absolutely stunning craftsmanship. My Heritage Gold gets compliments everywhere.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      text: "The Rose Elegance is the most beautiful watch I've ever owned. Worth every penny.",
      rating: 5,
    },
    {
      name: "David L.",
      text: "Fast delivery, exquisite packaging, and the Aqua Diver performs flawlessly.",
      rating: 4,
    },
  ];
  return (
    <div>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-12">
            <p className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold uppercase tracking-[0.3em] text-sm mb-2">
              Testimonials
            </p>
            <h2 className="font-display text-4xl font-bold text-white">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black rounded-lg p-8 border border-[#2e2c26ec]"
              >
                <div className="flex gap-1 mb-4 ">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      color="#d4af37"
                      className="fill-[#d4af37]"
                    />
                  ))}
                </div>
                <p className="text-gray-400  italic mb-6">" {t.text} "</p>
                <p className="text-[#d4af37] font-semibold">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
