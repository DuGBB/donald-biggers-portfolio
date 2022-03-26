import React from "react";
import coverImage from "../../assets/cover/Nailer.png";

function About({ currentCategory }) {
  const { name, description } = currentCategory;
  console.log(name);
  if (name === "About Me") {
    return (
      <section className="my-5">
        <h1 id="about">Who am I?</h1>
        <p>
          After graduating high school in early 2000, I attended college for
          almost two years while studying computer science. I worked 3 part time
          jobs, and numerous side jobs. In mid 2002, I took the opportunity to
          join Boilermakers Union Local #455 as a second generation apprentice.
          I topped out of the program in 2007 and continued my career for more
          than 18 years.
        </p>
        <p>
          {" "}
          In early 2017, a recurring back injury worsened to the point where I
          could not perform the physically demanding labor. I had sugery in late
          2017 and returned to work less than a year later. The job was a good
          one up until I reinjured my back. I worked two more jobs as a foreman,
          and in the middle of 2021, decided to revisit my original career
          interest by enrolling in Vanderbilt University's Coding Bootcamp.
        </p>
        <img
          src={coverImage}
          className="my-2"
          style={{ width: "100%" }}
          alt="cover"
        />
      </section>
    );
  }
  return <section></section>;
}

export default About;
