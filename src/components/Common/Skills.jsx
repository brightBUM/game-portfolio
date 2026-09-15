import "./Skills.css";
import skills from "../../data/skills";

function Skills() {
    return (
        <section id="skills" className="skills">

            <div className="skills-header">
                <h2>Skills</h2>

                <p>
                    Tools and technologies I use to build games
                    and interactive experiences.
                </p>
            </div>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="skill-card"
                    >
                        <span>{skill}</span>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Skills;