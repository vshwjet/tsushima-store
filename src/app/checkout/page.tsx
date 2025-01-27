"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useCart } from "../context/CartContext"

const steps = ["Shipping", "Payment", "Confirmation"]

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const { state, dispatch } = useCart()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      dispatch({ type: "CLEAR_CART" })
      // Handle order submission
    }
  }

  return (
    <div className="min-h-screen bg-background text-white pt-24 px-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step} className={`flex items-center ${index <= currentStep ? "text-primary" : "text-white/40"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep ? "bg-primary" : "bg-white/10"
                }`}
              >
                {index + 1}
              </div>
              <span className="ml-2">{step}</span>
              {index < steps.length - 1 && (
                <div className={`h-px w-12 mx-4 ${index < currentStep ? "bg-primary" : "bg-white/10"}`} />
              )}
            </div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-secondary/20 p-8 rounded-lg"
        >
          {currentStep === 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="bg-background p-3 rounded" required />
                <input type="text" placeholder="Last Name" className="bg-background p-3 rounded" required />
              </div>
              <input type="email" placeholder="Email" className="w-full bg-background p-3 rounded" required />
              <input type="text" placeholder="Address" className="w-full bg-background p-3 rounded" required />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="City" className="bg-background p-3 rounded" required />
                <input type="text" placeholder="Postal Code" className="bg-background p-3 rounded" required />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
              <input type="text" placeholder="Card Number" className="w-full bg-background p-3 rounded" required />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="bg-background p-3 rounded" required />
                <input type="text" placeholder="CVC" className="bg-background p-3 rounded" required />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Order Confirmation</h2>
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${state.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded mt-8 hover:bg-primary/80 transition-colors"
          >
            {currentStep === steps.length - 1 ? "Place Order" : "Continue"}
          </button>
        </motion.form>
      </div>
    </div>
  )
}

