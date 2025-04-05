export default function CollectionSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-purple-900 mb-6">Discover Our Collection</h2>
          <h3 className="text-2xl text-purple-900 mb-4">Books for Every Taste</h3>
          <p className="text-lg text-gray-700">
            Dive into captivating worlds with our fiction collection.
            <br />
            From bestsellers to timeless classics, we have a novel for every reader.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-up">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src="/imgs/non-fiction.jpg"
              alt="Non-fiction books"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-4 text-sm">
                Expand your knowledge and explore new ideas with our non-fiction books, ranging from history and
                biographies to self-help and mindfulness.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src="/imgs/books.jpg"
              alt="Fiction books"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-4 text-sm">
                Dive into captivating worlds with our fiction collection. From bestsellers to timeless classics, we have
                a novel for every reader.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src="/imgs/children.avif"
              alt="Children's books"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-4 text-sm">
                Nurture young minds with our wide selection of children's books. From picture books to middle-grade
                adventures, we have something for every age.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src="/imgs/ebook.webp"
              alt="E-books"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white p-4 text-sm">
                Take your reading anywhere with our extensive selection of eBooks. Accessible on multiple devices, our
                digital library makes it easy to read on the go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

