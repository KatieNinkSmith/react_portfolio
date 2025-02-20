import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="contentContainer">
          <Header />
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
