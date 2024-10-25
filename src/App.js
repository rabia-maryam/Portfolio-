import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Skills from "./components/skills";
import Contact from "./components/contactme";
import Project from "./components/project";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
