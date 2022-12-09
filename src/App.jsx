
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import NoPage from "./Routes/NoPage";


function App() {
  return (
      <div className="App">
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contacto" element={<Contact/>} />
              <Route path="/dentista:id" element={<Detail/>} />
              <Route path="/favoritos" element={<Favs/>} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
          <Footer/>
      </div>
  );
}

export default App;
