"use client"

import { useEffect } from "react"
import BookSection from "../components/BookSection"
import Newsletter from "../components/Newsletter"

const physicalBooks = [
  {
    id: "book1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    price: 10.99,
    image: "/imgs/books.jpg",
  },
  {
    id: "book2",
    title: "Great Expectations",
    author: "Charles Dickens",
    year: 1861,
    price: 12.99,
    image: "/imgs/books.jpg",
  },
  {
    id: "book3",
    title: "Hamlet",
    author: "William Shakespeare",
    year: 1603,
    price: 9.99,
    image: "/imgs/books.jpg",
  },
  {
    id: "book4",
    title: "King Lear",
    author: "William Shakespeare",
    year: 1608,
    price: 9.49,
    image: "/imgs/books.jpg",
  },
  {
    id: "book5",
    title: "Othello",
    author: "William Shakespeare",
    year: 1609,
    price: 8.99,
    image: "/imgs/books.jpg",
  },
  {
    id: "book6",
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    year: 1884,
    price: 11.99,
    image: "/imgs/books.jpg",
  },
]

const ebooks = [
  {
    id: "ebook1",
    title: "A Court of Mist and Fury",
    author: "Sarah J. Maas",
    year: 2020,
    price: 0,
    image: "/imgs/books.jpg",
    format: "eBook",
  },
  {
    id: "ebook2",
    title: "Onyx Storm",
    author: "Rebecca Yarros",
    year: 2025,
    price: 14.0,
    image: "/imgs/books.jpg",
    format: "eBook",
  },
  {
    id: "ebook3",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: 2020,
    price: 0,
    image: "/imgs/books.jpg",
    format: "eBook",
  },
  {
    id: "ebook4",
    title: "The Power of Now",
    author: "Eckhart Tolle",
    year: 1999,
    price: 15.0,
    image: "/imgs/books.jpg",
    format: "eBook",
  },
]

export default function BestsellerPage() {
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll(".fade-in-up")

      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top

        if (elementTop < window.innerHeight && elementTop >= 0) {
          element.classList.add("show")
        } else {
          element.classList.remove("show")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="pt-24">
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 h-72 flex items-center justify-center text-white text-center px-4 -mt-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 shadow-text">Discover Our Best Sellers</h1>
          <p className="text-xl opacity-90">Explore the most popular books loved by our readers</p>
        </div>
      </div>

      <BookSection title="Best Selling Books" books={physicalBooks}  />

      <BookSection title="Best Selling eBooks" books={ebooks} />

      <Newsletter />
    </div>
  )
}

