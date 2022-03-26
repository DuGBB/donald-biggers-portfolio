import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import PortfolioGallery from "./components/PortfolioGallery";
import ContactForm from "./components/ContactMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [categories] = useState([
    { name: "About Me", description: "Information about me" },
    {
      name: "Portfolio",
      description: "Information about this portfolio.",
    },
    { name: "Contact", description: "Ways to contact me." },
    { name: "Resume", description: "Resume Coming Soon!" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <PortfolioGallery currentCategory={currentCategory}></PortfolioGallery>
        <About currentCategory={currentCategory}></About>
        <ContactForm currentCategory={currentCategory}></ContactForm>
        <Resume></Resume>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
