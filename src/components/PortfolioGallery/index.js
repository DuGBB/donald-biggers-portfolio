import React, { useState } from "react";
import RepoList from "../RepoList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function PortfolioGallery({ currentCategory }) {
  const { name, description } = currentCategory;

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{}</p>
      <RepoList category={name} />
    </section>
  );
}
export default PortfolioGallery;
