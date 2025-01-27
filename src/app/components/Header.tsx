import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Samurai Store
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-300">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

