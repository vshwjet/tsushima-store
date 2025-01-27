import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart"

export const metadata = {
  title: "Tsushima Store",
  description: "Premium Japanese Katanas and Samurai Gear",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-futura`}>
        <CartProvider>
          {children}
          <Cart />
        </CartProvider>
      </body>
    </html>
  )
}

