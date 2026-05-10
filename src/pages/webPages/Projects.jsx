import React from "react";
import ProjectCard from "../../components/cards/ProjectCard";

const Projects = () => {
  const projectData = [
    {
      image: "src/assets/images/todoApp.png",
      title: "Todo App with react js and tailwindCSS",
      para: "made with react js and TailwindCSS instant dom and CRUD system build in. local storage set so that it will not be lost. and filter system.",
      projectLink: "/todoApp",
    },
    {
      image: "src/assets/images/weatherAPp.png",
      title: "Weather App. getting live data and information",
      para: "Live weather application made with react js and TailwindCSS. every part is used from live server response and dynamic system.",
      projectLink: "/weather",
    },
    {
      image: "src/assets/images/weatherAPp.png",
      title: "Recipie Book modal style easy to follow",
      para: "easy to use recipie book for different cuisines and detailed explanation on how to make each and every one of them. what to use and what to do on each of the step",
      projectLink: "/recipiebook",
    },
    {
      image: "src/assets/images/APiCall.png",
      title: "fetching APIdata from JsonPlace holder",
      para: "made with react js and TailwindCSS, getting data and setting up all of the jundamental work so its easy to view and manage it after",
      projectLink: "/apiData",
    },
  ];

  return (
    <main className="w-7xl mx-auto">
      <div className="border-x ">
        {/* project page hero */}
        {/* this is for information */}
        <div className="py-20 border-b">
          <div className="w-100 mx-auto">
            <h2 className="text-4xl capitalize font-semibold">
              projects that have been worked on
            </h2>
            <p className="text-lg my-3 tracking-wider italic opacity-60">
              Every project in this web/site is made my Masrafi Mondol
              (devMasrafi). On click it will take you to the project so you can
              check it and interact with it.
            </p>
          </div>
        </div>

        {/* projects */}
        <div className="py-10 flex justify-center flex-wrap items-center px-20 gap-20 ">
          {projectData.map((item, index) => {
            return (
              <div key={index} className="w-120">
                <ProjectCard
                  image={item.image}
                  title={item.title}
                  para={item.para}
                  link={item.projectLink}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Projects;
