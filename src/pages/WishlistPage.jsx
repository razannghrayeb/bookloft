"use client"

import { useState } from "react"
import { useWishlist } from "../context/WishlistContext"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const [selectedBook, setSelectedBook] = useState(null)

  const showDetails = (book) => {
    setSelectedBook(book)
  }

  const closeModal = () => {
    setSelectedBook(null)
  }

  return (
    <div className="pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">Your Wishlist</h2>

        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((book) => (
              <div
                key={book.title}
                className="bg-gray-800 text-white rounded-lg p-6 flex flex-col min-h-[460px] shadow-md hover:shadow-lg transition-shadow"
                onClick={() => showDetails(book)}
              >
                <div className="flex-1 flex flex-col items-center">
                  <div className="mb-4">
                    <img
                      src={book.imageLink || "/imgs/books.jpg"}
                      alt={book.title}
                      className="rounded-md object-cover"
                      width={200}
                      height={300}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFromWishlist(book.title)
                  }}
                  className="mt-4 bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition-colors w-full"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg max-w-3xl w-full mx-4 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-3xl text-white hover:text-gray-300">
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src= "/imgs/books.jpg"
                  alt={selectedBook.title}
                  className="rounded-md object-cover w-full"
                  width={200}
                  height={300}
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">{selectedBook.title}</h2>
                <p className="mb-2">
                  <strong>Author:</strong> {selectedBook.author}
                </p>
                <p className="mb-2">
                  <strong>Price:</strong> ${selectedBook.price?.toFixed(2)}
                </p>
                <p className="mb-2">
                  <strong>Rating:</strong> {selectedBook.rating} ★
                </p>
                <p className="mb-2">
                  <strong>Year:</strong> {selectedBook.year}
                </p>
                <p>
                  <strong>Abstract:</strong> {selectedBook.abstract || "No description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

