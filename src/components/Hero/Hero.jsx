import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const heroVideos = [
    "/projects/slunkey/hero.mp4",
    "/projects/bezier curve/Bezier curve.mp4",
    "/projects/beziersurface/hero.mp4",
    "/projects/elastic/collision.mp4",
    "/projects/texturescroll/uv scroll ball.mp4",
    "/projects/croak/hero.mp4",
    "/projects/projectv1/hero.mp4",
    "/projects/hatrix/hero.mov"
];

function Hero() {
    const videoRef = useRef(null);

    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentVideo(
                (currentVideo + 1) % heroVideos.length
            );
        }, 10000);

        return () => clearTimeout(timer);
    }, [currentVideo]);

    useEffect(() => {
        if (!videoRef.current) return;

        videoRef.current.currentTime = 0;

        videoRef.current.play().catch(() => {});
    }, [currentVideo]);

    return (
        <section className="hero">

            <video
                ref={videoRef}
                className="hero-video"
                key={heroVideos[currentVideo]}
                autoPlay
                muted
                playsInline
            >
                <source
                    src={heroVideos[currentVideo]}
                />
            </video>

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <p className="hero-small">
                    👋 Hi, I'm
                </p>

                <h1>
                    Ram Manohar
                </h1>

                <h2>
                    Gameplay Programmer
                </h2>

                <p className="hero-description">
                    I build polished gameplay systems,
                    graphics programming projects,
                    and commercial games.
                </p>

                <div className="hero-buttons">

                    <a href="#commercial">
                        <button className="primary-btn">
                            View Projects
                        </button>
                    </a>

                    <a
                        href="/resume/Ram_Manohar_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="secondary-btn">
                            Resume
                        </button>
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Hero;