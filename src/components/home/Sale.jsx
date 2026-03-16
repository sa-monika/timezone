"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sale = () => {
  return (
    <div>
      {/* Promo Banner */}
      <section className="relative py-32 overflow-hidden">
        {/* <img
          src={promoBanner}
          alt="Promotional banner"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Limited Time
            </p>
            <h2 className="font-display text-5xl font-bold text-white mb-4">
              Up to 30% Off
            </h2>
            <p className="mb-8 max-w-md mx-auto">
              Elevate your collection with our exclusive spring sale on selected
              timepieces.
            </p>
            <Link
              href="/shop"
              className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-700 text-black px-8 py-3 rounded-md font-body font-semibold tracking-wide hover:opacity-80 transition-opacity inline-flex items-center gap-2"
            >
              Shop the Sale <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sale;
