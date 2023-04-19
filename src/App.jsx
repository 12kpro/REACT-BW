import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Experiences from "./components/experience/Experiences";

function App() {
  return (
    <BrowserRouter>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experiences />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
