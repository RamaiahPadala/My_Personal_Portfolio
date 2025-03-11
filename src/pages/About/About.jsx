import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>
                            Highly motivated and detail-oriented final year B.Tech CSM student 
                            with a strong foundation in computer science principles, algorithms, 
                            and data structures. Proficient in programming languages 
                            such as Java, Python, and C. Skilled in problem-solving and analytical 
                            thinking. Actively seeking opportunities for professional growth and 
                            hands-on experience in the field of computer science and engineering.
                        </p>
                        <div className="tab-titles">
                            <p 
                                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} 
                                onClick={() => openTab('experience')}
                            >
                                Work
                            </p>
                            <p 
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} 
                                onClick={() => openTab('education')}
                            >
                                Education
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li><span>Programming languages</span><br />C, Java, Python</li>
                                <li><span>Databases</span><br />MySQL</li>
                                <li><span>Web Development Languages</span><br />HTML, JavaScript, CSS</li>
                                <li><span>Operating Systems</span><br />Windows, GNU/Linux</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li><span>Feb-2023 - June-2023</span><br />DevOps Intern at Advaita Global - IT Labs Pvt.Ltd</li>
                                <li><span>Feb-2022 - July-2022</span><br />Customer Support Engineer (Intern) at Efftronics Systems Pvt.Ltd</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li><span>2022 - Current</span><br /><span>B.Tech</span> - Computer Science & Engineering (Artificial Intelligence & Machine Learning)<br />NRI Institute Of Technology</li>
                                <li><span>2019 - 2022</span><br /><span>Diploma</span> - Electronics & Communication Engineering<br />Usha Rama College Of Eng & Tech</li>
                                <li><span>2019</span><br /><span>SSC</span> - Vidwaan High School</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;