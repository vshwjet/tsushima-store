"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed z-50 w-full flex justify-between items-center px-8 py-4">
        <Link href="/">
          <Image
            src="/images/logomark.png"
            alt="Logo"
            width={36}
            height={36}
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-primary transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background">
            <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-futura">
              <Link
                href="/"
                className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/products"
                className="hover:text-primary transition-colors">
                Products
              </Link>
              <Link
                href="/about"
                className="hover:text-primary transition-colors">
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
