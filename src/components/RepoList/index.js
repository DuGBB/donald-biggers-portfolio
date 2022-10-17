import React, { useState } from "react";
// import Modal from "../Modal";

// import photo from "../../assets/PortfolioGallery/PG.png";
import ReactPortfolio from "../../assets/small/Donald-Bigger-portfolio/DBportfolio.png";
import BSForum from "../../assets/small/Blazing-Saddles-Forum/Blazing-Saddles-Forum.png";
import DailyPlanner from "../../assets/small/Daily-Planner/DailyPlannerScreenshot.png";
import ECommerce from "../../assets/small/E-commerce-Back-End/ecommerce.png";
import TrailLad from "../../assets/small/Group-Project-1/traillad.png";
import BootcampRealEstate from "../../assets/small/Group-Project-2/Bootcamp-Real-Estate.png";
import FitnessApp from "../../assets/small/Group-Project-3/Lennons-Fitness-Super-App.png";

function RepoList(currentCategory) {
  let [photos] = useState([
    {
      name: "Donald Biggers' React Portfolio",
      technology: "React, JavaScript",
      description:
        "A React application showcasing technologies I have used, projects I have worked on, and my current resume.",
      imgName: "Donald-Biggers-portfolio/DBportfolio",
      importedImg: ReactPortfolio,
      GitHub: "https://github.com/DuGBB/donald-biggers-portfolio",
      deployed: "https://dugbb.github.io/donald-biggers-portfolio/",
    },
    {
      name: "Blazing Saddles Forum",
      technology: "MongoDB, JavaScript",
      description:
        "An API for a social network that uses a NoSQL database for a website that can handle a large amount of unstructured data.",
      imgName: "Blazing-Saddles-Forum/Blazing-Saddles-Forum.png",
      importedImg: BSForum,
      GitHub: "https://github.com/DuGBB/Blazing-Sadddles-Forum",
      deployed:
        "https://drive.google.com/file/d/1B8xiSU_4wZJ4sLQeZvOiJW49pQ-RrEK5/view",
    },
    {
      name: "Daily Planner",
      technology: "JavaScript, HTML, CSS",
      description:
        "Create a daily planner using JavaScript and provided starter code.",
      imgName: "Daily-Planner/DailyPlannerScreenshot.png",
      importedImg: DailyPlanner,
      GitHub: "https://github.com/DuGBB/Daily-Planner",
      deployed: " https://dugbb.github.io/Daily-Planner",
    },
    {
      name: "E-commerce Backend",
      technology: "MySQl, Javascript",
      description:
        "The project involved building a back end for a e-commerce web site. Taking a working Express.js API and configuring it to use Seguelize to interact with a MySQL database.",
      imgName: "E-commerce-Back-End/ecommerce.png",
      importedImg: ECommerce,
      GitHub: "https://github.com/DuGBB/Daily-Planner",
      deployed: "https://watch.screencastify.com/v/84143vu94yLLwAXSHZCX",
    },
    {
      name: "Trail Lad",
      technology: "JavaScript, HTML, CSS, Tailwind, API's",
      description:
        "Create a MVP website using the knowledge obtained in the first six weeks of the bootcamp, by utilizing the following skills and technologies: Deployment, Interactivity, Client-side Storage, Responsive Design, and Polished UI",
      imgName: "Group-Project-1/traillad.png",
      importedImg: TrailLad,
      GitHub: "https://github.com/DuGBB/trail-lad",
      deployed: "https://dugbb.github.io/trail-lad",
    },
    {
      name: "Bootcamp Real Estate",
      technology: "JavaScript, CSS, Handlebars",
      description:
        "This is a website to be used by both a real estate manager/owner and the tenants who are renting. Tenants and landlords will have their separate landing page with relavant information.",
      imgName: "Group-Project-2/Bootcamp-Real-Estate.png",
      importedImg: BootcampRealEstate,
      GitHub: "https://github.com/DuGBB/Daily-Planner",
      deployed: "https://calm-depths-28335.herokuapp.com/",
    },
    {
      name: "Fitness Super App",
      technology: "JavaScript, HTML, CSS, MongoDB, Mongoose, Node.js",
      description:
        "This is a website that allows a user to signup/login and then view/register for classes as well as update/view their personal benchmarks.",
      imgName: "Group-Project-3/Lennons-Fitness-Super-App.png",
      importedImg: FitnessApp,
      GitHub: "https://github.com/DuGBB/Lennons-Fitness-Super-App",
      deployed: "https://ancient-fortress-46075.herokuapp.com/",
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
        <>
          <h2 key={image.imgName}>{image.name}</h2>
          <img
            //   src={require(`../../assets/small/${image.imgName}`).default}
            src={image.importedImg}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
          <a href={image.GitHub}>GitHub</a>
          <a href={image.deployed}>Deployed</a>
        </>
      ))}
    </div>
  );
}

export default RepoList;
