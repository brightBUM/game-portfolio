import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {

    return (

        <section className="projects">

            <h2>Featured Projects</h2>

            <div className="project-grid">

                {projects.map((project) => (

                    <Link
                        key={project.id}
                        to={`/project/${project.id}`}
                        className="project-card"
                    >

                        <div className="project-image">

                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            ) : (
                                <div className="placeholder-image">
                                    No Image
                                </div>
                            )}

                        </div>

                        <div className="project-content">

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="platforms">

                                {project.platforms.map((platform) => (

                                    <span key={platform}>
                                        {platform}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </Link>

                ))}

            </div>

        </section>

    );

}

export default Projects;