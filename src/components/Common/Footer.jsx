import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-info">
                    <span className="footer-name">
                        Ram Manohar
                    </span>

                    <span className="footer-role">
                        Game Programmer | Unity Developer
                    </span>
                </div>

                <div className="footer-links">

                    <a
                        href="https://github.com/brightBUM"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ram-manohar-532963179"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:chinkeys.ram@gmail.com"
                    >
                        Email
                    </a>

                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Ram Manohar. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer;