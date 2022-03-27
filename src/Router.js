import About from "Components/About";
import Contact from "Components/Contact";
import Footer from "Components/Footer";
import Nav from "Components/Nav";
import Recruit from "Components/Recruit";
import Top from "Components/Top";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recruit" element={<Recruit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
