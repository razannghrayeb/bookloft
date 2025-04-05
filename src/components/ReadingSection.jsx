export default function ReadingSection() {
  return (
    <div className="bg-purple-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 fade-left">
            <img src="/imgs/div3.png" alt="Reading books illustration" className="w-full max-w-md mx-auto" />
          </div>
          <div className="md:w-1/2 fade-in-up text-center">
            <h1 className="text-6xl font-bold mb-4 text-center m-2 leading-tight">
              Read Books.
              <br /> Support Local <br />
              Bookstores.
            </h1>
            <h2 className="text-2xl mb-4">
              Finally, you can get both physical books and eBooks from your local bookstore!
            </h2>
            <p className="text-lg">
              Browse and buy books at The Book Loft, and enjoy a seamless reading experience with our iPhone or Android
              apps. Every purchase you make helps support our store and other independent bookstores, ensuring the
              survival and growth of local literary communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

