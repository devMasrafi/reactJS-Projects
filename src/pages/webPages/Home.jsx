import React, { useState } from "react";
import { NavLink } from "react-router";
import Button from "../../components/btn/Button";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import Footer from "../../components/navigation/Footer";
import Subcription from "../../components/contactSections/Subcription";

const Home = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const qnaData = [
    {
      question: "Who are you?",
      answer:
        "I'm a web developer focused on building responsive and interactive web apps using React Nextjs MeterialUi, mondobd, express ",
    },
    {
      question: "Want to hire me?",
      answer:
        "Yes, I am curently looking for work in any invironment office remote or project contract.",
    },
    {
      question: "What framework or library used",
      answer:
        "This site is made using reactjs and react router for multipage work. for styling used TailwindCSS might use other UI library if its too much to handle with pure react or JavaScript alone.",
    },
    {
      question: "Website Ui design",
      answer:
        "This UI is made by Masrafi Mondol (devMasrafi) every compoent and details design is made by him.",
    },
    {
      question: "What tech stack do you work with?",
      answer:
        "HTML, CSS, JavaScript, React, NextJS, tailwindCSS, ScSS, Node.js, MaterialUI,  REST APIs",
    },
    {
      question: "How do you approach building a project?",
      answer:
        "planing, Ui design, coding, testing, making adjustment, deployment",
    },
  ];

  const toggleQuestion = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  return (
    <main className="w-7xl mx-auto">
      {/* hero banner */}
      <div className="border-x border-b h-135 ">
        <div className="flex flex-col items-center p-10">
          <div className="mt-20">
            <h1 className="text-4xl font-bold tracking-wide italic ">
              devMasraf
            </h1>
            <h3 className="text-3xl opacity-50 capitalize my-4">
              all project in one place
            </h3>
          </div>
          <div className="w-200 my-15">
            <p className="text-lg italic  ">
              all type of project and test that can be done in react is done in
              this single project. All have been properly arranged and made
              navigate through react router. The peojct is done in pure
              JavaScript so it easy to understand. This peojcts can be viwed
              live here or on git repo or netlify or render
            </p>
            <div className="flex justify-center items-center gap-2 my-5 ">
              <NavLink to="https://github.com/devMasrafi" target="_blank">
                <Button className="bg-black text-white border-2 border-dark-green  ">
                  github
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button className="border-2 border-dark-green ">contact</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* question and answers. */}
      <div className="p-20 border-x">
        <h2 className="text-2xl capitalize my-4 font-semibold">
          Web Question and Answers
        </h2>
        <div>
          {qnaData.map((item, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center text-xl">
                {openQuestionIndex === index ? <FiMinus /> : <IoMdAdd />}
                <h2
                  // question and click
                  className="cursor-pointer pl-2"
                  onClick={() => toggleQuestion(index)}
                >
                  {item.question}{" "}
                </h2>
              </div>
              {/* answer */}
              {openQuestionIndex === index && (
                <p className="ml-5 pl-5 text-lg italic px-2 py-1 bg-black/20 rounded-xl mt-2">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* leave a mail to contact leter */}
      <div className="border-y border-x p-20 ">
        <Subcription />
      </div>

      {/* footer component */}
      <Footer className={`mt-20`} />
    </main>
  );
};

export default Home;
