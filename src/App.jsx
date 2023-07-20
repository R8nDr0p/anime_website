import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Popular from "./components/Popular";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
