import React, { useEffect, useRef } from "react";
import TypeIt from "typeit";

const HomePage = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    // adding a typing animation that goes back and forth infinitely
    const typewriter = new TypeIt(typewriterRef.current, {
      strings: ["Welcome to Experientime!"],
      speed: 100,
      startDelay: 500,
      lifeLike: true,
      loop: true,
    })
      .pause(1000)
      .delete(7)
      .pause(500)
      .go();

    return () => {
      typewriter.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="py-5">
        <h1 ref={typewriterRef}></h1>
        <p className="lead">
          Hello! My name is Darwin, and I'm a Full Stack developer. Experientime
          is a project I've developed with the objective of showcasing my expertise 
          and experiences using APIs, React.js, Laravel, and MySQL.
        </p>
        <p>
          In this engaging project, I leverage Unsplash's API to create a
          captivating gallery where users can view, filter, and download a
          variety of photos. As you scroll down, you'll discover a diverse
          collection of pictures to enjoy.
        </p>
        <p>
          In the car section, I utilize my own Laravel-based API, which serves
          data to the front-end. I've implemented a comprehensive CRUD
          functionality, empowering users to effortlessly create, read, update,
          and delete cars. Moreover, there are two additional options to
          download car information in both PDF and Excel formats.
        </p>
        <p>
          When adding a new car, I've integrated a public API of countries to
          simplify the process of selecting the origin country. My ongoing
          commitment is to continually enhance and introduce new functionalities
          to this project.
        </p>
        <p className="lead">Thank you very much for your interest!</p>
      </div>
    </div>
  );
};

export default HomePage;
