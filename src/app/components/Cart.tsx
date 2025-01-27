"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, X, Plus, Minus } from "lucide-react"
import { useState } from "react"
import { useCart } from "../context/CartContext"
import Link from "next/link"
import Image from "next/image"
import type { Product } from "../data/product"

interface CartItem {
  id: string | number;
  image?: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "UPDATE_QUANTITY" | "CLEAR_CART";
  payload: Product | string | { id: string | number; quantity: number };
}

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const { state, dispatch } = useCart() as { 
    state: { items: CartItem[], total: number }, 
    dispatch: React.Dispatch<CartAction> 
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-8 bottom-8 bg-primary p-4 rounded-full shadow-lg hover:bg-primary/80 transition-colors"
      >
        <ShoppingCart className="w-6 h-6 text-white" />
        {state.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-primary w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold font-futura">
            {state.items.length}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 p-6 text-white"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {state.items.length === 0 ? (
                <div className="text-center text-white/60 mt-12">Your cart is empty</div>
              ) : (
                <>
                  <div className="flex flex-col gap-4 mb-8">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex gap-4 bg-secondary/20 p-4 rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold mb-2">{item.name}</h3>
                          <p className="text-primary flex flex-row items-center gap-1"><Image src="/images/supplies.png" alt="Supplies" width={16} height={16} /> {item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                dispatch({
                                  type: "UPDATE_QUANTITY",
                                  payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) },
                                })
                              }
                              className="p-1 hover:bg-secondary/40 rounded"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                dispatch({
                                  type: "UPDATE_QUANTITY",
                                  payload: { id: item.id, quantity: item.quantity + 1 },
                                })
                              }
                              className="p-1 hover:bg-secondary/40 rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => dispatch({ 
                            type: "REMOVE_ITEM", 
                            payload: item.id.toString()
                          })}
                          className="text-white/60 hover:text-primary"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="flex flex-row items-center gap-2"><Image src="/images/supplies.png" alt="Supplies" width={18} height={18} />{state.total.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link
                    href="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-primary text-center py-3 rounded-lg hover:bg-primary/80 transition-colors"
                  >
                    Proceed to Checkout
                  </Link>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

