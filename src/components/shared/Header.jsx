"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import Timezone from "../ui/Timezone";
import { useRouter } from "next/navigation";
// import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Shop", url: "/shop" },
    { title: "Men", url: "/men" },
    { title: "Women", url: "/women" },
    { title: "Luxury", url: "/luxury" },
  ];

  const handleNavigation = () => {};

  return (
    <nav className="border-[#2e2c26ec] border sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display items-center justify-center flex"
        >
          <Timezone>TIMEZONE</Timezone>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-8">
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
