import React, { useState } from 'react';
import './Portfolio.css';
import crmpro from '../assets/crm.jpeg'
import moviepro from '../assets/movie.png'
import hotelpro from '../assets/hotel.png'
import iphonepro from '../assets/iphone.png'
import genderpro from '../assets/gender.png'
import foodpro from '../assets/food.png'
import Tourismwebsitepro from '../assets/Tourismwebsite.png'
import portfolio1pro from '../assets/portfolio1.png'
import Ecommerspro from '../assets/Ecommers.png'
import portfolio2pro from '../assets/porrtfolio2.png'
import portfolio3pro from '../assets/porrtfolio3.png'

const projects = [
    {
        img: crmpro,
        title: "CRM System",
        description: "A customer management tool built with React and MongoDB.",
        link: "https://jaikrishna-crm.netlify.app/"
    },
    {
        img: moviepro,
        title: "Movie Booking",
        description: "Online movie booking site with seat selection and payment UI.",
        link: "https://moviebookingwebsite.netlify.app/"
    },
    {
        img: hotelpro,
        title: "Hotel Booking",
        description: "Responsive hotel booking platform using MERN stack.",
        link: "https://jaikrishna-hotelwebsite.netlify.app/"
    },
    {
        img: iphonepro,
        title: "iPhone Website Clone",
        description: "Responsive iPhone Website Clone using React.js and CSS.",
        link: "https://effervescent-semolina-ff54e8.netlify.app/"
    },
    {
        img: genderpro,
        title: "SDG 17 - Gender Equality",
        description: "Responsive site on SDG 17 goals using HTML, CSS, JS, Bootstrap.",
        link: "https://jaikrishnamilestonetask.netlify.app/"
    },
    {
        img: foodpro,
        title: "Food Delivery Website",
        description: "Responsive Food Delivery website using MERN stack.",
        link: "https://fooddeliversite.netlify.app/"
    },

    {
        img: Tourismwebsitepro,
        title: "Tourism Website",
        description: "A vibrant and user-friendly website built in React JS, showcasing travel destinations, attractions, and guides for seamless trip planning.",
        link: "https://lambent-dragon-afed45.netlify.app/"
    },

    {
        img: portfolio1pro,
        title: "Portfolio Website",
        description: "Responsive Portfolio website using MERN stack.",
        link: "https://strong-yeot-d86110.netlify.app/"
    },


    {
        img: Ecommerspro,
        title: "Ecommerce Website",
        description: "Responsive E-Commerce using MERN stack.",
        link: "https://genuine-sprite-24683d.netlify.app/"
    },

    {
        img: portfolio2pro,
        title: "Portfolio Website",
        description: "Responsive Portfolio website using HTML, CSS, JS.",
        link: "https://papaya-otter-22c40f.netlify.app/"
    },

    {
        img: portfolio3pro,
        title: "Portfolio Website",
        description: "Responsive Portfolio website using MERN stack.",
        link: "https://effortless-stardust-cb2df4.netlify.app/"
    }
    // Add more projects here as needed
];

const Portfolio = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <section className='portfolio-section' id='portfolio'>
            <h1>Portfolio</h1>
            <p>Here are some projects I’ve worked on as a MERN stack developer.</p>

            <div className='card-container'>
                {visibleProjects.map((project, index) => (
                    <div className='flip-card' key={index}>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <img src={project.img} alt={project.title} />
                                <h3>{project.title}</h3>
                            </div>
                            <div className='flip-card-back'>
                                <p>{project.description}</p>
                                <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {projects.length > 6 && (
                <div className="view-all-button">
                    <button onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'View Less' : 'View All'}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
