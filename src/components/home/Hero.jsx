"use client";

import React from "react";
import { ArrowRight, RotateCcw, Shield, Truck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div>
      {/* heto section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Luxury TimeZone watch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Premium Collection 2026
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
              Define Your{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                {" "}
                Time
              </span>
            </h1>
            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
              Discover handcrafted timepieces that blend Swiss precision with
              contemporary design.
            </p>
            <div className="flex gap-4">
              <Link
                href="/shop"
                className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-700 text-black px-8 py-3 rounded-md font-body font-semibold tracking-wide hover:opacity-80 transition-opacity flex items-center gap-2"
              >
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link
                href="/luxury"
                className="border border-gold text-foreground px-8 py-3 rounded-md font-body font-semibold tracking-wide hover:bg-primary/10 transition-colors"
              >
                Luxury
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* trust section */}
      <section className="bg-card border-y border-[#2e2c26ec]  py-6 bg-[#1d1c18ec]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: Truck, t: "Free Shipping", s: "On orders over $500" },
            { icon: Shield, t: "2 Year Warranty", s: "On all timepieces" },
            { icon: RotateCcw, t: "30-Day Returns", s: "Hassle-free returns" },
          ].map((i) => (
            <div key={i.t} className="flex items-center justify-center gap-3">
              <i.icon size={24} color="#d4af37" />
              <div className="text-left">
                <p className="font-body font-semibold text-white text-sm">
                  {i.t}
                </p>
                <p className="text-muted-foreground text-xs font-body">{i.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
