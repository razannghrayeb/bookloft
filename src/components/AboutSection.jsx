export default function AboutSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 fade-left">
            <img src="/imgs/logo3.png" alt="Book Loft Logo" className="w-full max-w-md mx-auto" />
          </div>
          <div className="md:w-1/2 fade-in-up text-center">
            <h1 className="text-4xl font-bold text-purple-900 mb-6">Welcome to The Book Loft!</h1>
            <p className="text-lg text-gray-700">
              At The Book Loft, we believe in the power of books to inspire, educate, and entertain. Whether you're a
              fan of physical books or prefer the convenience of eBooks, we have something for everyone. Explore our
              carefully curated collection across a wide range of genres and find your next favorite read today!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

