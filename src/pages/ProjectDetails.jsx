import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetails.css";

function isVideo(file) {
    return /\.(mp4|webm|ogg)$/i.test(file);
}

function ProjectDetails() {
    const { id } = useParams();

    const project = projects.find(
        (project) => project.id === id
    );

    const [selectedGalleryImage, setSelectedGalleryImage] =
        useState(null);

    const [selectedHighlight, setSelectedHighlight] =
        useState(null);

    // Which media is currently being shown in each technical card
    const [highlightMediaIndexes, setHighlightMediaIndexes] =
        useState({});

    const gallery = project?.gallery || [];
    const technicalHighlights =
        project?.technicalHighlights || [];

    /*
     * Automatically cycle through technical highlight media.
     *
     * Each highlight gets its own timer.
     *
     * One media:
     *   media[0] loops normally.
     *
     * Multiple media:
     *   media[0] -> media[1] -> media[2] -> media[0] ...
     */
    useEffect(() => {
        const timers = [];

        technicalHighlights.forEach(
            (highlight, highlightIndex) => {
                const media = highlight.media || [];

                if (media.length <= 1) {
                    return;
                }

                const timer = setInterval(() => {
                    setHighlightMediaIndexes(
                        (currentIndexes) => {
                            const currentIndex =
                                currentIndexes[
                                    highlightIndex
                                ] || 0;

                            return {
                                ...currentIndexes,
                                [highlightIndex]:
                                    (currentIndex + 1) %
                                    media.length
                            };
                        }
                    );
                }, 4000);

                timers.push(timer);
            }
        );

        return () => {
            timers.forEach((timer) =>
                clearInterval(timer)
            );
        };
    }, [technicalHighlights]);

    const closeGalleryViewer = () => {
        setSelectedGalleryImage(null);
    };

    const showPreviousGalleryImage = () => {
        setSelectedGalleryImage((currentIndex) => {
            if (currentIndex === null) return null;

            return (
                (currentIndex - 1 + gallery.length) %
                gallery.length
            );
        });
    };

    const showNextGalleryImage = () => {
        setSelectedGalleryImage((currentIndex) => {
            if (currentIndex === null) return null;

            return (
                (currentIndex + 1) %
                gallery.length
            );
        });
    };

    const openHighlightViewer = (
        highlightIndex,
        mediaIndex = 0
    ) => {
        setSelectedHighlight({
            highlightIndex,
            mediaIndex
        });
    };

    const closeHighlightViewer = () => {
        setSelectedHighlight(null);
    };

    const showPreviousHighlightMedia = () => {
        setSelectedHighlight((current) => {
            if (!current) return null;

            const media =
                technicalHighlights[
                    current.highlightIndex
                ].media;

            return {
                ...current,
                mediaIndex:
                    (current.mediaIndex - 1 + media.length) %
                    media.length
            };
        });
    };

    const showNextHighlightMedia = () => {
        setSelectedHighlight((current) => {
            if (!current) return null;

            const media =
                technicalHighlights[
                    current.highlightIndex
                ].media;

            return {
                ...current,
                mediaIndex:
                    (current.mediaIndex + 1) %
                    media.length
            };
        });
    };

    useEffect(() => {
        function handleKeyDown(event) {
            if (selectedGalleryImage !== null) {
                if (event.key === "Escape") {
                    closeGalleryViewer();
                }

                if (event.key === "ArrowLeft") {
                    showPreviousGalleryImage();
                }

                if (event.key === "ArrowRight") {
                    showNextGalleryImage();
                }

                return;
            }

            if (selectedHighlight !== null) {
                if (event.key === "Escape") {
                    closeHighlightViewer();
                }

                if (event.key === "ArrowLeft") {
                    showPreviousHighlightMedia();
                }

                if (event.key === "ArrowRight") {
                    showNextHighlightMedia();
                }
            }
        }

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [
        selectedGalleryImage,
        selectedHighlight,
        gallery.length
    ]);

    if (!project) {
        return (
            <div className="project-page">
                <h1>Project not found</h1>

                <Link to="/">
                    Back to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <div className="project-page">

            <Link
                to="/"
                className="back-button"
            >
                ← Back to Projects
            </Link>

            <div className="project-hero">

                {project.video ? (
                    <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                    />
                )}

            </div>

            <main className="project-container">

                <header className="project-header">

                    <p className="project-kicker">
                        {project.section}
                    </p>

                    <h1>{project.title}</h1>

                    <h2>{project.subtitle}</h2>

                    <div className="project-tags">

                        {project.engine && (
                            <span>
                                {project.engine}
                            </span>
                        )}

                        {project.platforms?.map(
                            (platform) => (
                                <span key={platform}>
                                    {platform}
                                </span>
                            )
                        )}

                    </div>

                </header>

                <div className="project-overview-grid">

                    <section className="project-section">

                        <h3>Overview</h3>

                        <p>
                            {project.details ||
                                project.description}
                        </p>

                    </section>

                    {project.contributions?.length > 0 && (
                        <section className="project-section">

                            <h3>
                                My Contributions
                            </h3>

                            <ul className="contribution-list">

                                {project.contributions.map(
                                    (contribution) => (
                                        <li
                                            key={
                                                contribution
                                            }
                                        >
                                            {contribution}
                                        </li>
                                    )
                                )}

                            </ul>

                        </section>
                    )}

                </div>

                {project.technologies?.length > 0 && (
                    <section className="project-section technologies-section">

                        <h3>
                            Technologies
                        </h3>

                        <div className="badge-list">

                            {project.technologies.map(
                                (technology) => (
                                    <span
                                        key={
                                            technology
                                        }
                                    >
                                        {technology}
                                    </span>
                                )
                            )}

                        </div>

                    </section>
                )}

                {gallery.length > 0 && (
                    <section className="project-section gallery-section">

                        <h3>Gallery</h3>

                        <div className="gallery">

                            {gallery.map(
                                (image, index) => (
                                    <button
                                        key={index}
                                        className="gallery-image-button"
                                        onClick={() =>
                                            setSelectedGalleryImage(
                                                index
                                            )
                                        }
                                    >
                                        <img
                                            src={image}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                        />
                                    </button>
                                )
                            )}

                        </div>

                    </section>
                )}

                {technicalHighlights.length > 0 && (
                    <section className="project-section technical-highlights-section">

                        <h3>
                            Technical Highlights
                        </h3>

                        <div className="technical-highlights-grid">

                            {technicalHighlights.map(
                                (
                                    highlight,
                                    highlightIndex
                                ) => {

                                    const media =
                                        highlight.media ||
                                        [];

                                    if (
                                        media.length ===
                                        0
                                    ) {
                                        return null;
                                    }

                                    const currentMediaIndex =
                                        highlightMediaIndexes[
                                            highlightIndex
                                        ] || 0;

                                    const currentMedia =
                                        media[
                                            currentMediaIndex
                                        ];

                                    return (
                                        <article
                                            key={
                                                highlightIndex
                                            }
                                            className="technical-highlight-card"
                                        >

                                            <button
                                                className="technical-highlight-media"
                                                onClick={() =>
                                                    openHighlightViewer(
                                                        highlightIndex,
                                                        currentMediaIndex
                                                    )
                                                }
                                                aria-label={`Preview ${highlight.title}`}
                                            >

                                                {isVideo(
                                                    currentMedia
                                                ) ? (
                                                    <video
                                                        key={
                                                            currentMedia
                                                        }
                                                        src={
                                                            currentMedia
                                                        }
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                    />
                                                ) : (
                                                    <img
                                                        key={
                                                            currentMedia
                                                        }
                                                        src={
                                                            currentMedia
                                                        }
                                                        alt={
                                                            highlight.title
                                                        }
                                                    />
                                                )}

                                                {media.length >
                                                    1 && (
                                                    <span className="technical-highlight-media-count">
                                                        {currentMediaIndex +
                                                            1}{" "}
                                                        /{" "}
                                                        {
                                                            media.length
                                                        }
                                                    </span>
                                                )}

                                            </button>

                                            <div className="technical-highlight-content">

                                                <h4>
                                                    {
                                                        highlight.title
                                                    }
                                                </h4>

                                                <p>
                                                    {
                                                        highlight.description
                                                    }
                                                </p>

                                            </div>

                                        </article>
                                    );
                                }
                            )}

                        </div>

                    </section>
                )}

                {project.links &&
                    Object.keys(
                        project.links
                    ).length > 0 && (
                        <section className="project-section links-section">

                            <h3>Links</h3>

                            <div className="project-links">

                                {Object.entries(
                                    project.links
                                ).map(
                                    ([name, url]) =>
                                        url && (
                                            <a
                                                key={name}
                                                href={url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {name}
                                            </a>
                                        )
                                )}

                            </div>

                        </section>
                    )}

            </main>

            {/* GALLERY VIEWER */}

            {selectedGalleryImage !== null && (
                <div
                    className="image-viewer"
                    onClick={
                        closeGalleryViewer
                    }
                >

                    <button
                        className="image-viewer-close"
                        onClick={
                            closeGalleryViewer
                        }
                    >
                        ×
                    </button>

                    <button
                        className="image-viewer-arrow image-viewer-left"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPreviousGalleryImage();
                        }}
                    >
                        ←
                    </button>

                    <img
                        className="image-viewer-image"
                        src={
                            gallery[
                                selectedGalleryImage
                            ]
                        }
                        alt={`${project.title} gallery ${selectedGalleryImage + 1}`}
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    />

                    <button
                        className="image-viewer-arrow image-viewer-right"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNextGalleryImage();
                        }}
                    >
                        →
                    </button>

                    <div className="image-viewer-counter">
                        {selectedGalleryImage + 1} /{" "}
                        {gallery.length}
                    </div>

                </div>
            )}

            {/* TECHNICAL HIGHLIGHT VIEWER */}

            {selectedHighlight !== null && (
                <div
                    className="image-viewer"
                    onClick={
                        closeHighlightViewer
                    }
                >

                    <button
                        className="image-viewer-close"
                        onClick={
                            closeHighlightViewer
                        }
                    >
                        ×
                    </button>

                    <button
                        className="image-viewer-arrow image-viewer-left"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPreviousHighlightMedia();
                        }}
                    >
                        ←
                    </button>

                    {(() => {
                        const media =
                            technicalHighlights[
                                selectedHighlight
                                    .highlightIndex
                            ].media;

                        const currentMedia =
                            media[
                                selectedHighlight
                                    .mediaIndex
                            ];

                        return isVideo(
                            currentMedia
                        ) ? (
                            <video
                                className="image-viewer-image"
                                src={currentMedia}
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                                onClick={(event) =>
                                    event.stopPropagation()
                                }
                            />
                        ) : (
                            <img
                                className="image-viewer-image"
                                src={currentMedia}
                                alt={
                                    technicalHighlights[
                                        selectedHighlight
                                            .highlightIndex
                                    ].title
                                }
                                onClick={(event) =>
                                    event.stopPropagation()
                                }
                            />
                        );
                    })()}

                    <button
                        className="image-viewer-arrow image-viewer-right"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNextHighlightMedia();
                        }}
                    >
                        →
                    </button>

                    <div className="image-viewer-counter">

                        {selectedHighlight.mediaIndex +
                            1}{" "}
                        /{" "}
                        {
                            technicalHighlights[
                                selectedHighlight
                                    .highlightIndex
                            ].media.length
                        }

                    </div>

                </div>
            )}

        </div>
    );
}

export default ProjectDetails;