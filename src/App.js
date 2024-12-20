import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotesState from "./context/notes/NotesState";
import Footer from "./components/Footer";

function App() {
  return (
    <NotesState>
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        </div>
        <Footer></Footer>
        </Router>
      </NotesState>
  );
}

export default App;
