import { useEffect, useRef, useState } from "react";
import "./Hero.css";
import assetPath from "../../utils/assetPath";

const heroVideos = [
    "/projects/hatrix/hatrix showcase.mp4",
    "/projects/shaolin/Shaolin vs Wutang 2.mp4",
    "/projects/cooking/baby hazel showcase.mp4",
    "/projects/bezier curve/Bezier curve.mp4",
    "/projects/dracosnake/DracoSnakeWebGl_Gameplay_30s-compressed.mp4",
    "/projects/slunkey/hero.mp4",
    "/projects/beziersurface/hero.mp4",
    "/projects/croak/hero.mp4",
    "/projects/elastic/collision.mp4",
    "/projects/texturescroll/uv scroll ball.mp4",
    "/projects/Island Crash/IslandCrash_2.mp4"
];

const nameText = "Ram Manohar";
const roleText = "Game Programmer | Unity Developer";
const descriptionText =
    "I build polished gameplay systems, graphics programming projects, and commercial games.";

function Hero() {
    const videoRef = useRef(null);

    const [currentVideo, setCurrentVideo] = useState(0);
    const [showName, setShowName] = useState(false);
    const [showRole, setShowRole] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

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

    useEffect(() => {
        const nameTimer = setTimeout(() => {
            setShowName(true);
        }, 300);

        const roleTimer = setTimeout(() => {
            setShowRole(true);
        }, 1000);

        const descriptionTimer = setTimeout(() => {
            setShowDescription(true);
        }, 1900);

        return () => {
            clearTimeout(nameTimer);
            clearTimeout(roleTimer);
            clearTimeout(descriptionTimer);
        };
    }, []);

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
                    src={assetPath(heroVideos[currentVideo])}
                />
            </video>

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <h1 className="hero-name">
                    {showName &&
                        nameText.split("").map((char, index) => (
                            <span
                                key={index}
                                className="type-letter"
                                style={{
                                    "--letter-index": index
                                }}
                            >
                                {char === " "
                                    ? "\u00A0"
                                    : char}
                            </span>
                        ))}
                </h1>

                <div className="hero-role">
                    {showRole &&
                        roleText.split("").map((char, index) => (
                            <span
                                key={index}
                                className="role-letter"
                                style={{
                                    "--letter-index": index
                                }}
                            >
                                {char === " "
                                    ? "\u00A0"
                                    : char}
                            </span>
                        ))}
                </div>

                <p className="hero-description">
                    {showDescription &&
                        descriptionText
                            .split(" ")
                            .map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className="description-word"
                                >
                                    {word.split("").map(
                                        (char, charIndex) => {
                                            const letterIndex =
                                                descriptionText
                                                    .split("")
                                                    .slice(
                                                        0,
                                                        descriptionText
                                                            .split(" ")
                                                            .slice(
                                                                0,
                                                                wordIndex
                                                            )
                                                            .join(" ")
                                                            .length
                                                    ).length +
                                                wordIndex +
                                                charIndex;

                                            return (
                                                <span
                                                    key={charIndex}
                                                    className="description-letter"
                                                    style={{
                                                        "--letter-index":
                                                            letterIndex
                                                    }}
                                                >
                                                    {char}
                                                </span>
                                            );
                                        }
                                    )}
                                </span>
                            ))}
                </p>

            </div>
        </section>
    );
}

export default Hero;