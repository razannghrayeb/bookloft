"use client"

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for subscribing to our newsletter!")
    e.target.reset()
  }

  return (
    <div className="bg-purple-900 py-16 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8">Subscribe to our newsletter for the latest book releases and exclusive offers</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-md focus:outline-none text-gray-800"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

