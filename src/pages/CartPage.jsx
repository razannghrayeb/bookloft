"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import CartItem from "../components/CartItem"
import RecommendedBooks from "../components/RecommendedBooks"
import Newsletter from "../components/Newsletter"

export default function CartPage() {
  const { cart, clearCart } = useCart()
  const [subtotal, setSubtotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculatedSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    const calculatedTax = calculatedSubtotal * 0.1

    setSubtotal(calculatedSubtotal)
    setTax(calculatedTax)
    setTotal(calculatedSubtotal + calculatedTax)
  }, [cart])

  const handleCheckout = () => {
    alert("Thank you for your purchase! This is where the checkout process would begin.")
  }

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h1 className="text-3xl font-bold text-center text-purple-900 mb-8">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600 mb-5">Your cart is empty</p>
            <Link
              to="/bestseller"
              className="inline-block bg-purple-900 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-fit">
              <div className="flex justify-between mb-3">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-3 mb-5">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-purple-900 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors mb-3"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full border border-gray-300 text-gray-600 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>

      <RecommendedBooks />
      <Newsletter />
    </div>
  )
}

