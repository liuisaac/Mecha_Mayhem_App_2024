import { Navbar, Footer } from "./components/Global"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import Apparel from "./pages/Apparel";
import Awards from "./pages/Awards";
import Info from "./pages/Info";
import Photography from "./pages/Photography";
import Stream from "./pages/Stream";
import PageNotFound from "./pages/PageNotFound";

import './index.css' 

import Aos from 'aos';
import 'aos/dist/aos.css'


Aos.init({
  offset: 100
});


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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </>
);

export default App;
