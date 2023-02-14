import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/arrayDestruct.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            image: arrayDestruct,
            github: "https://www.google.pt/",
            demo: "https://www.youtube.com/",

        },
        {
            id: 2,
            image: reactParallax,
            github: "https://www.google.pt/",
            demo: "https://www.youtube.com/",

        },
        {
            id: 3,
            image: navbar,
            github: "https://www.google.pt/",
            demo: "https://www.youtube.com/",
            
        },
        {
            id: 4,
            image: reactSmooth,
            github: "https://www.google.pt/",
            demo: "https://www.youtube.com/",
            
        },
        {
            id: 5,
            image: installNode,
            github: "https://www.google.pt/",
            demo: "https://www.youtube.com/",
        },
        {
            id: 6,
            image: reactWeather,
            github: "https://www.google.pt/",
            demo: "https://www.youtube.com/",
        },

    ]


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full
     text-white md:h-screen"
     >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full">
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-white">
                Portfolio</p>
            <p className="py-6">Some of my work will follow bellow</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">


            {portfolios.map(({id, image, title, github, demo}) =>(
                    <div key={id} 
                    className="max-w-lg flex shadow-lg shadow-purple-700 rounded-md overflow-hidden duration-300 hover:scale-105"
                    >
                    <img src={image} alt={title}  className="w-2/3"/>
                    <div className="w-1/3 cursor-default flex flex-col items-center justify-evenly p-1">
                        <h2>{title}</h2>
                        <a 
                        className="text-2xl cursor-pointer duration-150 hover:scale-110"
                        href={github}
                        target="_blank"
                        rel = "noopener noreferrer"
                        >
                           <FaGithub/> 
                        </a>
                        <a 
                        className="text-2xl cursor-pointer duration-150 hover:scale-110"
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                         <FaExternalLinkAlt/>   
                        </a>
                    </div>
                </div>
                ))}
              
                </div>     
        </div>

    </div>
  )
}

export default Portfolio