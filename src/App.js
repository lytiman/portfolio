import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/work"
import Contact from "./components/contact/Contact";



function App() {
  return (
    <div className="App">
  <Navbar/>
  <Home/>
  <About/>
  <Skills/>
  <Work/>
  <Contact/>
    </div>
  );
}

export default App;
