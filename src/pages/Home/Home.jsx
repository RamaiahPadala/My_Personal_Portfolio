import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="header-container">
                <div className="image">
                    <img src="src/images/user.jpeg" className="profile-image" alt="Profile" />
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