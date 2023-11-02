import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<h2>Wrong path</h2>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App;
