import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "A description of Project 1.",
            technologies: ["React", "Node.js"],
            link: "https://github.com/yourusername/project1",
        },
        {
            title: "Project 2",
            description: "A description of Project 2.",
            technologies: ["JavaScript", "CSS"],
            link: "https://github.com/yourusername/project2",
        },
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Technologies: {project.technologies.join(", ")}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            ))}
        </section>
    );
};

export default Projects;