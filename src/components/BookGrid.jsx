"use client"

import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"

export default function BookGrid({ books }) {
  const { addToCart } = useCart()
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const handleAddToCart = (book) => {
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image || "../public/imgs/books.jpg",
    })
  }

  const handleToggleWishlist = (book) => {
    const isInWishlist = wishlist.some((item) => item.title === book.title)
    if (isInWishlist) {
      removeFromWishlist(book.title)
    } else {
      addToWishlist({
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        year: book.year,
        image: book.image || "../public/imgs/books.jpg",
        moreInfo: book.moreInfo || "",
      })
    }
  }


  return (
    <div className="flex overflow-x-auto gap-6 pb-6">
      {books.map((book) => (
        <div
          key={book.id}
          className="flex-shrink-0 w-64 bg-purple-900 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="p-4">
            <img
              src={book.image || "../public/imgs/books.jpg"}
              alt={book.title}
              className="w-full h-72 object-cover rounded-md mb-4"
            />

            <div className="flex justify-end gap-3 mb-4">
              <button
                className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
                onClick={() => handleToggleWishlist(book)}
              >
                <img
                  src="../public/imgs/heart (2).png"
                  alt="Favorite"
                  width={24}
                  height={24}
                />
              </button>
              <button
                className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
                onClick={() => handleAddToCart(book)}
              >
                <img src="../public/imgs/cart.png" alt="Cart" width={24} height={24} />
              </button>
            </div>

            <div className="space-y-1">
              <p>
                <strong>Title:</strong> {book.title}
              </p>
              <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>
                <strong>Year:</strong> {book.year}
              </p>
              <p>
                <strong>Price:</strong> {book.price === 0 ? "Free" : `$${book.price}`}
              </p>
              {book.moreInfo && (
                <p>
                  <strong>More Info:</strong>{" "}
                  <a
                    href={book.moreInfo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline"
                  >
                    Wikipedia Link
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
