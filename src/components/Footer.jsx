export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="mb-4 text-sm md:text-base">&copy; 2025 The Book Loft. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:scale-110 transition-transform">
              <img src="/imgs/wats.svg" alt="WhatsApp" width={30} height={30} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img src="/imgs/inst.svg" alt="Instagram" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

