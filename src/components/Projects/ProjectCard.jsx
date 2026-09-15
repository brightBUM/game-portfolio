import { Link } from "react-router-dom";
import { useRef } from "react";
import "./ProjectCard.css";
import assetPath from "../../utils/assetPath";

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

    const saveScrollPosition = () => {
        sessionStorage.setItem(
            "portfolioScrollPosition",
            window.scrollY.toString()
        );
    };

    return (
        <Link
            to={`/project/${project.id}`}
            className="project-card"
            onClick={saveScrollPosition}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <div className="project-media">
                <img
                    src={assetPath(project.image)}
                    alt={project.title}
                />

                {project.video && (
                    <video
                        ref={videoRef}
                        src={assetPath(project.video)}
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