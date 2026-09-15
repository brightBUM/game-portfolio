import "./Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact">

            <div className="contact-content">

                <p className="contact-kicker">
                    GET IN TOUCH
                </p>

                <h2>
                    Let's Build Something
                </h2>

                <p className="contact-description">
                    I'm open to game programming opportunities,
                    collaborations, and interesting projects.
                </p>

                <div className="contact-links">

                    <a
                        href="mailto:chinkeys.ram@gmail.com"
                        className="contact-button contact-primary"
                    >
                        Email Me
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ram-manohar-532963179"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-button"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/brightBUM"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-button"
                    >
                        GitHub
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Contact;