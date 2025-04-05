import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "../src/context/CartContext"
import { WishlistProvider } from "../src/context/WishlistContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import BooksPage from "./pages/BooksPage"
import EBooksPage from "./pages/EBooksPage"
import GiftCardPage from "./pages/GiftCardPage"
import BestsellerPage from "./pages/BestsellerPage"
import SpecialOffersPage from "./pages/SpecialOffersPage"
import WishlistPage from "./pages/WishlistPage"
import CartPage from "./pages/CartPage"
import "./index.css"

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/ebooks" element={<EBooksPage />} />
                <Route path="/giftcard" element={<GiftCardPage />} />
                <Route path="/bestseller" element={<BestsellerPage />} />
                <Route path="/special-offers" element={<SpecialOffersPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  )
}

export default App

