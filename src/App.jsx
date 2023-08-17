import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import AnimeInfoPage from "./pages/AnimeInfoPage";
import Layout from "./pages/Layout";
import Results from "./pages/Results";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="anime-info/:id" element={<AnimeInfoPage />} />
            <Route path="results/:search_term" element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
