import BookGrid from "../components/BookGrid"
import Newsletter from "../components/Newsletter"

const classicBooks = [
  {
    id: "classic1",
    title: "Expiation",
    author: "Ian McEwan",
    year: 2009,
    price: 6,
    image: "/imgs/books.jpg",
  },
  {
    id: "classic2",
    title: "The feast is finished",
    author: "Denise Robins",
    year: 1979,
    price: 0,
    image: "/imgs/books.jpg",
  },
  {
    id: "classic3",
    title: "Ararat",
    author: "Elgin Earl Groseclose",
    year: 1977,
    price: 9,
    image: "/imgs/books.jpg",
  },
  {
    id: "classic4",
    title: "The Phoenix and the Carpet",
    author: "Edith Nesbit",
    year: 2010,
    price: 0,
    image: "/imgs/books.jpg",
    moreInfo: "https://en.wikipedia.org/wiki/The_Phoenix_and_the_Carpet",
  },
  {
    id: "classic5",
    title: "Complete English Poems",
    author: "John Milton",
    year: 1990,
    price: 4,
    image: "/imgs/books.jpg",
  },
  {
    id: "classic6",
    title: "Pollyanna",
    author: "Eleanor Porter",
    year: 1960,
    price: 0,
    image: "/imgs/books.jpg",
    moreInfo: "https://en.wikipedia.org/wiki/Pollyanna",
  },
  {
    id: "classic7",
    title: "The Lesson of the Master",
    author: "Henry James",
    year: 2007,
    price: 4.5,
    image: "/imgs/books.jpg",
  },
]

const trendingBooks = [
  {
    id: "trending1",
    title: "A Court of Mist and Fury",
    author: "Sarah J. Maas",
    year: 2020,
    price: 0,
    image: "/imgs/books.jpg",
  },
  {
    id: "trending2",
    title: "I Don't Love You Anymore",
    author: "Rithvik Singh",
    year: 2024,
    price: 11,
    image: "/imgs/books.jpg",
  },
  {
    id: "trending3",
    title: "Onyx Storm",
    author: "Rebecca Yarros, Elizabeth Turner Stokes",
    year: 2025,
    price: 14,
    image: "/imgs/books.jpg",
  },
  {
    id: "trending4",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: 2020,
    price: 0,
    image: "/imgs/books.jpg",
    moreInfo: "https://en.wikipedia.org/wiki/The_Philosophy_of_Money",
  },
  {
    id: "trending5",
    title: "Thank You for Leaving",
    author: "Rithvik Singh",
    year: 2025,
    price: 4,
    image: "/imgs/books.jpg",
  },
  {
    id: "trending6",
    title: "The power of now",
    author: "Eckrat Tolle",
    year: 1999,
    price: 15,
    image: "/imgs/books.jpg",
    moreInfo: "https://en.wikipedia.org/wiki/The_Power_of_Now",
  },
]

export default function EBooksPage() {
  return (
    <div className="pt-24">
      <div className="relative w-full h-screen bg-purple-300 -mt-8">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full flex items-center justify-center text-center">
            <div className="p-10 text-white max-w-xl">
              <h1 className="text-6xl font-bold mb-10">Browse & Select E-Books</h1>
              <p className="text-2xl">
                Discover the finest e-books from your favorite authors. Dive into a vast collection spanning every genre
                and indulge in the joy of limitless reading!
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full relative">
            <div className="absolute inset-0 animate-fade-in-out">
              <img src="/imgs/ebook1noback.png" alt="E-book 1" className="w-full h-full object-cover" />
            </div>
           
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-4 border-dashed border-purple-900 p-6 mb-16 text-center">
            <h2 className="text-3xl font-bold text-purple-900">Explore Our E-Book Collection</h2>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold italic bg-purple-300 py-2 px-4 inline-block mb-6">Classic Books</h3>
            <BookGrid books={classicBooks} />
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold italic bg-purple-300 py-2 px-4 inline-block mb-6">Trending Books</h3>
            <BookGrid books={trendingBooks} />
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}

