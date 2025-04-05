"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const count = cart.reduce((total, item) => total + item.quantity, 0)
    setCartCount(count)
  }, [cart])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/imgs/logo2.png" alt="The Book Loft Logo" className="w-12 h-15" />
              <p className="ml-3 text-2xl font-bold">THE BOOK LOFT</p>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl" aria-label="Toggle menu">
              &#9776;
            </button>
          </div>

          <div
            className={`absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center gap-5 transition-all duration-300 ${isMenuOpen ? "flex flex-col py-4" : "hidden"}`}
          >
            <Link
              to="/books"
              className="block py-2 md:py-0 text-center md:text-left hover:text-purple-400 transition-colors"
            >
              Books
            </Link>
            <Link
              to="/ebooks"
              className="block py-2 md:py-0 text-center md:text-left hover:text-purple-400 transition-colors"
            >
              EBooks
            </Link>
            <Link
              to="/giftcard"
              className="block py-2 md:py-0 text-center md:text-left hover:text-purple-400 transition-colors"
            >
              Gift Cards
            </Link>
            <Link
              to="/bestseller"
              className="block py-2 md:py-0 text-center md:text-left hover:text-purple-400 transition-colors"
            >
              Best Sellers
            </Link>
            <Link
              to="/special-offers"
              className="block py-2 md:py-0 text-center md:text-left hover:text-purple-400 transition-colors"
            >
              Special Offers
            </Link>
            <Link
              to="/wishlist"
              className="block py-2 md:py-0 text-center md:text-left hover:text-purple-400 transition-colors"
            >
              <img
                src="/imgs/heart (2).png"
                alt="Wishlist"
                className="w-10 h-auto inline-block hover:scale-110 transition-transform"
              />
            </Link>
            <Link
              to="/cart"
              className="block py-2 md:py-0 text-center md:text-left hover:text-purple-400 transition-colors relative"
            >
              <img
                src="/imgs/cart.png"
                alt="Cart"
                className="w-10 h-auto inline-block hover:scale-110 transition-transform"
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

