import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SiteNav from "./components/SiteNav";

function App() {
  return (
    <BrowserRouter>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
