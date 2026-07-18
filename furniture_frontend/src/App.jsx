import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import FAQ from "./pages/faq";
import PrivacyPolicy from "./pages/privacypolicy";
import ReturnRefund from "./pages/returnrefund";
import Terms from "./pages/terms";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Living from "./pages/living";
import Bedroom from "./pages/bedroom";
import Kitchen from "./pages/kitchen";
import Offer from "./pages/offer";
import Cart from "./pages/cart";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false, // keeps it animating on scroll up/down
    });
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/returnrefund" element={<ReturnRefund />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/living" element={<Living />} />
      <Route path="/bedroom" element={<Bedroom />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}
    </Routes>
  );
}

export default App;
