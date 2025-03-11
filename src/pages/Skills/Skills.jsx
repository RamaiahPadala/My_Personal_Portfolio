import React from 'react'

const Skills = () => {
    const skills = [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "CSS", level: 80 },
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <span>{skill.name}</span>
                        <div style={{ width: `${skill.level}%`, backgroundColor: "blue", height: "10px" }}></div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;