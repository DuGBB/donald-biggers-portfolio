import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import PortfolioGallery from "./components/PortfolioGallery";

function App() {
  const [categories] = useState([
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
        <PortfolioGallery></PortfolioGallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
