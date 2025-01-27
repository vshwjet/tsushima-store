import { products } from "../../data/product"
import { notFound } from "next/navigation"
import Image from "next/image"

export default async function ProductPage(props: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await props.params
  const product = products.find((p) => p.id.toString() === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0 relative h-48 w-full md:w-48">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

