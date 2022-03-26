import React from "react";

function Resume(currentCategory) {
  const { name, description } = currentCategory;
  console.log(name);
  if (name === "Resume") {
    return (
      <section>
        <p>Resume is under construction: Coming Soon!</p>
      </section>
    );
  }
  return <section></section>;
}

export default Resume;
