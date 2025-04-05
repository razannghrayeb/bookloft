"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"

export default function BookCard({ book }) {
  const [showOverlay, setShowOverlay] = useState(true)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
    })
  }

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 fade-in-up"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <div className="relative">
        <div className="h-64 overflow-hidden">
          <img src={book.image || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
        </div>

        {showOverlay && (
          <div className="absolute inset-0 bg-purple-900 bg-opacity-50 flex items-center justify-center">
            <button onClick={handleAddToCart} className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
              <img src="../public/imgs/cart.png" alt="Add to Cart" width={24} height={24} />
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-purple-900 mb-1">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{book.author}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{book.year}</span>
          <span className={`font-bold ${book.price === 0 ? "text-pink-500" : "text-purple-900"}`}>
            {book.price === 0 ? "Free" : `$${book.price.toFixed(2)}`}
          </span>
        </div>
        <button
          className="w-full mt-4 bg-purple-900 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
          onClick={handleAddToCart}
        >
          View Details
        </button>
      </div>
    </div>
  )
}

