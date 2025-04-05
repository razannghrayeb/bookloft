"use client"

import { useCart } from "../context/CartContext"

const recommendedBooks = [
  {
    id: "rec1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 10.99,
    image: "/imgs/books.jpg",
  },
  {
    id: "rec2",
    title: "Great Expectations",
    author: "Charles Dickens",
    price: 12.99,
    image: "/imgs/books.jpg",
  },
  {
    id: "rec3",
    title: "A Court of Mist and Fury",
    author: "Sarah J. Maas",
    price: 14.99,
    image: "/imgs/books.jpg",
  },
]

export default function RecommendedBooks() {
  const { addToCart } = useCart()

  const handleAddToCart = (book) => {
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
    })
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-purple-900 mb-10">You Might Also Like</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recommendedBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <img
                src={book.image || "/imgs/books.jpg"}
                alt={book.title}
                className="w-64 h-64 object-cover mx-auto mb-4 rounded-md"
              />
              <h3 className="font-bold text-purple-900 mb-1">{book.title}</h3>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <p className="text-purple-900 font-bold mb-4">${book.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(book)}
                className="bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

