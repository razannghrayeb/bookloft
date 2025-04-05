"use client"

import { useEffect } from "react"
import { useCart } from "../context/CartContext"

const saleBooks = [
  {
    id: "sale1",
    title: "Hamlet",
    author: "William Shakespeare",
    year: 1603,
    originalPrice: 9.99,
    salePrice: 4.999,
    image: "/imgs/books.jpg",
  },
  {
    id: "sale2",
    title: "King Lear",
    author: "William Shakespeare",
    year: 1608,
    originalPrice: 9.49,
    salePrice: 4.56,
    image: "/imgs/books.jpg",
  },
  {
    id: "sale3",
    title: "Expiation",
    author: "Ian McEwan",
    year: 2009,
    originalPrice: 8.6,
    salePrice: 4.3,
    image: "/imgs/books.jpg",
  },
  {
    id: "sale4",
    title: "The power of now",
    author: "Eckhart Tolle",
    year: 1999,
    originalPrice: 15,
    salePrice: 7.5,
    image: "/imgs/books.jpg",
  },
]

export default function SpecialOffersPage() {
  const { addToCart } = useCart()

  useEffect(() => {
    const saleLogo = document.getElementById("saleLogo")
    if (saleLogo) {
      setTimeout(() => {
        saleLogo.classList.add("animate-scale-in")
        setTimeout(() => {
          saleLogo.classList.add("glow")
        }, 1500)
      }, 1000)
    }
  }, [])

  const handleAddToCart = (book) => {
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.salePrice,
      image: book.image,
    })
  }

  return (
    <div className="pt-24">
      <div className="relative w-full h-screen -mt-8">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/imgs/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 -mt-18 bg-white bg-opacity-80 py-10 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold italic mb-6">
          Take advantage of our amazing book and eBook sale, offering unbeatable prices on a wide range of genres.
          Whether you prefer physical books or digital convenience, now's the time to expand your collection. Don't
          wait—these deals won't last long!
        </h2>
        <div className="flex justify-center">
          <img
            id="saleLogo"
            src="/imgs/salelogo.png"
            alt="Sale Logo"
            className="w-2/3 max-w-xs transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </div>

      <div className="bg-purple-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {saleBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-4">
                  <img
                    src={book.image || "/imgs/books.jpg"}
                    alt={book.title}
                    className="w-full h-64 object-contain bg-white rounded-lg"
                  />
                  <div className="flex justify-center gap-4 my-3">
                    <button className="bg-white p-2 rounded-full hover:scale-110 transition-transform">
                      <img src="/imgs/heart (2).png" alt="Favorite" width={30} height={30} />
                    </button>
                    <button
                      className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
                      onClick={() => handleAddToCart(book)}
                    >
                      <img src="/imgs/cart.png" alt="Cart" width={30} height={30} />
                    </button>
                  </div>
                  <div className="bg-white bg-opacity-80 p-4 rounded-md">
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
                      <strong>Price:</strong> <del>${book.originalPrice.toFixed(2)}</del>
                      <br />${book.salePrice.toFixed(2)} only
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-purple-300 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Find Your Next Favorite Book</h2>
          <form className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-900"
              placeholder="Search by title, author, or keyword..."
            />
            <button
              type="submit"
              className="bg-purple-800 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Search
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <label className="flex items-center gap-2">
              <input type="radio" name="search-type" defaultChecked />
              <span>All Books</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="search-type" />
              <span>eBooks Only</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="search-type" />
              <span>Print Books Only</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="search-type" />
              <span>Special Offers</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

