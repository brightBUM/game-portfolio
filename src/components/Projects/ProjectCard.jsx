import { Link } from "react-router-dom";
import { useRef } from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
    const videoRef = useRef(null);

    const onEnter = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {});
        }
    };

    const onLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <Link
            to={`/project/${project.id}`}
            className="project-card"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <div className="project-media">
                <img src={project.image} alt={project.title} />

                {project.video && (
                    <video
                        ref={videoRef}
                        src={project.video}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    />
                )}
            </div>

            <div className="project-info">
                <span className="project-category">
                    {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-platforms">
                    {project.platforms.map((platform) => (
                        <span key={platform}>
                            {platform}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;