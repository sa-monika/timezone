"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Collections = () => {
  const categories = [
    {
      name: "Men",
      // image: categoryMen,
      url: "/shop?category=men",
    },
    {
      name: "Women",
      // image: categoryWomen,
      url: "/shop?category=women",
    },
    {
      name: "Smart",
      // image: categorySmart,
      url: "/shop?category=smart",
    },
    {
      name: "Luxury",
      // image: categoryLuxury,
      url: "/shop?category=luxury",
    },
  ];
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold uppercase tracking-[0.3em] text-sm mb-2">
              Browse
            </p>
            <h2 className="font-display text-4xl font-bold text-white">
              Collections
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.url}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden"
              >
                {/* <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {cat.name}
                  </h3>
                  <p className="text-primary text-sm font-body flex items-center gap-1 mt-1">
                    Explore <ArrowRight size={14} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
