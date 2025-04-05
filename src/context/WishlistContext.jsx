"use client"

import { createContext, useContext, useState, useEffect } from "react"

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist))
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage", error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const existingItem = prevWishlist.some((wishlistItem) => wishlistItem.title === item.title)

      if (!existingItem) {
        return [...prevWishlist, item]
      }

      return prevWishlist
    })
  }

  const removeFromWishlist = (title) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.title !== title))
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

