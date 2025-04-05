export default function FeaturesSection() {
  return (
    <div className="bg-purple-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Why Shop with Us?</h2>

        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-8xl font-bold text-purple-300 fade-left">01</p>
            <h3 className="text-3xl font-bold fade-left">Curated Collections</h3>
            <div className="md:flex-1 flex justify-center fade-in-up">
              <img src="/imgs/cc.png" alt="Curated collections icon" width={200} height={200} />
            </div>
            <p className="md:w-1/3 text-lg fade-left">
              Expert team handpicks the best books and eBooks across genres, ensuring that you get quality reads every
              time.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="md:w-1/3 text-lg fade-left">
              Enjoy quick shipping on all physical books, with free delivery on orders over 100$.
            </p>
            <div className="md:flex-1 flex justify-center fade-in-up">
              <img src="/imgs/F.png" alt="Free shipping icon" width={200} height={200} />
            </div>
            <p className="text-8xl font-bold text-purple-300 fade-left">02</p>
            <h3 className="text-3xl font-bold fade-left">Free Shipping</h3>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-8xl font-bold text-purple-300 fade-left">03</p>
            <h3 className="text-3xl font-bold fade-left">Access to eBooks</h3>
            <div className="md:flex-1 flex justify-center fade-in-up">
              <img src="/imgs/E.png" alt="E-books access icon" width={200} height={200} />
            </div>
            <p className="md:w-1/3 text-lg fade-left">
              Buy your eBooks and start reading instantly! Enjoy the convenience of downloading directly to your device.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

