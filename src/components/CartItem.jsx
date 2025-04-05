"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()
  const [quantity, setQuantity] = useState(item.quantity)

  const handleQuantityChange = (e) => {
    const newQuantity = Number.parseInt(e.target.value)
    if (newQuantity < 1) return

    setQuantity(newQuantity)
    updateQuantity(item.id, newQuantity)
  }

  const decreaseQuantity = () => {
    if (quantity <= 1) return
    const newQuantity = quantity - 1
    setQuantity(newQuantity)
    updateQuantity(item.id, newQuantity)
  }

  const increaseQuantity = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    updateQuantity(item.id, newQuantity)
  }

  return (
    <div className="flex items-center border-b border-gray-200 py-4 relative">
      <img src={item.image || "/imgs/books.jpg"} alt={item.title} className="w-24 h-36 object-cover rounded-md mr-6" />

      <div className="flex-1">
        <h3 className="text-lg font-bold text-purple-900 mb-1">{item.title}</h3>
        <p className="text-gray-600 mb-3">{item.author}</p>
        <p className="text-purple-900 font-bold mb-3">${(item.price * item.quantity).toFixed(2)}</p>

        <div className="flex items-center">
          <button
            onClick={decreaseQuantity}
            className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-12 h-8 mx-2 text-center border border-gray-300 rounded-md"
          />
          <button
            onClick={increaseQuantity}
            className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="absolute top-4 right-0 text-2xl text-gray-400 hover:text-red-500 transition-colors"
      >
        &times;
      </button>
    </div>
  )
}

