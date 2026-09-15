import Navbar from "../components/Common/Navbar";
import Hero from "../components/Hero/Hero";
import ProjectSection from "../components/Projects/ProjectSection";
import Skills from "../components/Common/Skills";
import Contact from "../components/Common/Contact";
import Footer from "../components/Common/Footer";

function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <ProjectSection
                    title="Commercial Games"
                    subtitle="Games I've worked on professionally."
                    section="commercial"
                />

                <ProjectSection
                    title="Unity Projects"
                    subtitle="Personal projects exploring gameplay systems and Unity development."
                    section="unity"
                />

                <ProjectSection
                    title="Graphics Programming"
                    subtitle="Graphics and rendering projects built with OpenGL and GLSL."
                    section="opengl"
                />

                <ProjectSection
                    title="Game Jams"
                    subtitle="Rapid prototypes and experimental games built during game jams."
                    section="gamejam"
                />

                <Skills />

                <Contact />

            </main>

            <Footer />
        </>
    );
}

export default Home;