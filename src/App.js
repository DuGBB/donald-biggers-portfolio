import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import PortfolioGallery from "./components/PortfolioGallery";
import ContactForm from "./components/ContactMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  const [categories] = useState([
    { name: "About Me", description: "Information about me" },
    {
      name: "Portfolio",
      description: "Information about this portfolio.",
    },

    { name: "Certifications", description: "Course Certifications" },
    { name: "Resume", description: "Work Resume" },
    { name: "Contact Info", description: "Ways to contact me." },
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
        <Certifications currentCategory={currentCategory}></Certifications>
        <Resume currentCategory={currentCategory}></Resume>
        <ContactForm currentCategory={currentCategory}></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
