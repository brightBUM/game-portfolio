import { useEffect, useState } from "react";
import "./Navbar.css";
import assetPath from "../../utils/assetPath";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar ${
                scrolled ? "navbar-scrolled" : ""
            }`}
        >
            <a
                href={assetPath("/")}
                className="navbar-logo"
            >
                RM
            </a>

            <div className="navbar-links">
                <a href="#commercial">
                    Projects
                </a>

                <a href="#skills">
                    Skills
                </a>

                <a href="#contact">
                    Contact
                </a>

                <a
                    href={assetPath(
                        "/resume/Ram_Manohar_Resume.pdf"
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="navbar-resume"
                >
                    Resume
                </a>
            </div>
        </nav>
    );
}

export default Navbar;