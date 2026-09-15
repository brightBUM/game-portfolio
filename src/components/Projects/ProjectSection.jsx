import "./ProjectSection.css";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectSection({
    title,
    subtitle,
    section
}) {

    const filteredProjects = projects.filter(
        project => project.section === section
    );

    if (filteredProjects.length === 0)
        return null;

    return (

        <section
            id={section}
            className="projects"
        >

            <div className="section-header">

                <h2>
                    {title}
                </h2>

                <p>
                    {subtitle}
                </p>

            </div>

            <div className="project-grid">

                {filteredProjects.map(project => (

                    <ProjectCard
                        key={project.id}
                        project={project}
                    />

                ))}

            </div>

        </section>

    );

}

export default ProjectSection;