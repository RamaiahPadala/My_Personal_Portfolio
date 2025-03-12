import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="header-container">
                <div className="image">
                    <img src="https://github.com/RamaiahPadala/portfolio/blob/main/images/user.jpeg?raw=true" className="profile-image" alt="Profile" />
                </div>
                <div className="matter">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Hi, I'm <strong>David Ramaiah</strong> ,<br /> a <strong>Fresher</strong> specializing in <strong>Full Stack Developer</strong>.</p>
                </div>
            </div>
        </>
    );
};

export default Home;
