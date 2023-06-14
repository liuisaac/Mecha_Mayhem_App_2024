import { Navbar, Footer } from "./components/Global"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import Apparel from "./pages/Apparel";
import Awards from "./pages/Awards";
import Info from "./pages/Info";
import Photography from "./pages/Photography";
import Stream from "./pages/Stream";

import './index.css' 

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apparel" element={<Apparel />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/info" element={<Info />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/stream" element={<Stream />} />
    </Routes>
    <Footer />
  </>
);

export default App;
