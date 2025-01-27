"use client";

import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { products } from "../data/product";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { dispatch } = useCart();
  const featuredProducts = products.slice(0, 3); // Display first 3 products

  return (
    <div className="relative overflow-hidden">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center">
        {/* Hero section */}
        <div className="w-full bg-black h-screen text-center flex flex-row">

          <div className="w-full h-screen flex flex-col items-center justify-center gap-12">

            <div className="w-[540px]">
              <Image
                alt="Logo"
                src="/images/tsushima_logo_main.png"
                width={540}
                height={540}
              />
            </div>
            <p className="font-futura text-xl text-white">
              Explore the world of Japanese Katanas and Samurai Gear
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto px-4 mt-16">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-secondary/20 overflow-hidden group border border-white/10">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_ITEM", payload: product })
                      }
                      className="absolute bottom-4 right-4 bg-primary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="p-4 text-start">
                    <h3 className="text-base uppercase font-normal mb-2 font-futura">
                      {product.name}
                    </h3>
                    <p className="text-sm font-futura tracking-widest text-gray-400">
                      <span className="flex flex-row items-center gap-2">
                      <Image src="/images/supplies.png" alt="Supplies" width={16} height={16} /> {product.price.toLocaleString()} 

                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="h-screen">
            <Image
              src="/images/tsushima_hero.jpg"
              alt="Hero Background"
              width={1080}
              height={1080}
              className="object-cover grayscale w-full h-screen"
            />
          </div>

        </div>

        {/* Featured Products */}
      </div>
    </div>
  );
}
