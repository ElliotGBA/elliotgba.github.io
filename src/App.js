import React, { useRef } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Expertise from "./components/Expertise.js";
import Work from "./components/Work.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import CustomCursor from "./components/CustomCursor.js";
import BackgroundBeams from "./components/BackgroundBeams.tsx";

function App() {
    const homeRef = useRef(null);
    const expertiseRef = useRef(null);
    const workRef = useRef(null);
    const blogRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (section, offset = -100) => {
        if (section === homeRef) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (section.current) {
            const yOffset = section.current.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    };

    return (
        <>   
            <Navbar scrollToSection={scrollToSection} refs={{ homeRef, expertiseRef, workRef, blogRef, contactRef }} sticky="top" />
            <CustomCursor />
            <div className="relative min-h-screen overflow-x-hidden -top-40">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-zinc-900 -top-40"></div>
                <div className="relative z-20">
                    <BackgroundBeams className="absolute -top-[40em] left-[0vw] w-full h-full z-10 pointer-events-none" />
                    <div ref={homeRef}><Home scrollToSection={scrollToSection} expertiseRef={expertiseRef} /></div>
                    <div ref={expertiseRef}><Expertise /></div>
                    <div ref={workRef}><Work /></div>
                    <div ref={blogRef}><Blog /></div>
                    <div ref={contactRef}><Contact /></div>
                </div>
            </div>
            
        </>
    );
}

export default App;
