"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { products } from "../data/product"
import { useCart } from "../context/CartContext"
import { Plus } from "lucide-react"
import Image from "next/image"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const { dispatch } = useCart()

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background text-white pt-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          <span className="text-primary">Premium</span> Collection
        </h1>

        <div className="flex gap-4 mb-8">
          {["all", "swords", "armor", "accessories"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary/20 text-white/60 hover:bg-secondary/40"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-secondary/20 rounded-lg overflow-hidden group"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
                  className="absolute bottom-4 right-4 bg-primary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-white/60 mb-4">{product.description}</p>
                <p className="text-2xl font-mono text-primary">${product.price.toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

