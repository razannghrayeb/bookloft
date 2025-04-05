"use client"

import { useState, useEffect } from "react"
import { useWishlist } from "../context/WishlistContext"
import { useCart } from "../context/CartContext"

const booksData = [
  {
    author: "William Shakespeare",
    country: "England",
    imageLink: "/imgs/book1.png",
    language: "English",
    pages: 432,
    title: "Hamlet",
    year: 1603,
    genre: "Tragedy",
    price: 9.99,
    rating: 4.7,
    abstract:
      "Prince Hamlet of Denmark seeks revenge against his uncle, who has murdered his father, taken the throne, and married his mother.",
  },
  {
    author: "Jane Austen",
    country: "United Kingdom",
    imageLink: "/imgs/book2.png",
    language: "English",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813,
    genre: "Romance",
    price: 10.99,
    rating: 4.8,
    abstract:
      "Elizabeth Bennet navigates love and social expectations as she clashes with the proud Mr. Darcy in this classic novel of manners and marriage.",
  },
  {
    author: "Charles Dickens",
    country: "England",
    imageLink: "/imgs/book3.png",
    language: "English",
    pages: 544,
    title: "Great Expectations",
    year: 1861,
    genre: "Coming-of-age",
    price: 12.99,
    rating: 4.5,
    abstract:
      "Pip, an orphan boy, has a life-changing encounter with an escaped convict that leads to unexpected opportunities, wealth, and heartbreak.",
  },
  {
    author: "Mark Twain",
    country: "United States",
    imageLink: "/imgs/compact history.png",
    language: "English",
    pages: 224,
    title: "Huckleberry Finn",
    year: 1884,
    genre: "Adventure",
    price: 11.99,
    rating: 4.6,
    abstract:
      "Huckleberry Finn escapes his abusive father and journeys down the Mississippi River with an escaped slave, Jim, encountering adventure and moral dilemmas.",
  },
]

export default function BooksPage() {
  const [books, setBooks] = useState(booksData)
  const [searchInput, setSearchInput] = useState("")
  const [genreFilter, setGenreFilter] = useState("")
  const [languageFilter, setLanguageFilter] = useState("")
  const [sortOption, setSortOption] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const genres = [...new Set(booksData.map((book) => book.genre))].sort()
  const languages = [...new Set(booksData.map((book) => book.language))].sort()

  useEffect(() => {
    let filteredBooks = [...booksData]

    if (searchInput) {
      const searchTerm = searchInput.toLowerCase()
      filteredBooks = filteredBooks.filter(
        (book) => book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm),
      )
    }

    if (genreFilter) {
      filteredBooks = filteredBooks.filter((book) => book.genre === genreFilter)
    }

    if (languageFilter) {
      filteredBooks = filteredBooks.filter((book) => book.language === languageFilter)
    }

    if (sortOption === "title") {
      filteredBooks.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortOption === "price") {
      filteredBooks.sort((a, b) => a.price - b.price)
    }

    setBooks(filteredBooks)
  }, [searchInput, genreFilter, languageFilter, sortOption])

  const handleToggleWishlist = (book) => {
    const isInWishlist = wishlist.some((item) => item.title === book.title)

    if (isInWishlist) {
      removeFromWishlist(book.title)
    } else {
      addToWishlist(book)
    }
  }

  const showBookDetails = (book) => {
    setSelectedBook(book)
  }

  const closeModal = () => {
    setSelectedBook(null)
  }

  return (
    <div className="pt-24 pb-10">
      <div className=" py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-40 flex flex-col md:flex-row gap-4 items-center align-middle ">
          <input
            type="text"
            placeholder="Search by title or author..."
            className="p-3 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-900 text-white"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <select
            className="p-3 rounded-md w-full md:w-48 bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <select
            className="p-3 rounded-md w-full md:w-48 bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
          >
            <option value="">All Languages</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>

          <select
            className="p-3 rounded-md w-full md:w-48  focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-900 text-white"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="" disabled>
              Sort
            </option>
            <option value="title">Sort by Title</option>
            <option value="price">Sort by Price (Low to High)</option>
          </select>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">Featured Books</h2>

        {books.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No books found matching your criteria.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {books.map((book) => {
              const isInWishlist = wishlist.some((item) => item.title === book.title)

              return (
                <div key={book.title} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-4">
                    <div className="flex justify-center">
                      <img
                        src={book.imageLink }
                        alt={book.title}
                        className="h-64 object-cover rounded-md cursor-pointer"
                        onClick={() => showBookDetails(book)}
                      />
                    </div>

                    <div className="mt-4 text-center">
                      <h3
                        className="text-xl font-semibold text-white cursor-pointer hover:text-purple-300"
                        onClick={() => showBookDetails(book)}
                      >
                        {book.title}
                      </h3>
                      <p className="text-gray-300 mt-1">{book.author}</p>
                      <p className="text-purple-300 font-bold mt-2">${book.price.toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between mt-4">
                      <button
                        className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition-colors"
                        onClick={() =>
                          addToCart({
                            id: book.title,
                            title: book.title,
                            author: book.author,
                            price: book.price,
                            image: book.imageLink,
                          })
                        }
                      >
                        Add to Cart
                      </button>

                      <button className="text-3xl" onClick={() => handleToggleWishlist(book)}>
                        {isInWishlist ? (
                          <span className="text-red-500">❤</span>
                        ) : (
                          <span className="text-gray-400 hover:text-red-500">♡</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-700">
              &times;
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={selectedBook.imageLink || "/placeholder.svg"}
                  alt={selectedBook.title}
                  className="w-full rounded-md"
                />
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">{selectedBook.title}</h2>
                <p className="mb-2">
                  <strong>Author:</strong> {selectedBook.author}
                </p>
                <p className="mb-2">
                  <strong>Language:</strong> {selectedBook.language}
                </p>
                <p className="mb-2">
                  <strong>Genre:</strong> {selectedBook.genre}
                </p>
                <p className="mb-2">
                  <strong>Price:</strong> ${selectedBook.price.toFixed(2)}
                </p>
                <p className="mb-2">
                  <strong>Rating:</strong> {selectedBook.rating} ★
                </p>
                <p className="mb-2">
                  <strong>Year:</strong> {selectedBook.year}
                </p>
                <p className="mb-4">
                  <strong>Abstract:</strong> {selectedBook.abstract}
                </p>

                <div className="flex gap-4">
                  <button
                    className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-md transition-colors"
                    onClick={() => {
                      addToCart({
                        id: selectedBook.title,
                        title: selectedBook.title,
                        author: selectedBook.author,
                        price: selectedBook.price,
                        image: selectedBook.imageLink,
                      })
                      closeModal()
                    }}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="border border-gray-300 py-2 px-6 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2"
                    onClick={() => handleToggleWishlist(selectedBook)}
                  >
                    {wishlist.some((item) => item.title === selectedBook.title) ? (
                      <>
                        Remove from Wishlist <span className="text-red-500">❤</span>
                      </>
                    ) : (
                      <>
                        Add to Wishlist <span>♡</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

