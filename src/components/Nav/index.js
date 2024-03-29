import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;
  console.log("=============================");
  console.log(props);
  console.log("=============================");
  useEffect(() => {
    console.log(currentCategory);
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="trade">
            {" "}
            👨‍🏭
          </span>{" "}
          Donald Biggers
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li> */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
