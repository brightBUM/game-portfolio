import Navbar from "../components/common/Navbar";
import Hero from "../components/Hero/Hero";

import ProjectSection from "../components/Projects/ProjectSection";

import Skills from "../components/common/Skills";
import Contact from "../components/common/Contact";
import Footer from "../components/common/Footer";

function Home() {

    return (

        <>

            <Navbar />

            <Hero />

            <ProjectSection
                title="Commercial Games"
                subtitle="Games I've contributed to that have been released on Xbox, Android and iOS."
                section="commercial"
            />

            <ProjectSection
                title="Unity Projects"
                subtitle="Gameplay systems, prototypes and technical experiments."
                section="unity"
            />

            <ProjectSection
                title="OpenGL Projects"
                subtitle="Rendering, physics and graphics programming experiments."
                section="opengl"
            />

            <ProjectSection
                title="Game Jams"
                subtitle="Rapid prototypes created during game jams."
                section="gamejam"
            />

            <Skills />

            <Contact />

            <Footer />

        </>

    );

}

export default Home;