import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/PortfolioGallery/PG.png";

function PortfolioGallery(props) {
  const currentCategory = {
    name: "Portfolio",
    description: "Information about this portfolio.",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="Blazing-Saddles-Forum"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}
export default PortfolioGallery;
