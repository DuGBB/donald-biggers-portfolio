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
    { name: "Ways to contact me", description: "Ways to contact me." },
    { name: "Resume", description: "Work Resume" },
    { name: "Certifications", description: "Course Certifications" },
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
        <Resume currentCategory={currentCategory}></Resume>
        <Certifications currentCategory={currentCategory}></Certifications>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
