import React, { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

const HomePage = () => {
    const typewriterRef = useRef(null);

    useEffect(() => {
        const typewriter = new TypeIt(typewriterRef.current, {
            strings: ['Welcome to Experientime!'],
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
                    Hello! I'm Darwin, a Full Stack developer. Experientime is a project
                    designed to showcase my expertise and experiences using APIs,
                    React.js, Laravel, and MySQL.
                </p>
                <p>
                    Join me on this journey as we explore a captivating gallery created
                    using Unsplash's API. Discover and download a diverse range of photos
                    as you scroll through the collection.
                </p>
                <p>
                    The car section introduces my Laravel-based API, powering a complete
                    CRUD system for managing vehicles. Experience seamless interactions as
                    you create, read, update, and delete cars. Additionally, you can
                    download car information in PDF and Excel formats.
                </p>
                <p>
                    Simplifying the process of adding new cars, I've integrated a public
                    API of countries. This ensures effortless selection of the origin
                    country. As I continue to innovate, watch for exciting new features
                    and enhancements.
                </p>
                <p className="lead">Thank you for your interest in Experientime!</p>
            </div>
        </div>
    );
};

export default HomePage;
