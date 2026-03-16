"use client";

import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import React from "react";
import Timezone from "../ui/Timezone";
import Link from "next/link";

const Footer = () => {
  const li = [
    { title: "Shop All", url: "/shop" },
    { title: "Men's Watches", url: "/men" },
    { title: "Women's Watches", url: "/women" },
    { title: "Luxury", url: "/luxury" },
  ];
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display ">
              <Timezone> TIMEZONE</Timezone>
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Curating the finest timepieces from around the world since 2010.
              Every watch tells a story.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {li.map((i) => (
                <Link
                  key={i.url}
                  href={i.url}
                  className="text-muted-foreground hover:text-primary text-sm font-body transition-colors"
                >
                  {i.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground font-body">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> 123 Luxury Ave, NY
              </span>
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-primary" /> +1 (800) 555-TIME
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-primary" /> hello@timezone.com
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm font-body">
          © 2026 TimeZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
