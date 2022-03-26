import React, { useState } from "react";
// import Modal from "../Modal";

// import photo from "../../assets/PortfolioGallery/PG.png";
import BSForum from "../../assets/small/Blazing-Saddles-Forum/Blazing-Saddles-Forum.png";
import DailyPlanner from "../../assets/small/Daily-Planner/DailyPlannerScreenshot.png";
import ECommerce from "../../assets/small/E-commerce-Back-End/ecommerce.png";
import TrailLad from "../../assets/small/Group-Project-1/traillad.png";
import BootcampRealEstate from "../../assets/small/Group-Project-2/Bootcamp-Real-Estate.png";
import FitnessApp from "../../assets/small/Group-Project-3/Lennons-Fitness-Super-App.png";

function RepoList(currentCategory) {
  let [photos] = useState([
    {
      name: "Blazing Saddles Forum",
      technology: "MongoDB, JavaScript",
      description:
        "An API for a social network that uses a NoSQL database for a website that can handle a large amount of unstructured data.",
      imgName: "Blazing-Saddles-Forum/Blazing-Saddles-Forum.png",
      importedImg: BSForum,
    },
    {
      name: "Daily Planner",
      technology: "JavaScript, HTML, CSS",
      description:
        "Create a daily planner using JavaScript and provided starter code.",
      imgName: "Daily-Planner/DailyPlannerScreenshot.png",
      importedImg: DailyPlanner,
    },
    {
      name: "E-commerce Backend",
      technology: "MySQl, Javascript",
      description:
        "The project involved building a back end for a e-commerce web site. Taking a working Express.js API and configuring it to use Seguelize to interact with a MySQL database.",
      imgName: "E-commerce-Back-End/ecommerce.png",
      importedImg: ECommerce,
    },
    {
      name: "Trail Lad",
      technology: "JavaScript, HTML, CSS, Tailwind, API's",
      description:
        "Create a MVP website using the knowledge obtained in the first six weeks of the bootcamp, by utilizing the following skills and technologies: Deployment, Interactivity, Client-side Storage, Responsive Design, and Polished UI",
      imgName: "Group-Project-1/traillad.png",
      importedImg: TrailLad,
    },
    {
      name: "Bootcamp Real Estate",
      technology: "JavaScript, CSS, Handlebars",
      description:
        "This is a website to be used by both a real estate manager/owner and the tenants who are renting. Tenants and landlords will have their separate landing page with relavant information.",
      imgName: "Group-Project-2/Bootcamp-Real-Estate.png",
      importedImg: BootcampRealEstate,
    },
    {
      name: "Fitness Super App",
      technology: "JavaScript, HTML, CSS, MongoDB, Mongoose, Node.js",
      description:
        "This is a website that allows a user to signup/login and then view/register for classes as well as update/view their personal benchmarks.",
      imgName: "Group-Project-3/Lennons-Fitness-Super-App.png",
      importedImg: FitnessApp,
    },
  ]);

  const currentPhotos = photos.filter(
    (photo) => currentCategory.category === "Portfolio"
  );

  console.log(currentCategory);
  console.log(currentPhotos);
  return (
    <div>
      {/* <img src={photo} alt="Commercial Example" /> */}
      {currentPhotos.map((image) => (
        <img
          //   src={require(`../../assets/small/${image.imgName}`).default}
          src={image.importedImg}
          alt={image.name}
          className="img-thumbnail mx-1"
          key={image.name}
        />
      ))}
    </div>
  );
}

export default RepoList;