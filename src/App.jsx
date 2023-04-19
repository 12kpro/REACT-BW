import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Experiences from "./components/experience/Experiences";
import Posts from "./components/posts/Posts";
import Profile from "./components/Profile";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
