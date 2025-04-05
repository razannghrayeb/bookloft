"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"

export default function GiftCardPage() {
  const { addToCart } = useCart()
  const [emailTo, setEmailTo] = useState("")
  const [emailFrom, setEmailFrom] = useState("")
  const [amount, setAmount] = useState("")
  const [message, setMessage] = useState("")
  const [charCount, setCharCount] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleMessageChange = (e) => {
    const value = e.target.value
    setMessage(value)
    setCharCount(value.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!emailTo || !emailFrom || !amount) {
      alert("Please fill out all required fields.")
      return
    }

    const giftcardId = "giftcard-" + Date.now()
    const giftcard = {
      id: giftcardId,
      type: "giftcard",
      title: `Gift Card - $${amount}`,
      price: Number.parseFloat(amount),
      recipient: emailTo,
      sender: emailFrom,
      message: message,
      image: "/placeholder.svg",
    }

    addToCart(giftcard)
    setShowConfirmation(true)

    setTimeout(() => {
      setEmailTo("")
      setEmailFrom("")
      setAmount("")
      setMessage("")
      setCharCount(0)
      setShowConfirmation(false)
    }, 3000)
  }

  return (
    <div className="pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-purple-900 mb-5">THE BOOKLOFT GIFTCARDS</h1>
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-10">
          THEBOOKLOFT.org digital gift cards are the perfect gift for any avid reader. The card value is added to the
          recipient's THEBOOKLOFT.org account as credit, and never expires. THEBOOKLOFT.org digital gift cards can only
          be redeemed online on THEBOOKLOFT.org.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="mb-6">
              <img src="/imgs/giftcars.png" alt="Gift Card" className="rounded-3xl w-full" />
            </div>

            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                If you purchase a gift card from a specific store or affiliate on THEBOOKLOFT.org, the recipient will be
                sent to the same store on our site when they click the link to redeem the card, so the store will get
                credit for any purchases made.
              </li>
              <li>THEBOOKLOFT.org Gift Cards are only accepted at https://THEBOOKLOFT.org/</li>
              <li>You can choose a value from $10-$1,000.</li>
              <li>All gift cards are digital only and must be sent to a valid email address.</li>
              <li>Gift cards cannot be used for ebook purchases.</li>
              <li>
                For a personalized touch, include the recipient's name and a personal message on the gift card form.
              </li>
              <li>THEBOOKLOFT.org Gift Cards never expire and have no hidden fees.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email_to" className="block text-lg text-purple-900 mb-1">
                    TO*
                  </label>
                  <input
                    id="email_to"
                    type="email"
                    placeholder="Recipient email"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email_from" className="block text-lg text-purple-900 mb-1">
                    FROM*
                  </label>
                  <input
                    id="email_from"
                    type="email"
                    placeholder="Your email"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={emailFrom}
                    onChange={(e) => setEmailFrom(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg text-purple-900 mb-3">Choose an Amount*</label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[10, 15, 20, 25, 50, 75, 100, 250, 500, 1000].map((value) => (
                    <div key={value} className="relative">
                      <input
                        id={`price${value}`}
                        name="price"
                        type="radio"
                        value={value}
                        checked={amount === value.toString()}
                        onChange={() => setAmount(value.toString())}
                        className="sr-only"
                        required
                      />
                      <label
                        htmlFor={`price${value}`}
                        className={`flex items-center justify-center h-10 w-full border ${amount === value.toString() ? "bg-purple-900 text-white" : "bg-gray-50 text-purple-900"} border-purple-900 rounded-md cursor-pointer hover:bg-purple-100 transition-colors`}
                      >
                        ${value}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg text-purple-900 mb-1">
                  Add a Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  maxLength={250}
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
                <small className="text-gray-500">{charCount}/250 characters</small>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-900 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors"
              >
                Add to cart
              </button>

              {showConfirmation && (
                <div className="text-center text-green-600 font-semibold mt-4">
                  Gift card added to cart successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

