import React from 'react';
import './Portfolio.css';
import crmpro from '../assets/crm.jpeg'
import moviepro from '../assets/movie.png'
import hotelpro from '../assets/hotel.png'
import iphonepro from '../assets/iphone.png'
import genderpro from '../assets/gender.png'
import foodpro from '../assets/food.png'

const Portfolio = () => {
    return (
        <section className='portfolio-section'>
            <h1>Portfolio</h1>
            <p>Here are some projects I’ve worked on as a MERN stack developer.</p>

            <div className='card-container'>
                {/* Card 1 */}
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={crmpro} alt="CRM System" />
                            <h3>CRM System</h3>
                        </div>
                        <div className='flip-card-back'>
                            <p>A customer management tool built with React and MongoDB.</p>
                            <a href="https://jaikrishna-crm.netlify.app/">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={moviepro} alt="Movie Booking" />
                            <h3>Movie Booking</h3>
                        </div>
                        <div className='flip-card-back'>
                            <p>Online movie booking site with seat selection and payment UI.</p>
                            <a href="https://moviebookingwebsite.netlify.app/">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={hotelpro} alt="Hotel Booking" />
                            <h3>Hotel Booking</h3>
                        </div>
                        <div className='flip-card-back'>
                            <p>Responsive hotel booking platform using MERN stack.</p>
                            <a href="https://jaikrishna-hotelwebsite.netlify.app/">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={iphonepro} alt="Hotel Booking" />
                            <h3>Iphone Website Clone</h3>
                        </div>
                        <div className='flip-card-back'>
                            <p>Responsive Iphone Website Clone using React js, Css</p>
                            <a href="https://effervescent-semolina-ff54e8.netlify.app/">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={genderpro} alt="Hotel Booking" />
                            <h3>SDG 17 goals - Gender Equality</h3>
                        </div>
                        <div className='flip-card-back'>
                            <p>Responsive SDG 17 goals - Gender Equality using Html, Css, js, Bootstrap.</p>
                            <a href="https://jaikrishnamilestonetask.netlify.app/">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Card 6 */}
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={foodpro} alt="Hotel Booking" />
                            <h3>Food Delivery website</h3>
                        </div>
                        <div className='flip-card-back'>
                            <p>Responsive Food Delivery website using MERN stack.</p>
                            <a href="https://fooddeliversite.netlify.app/">View Project</a>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Portfolio;
