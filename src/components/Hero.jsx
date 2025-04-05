export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/imgs/back2.jpg')" }}></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold fade-in-up">
          The journey of a lifetime starts with the turning of a page.
        </h1>
      </div>
    </div>
  )
}

