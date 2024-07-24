import React, { useRef } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Expertise from "./components/Expertise.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import CustomCursor from "./components/CustomCursor.js";
import BackgroundBeams from "./components/BackgroundBeams.tsx";

function App() {
    const homeRef = useRef(null);
    const expertiseRef = useRef(null);
    const blogRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (section) => {
        if (section.current) {
            section.current.scrollIntoView({ behavior: 'smooth' });
            window.scrollBy(0, -100); 
        }
    };

    return (
        <>
            <CustomCursor />
            <div className="relative min-h-screen overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-zinc-900"></div>
                <BackgroundBeams className="absolute -top-[30em] left-[0vw] w-full h-full z-10 pointer-events-none" />
                <div className="relative z-20">
                    <Navbar scrollToSection={scrollToSection} refs={{ homeRef, expertiseRef, blogRef, contactRef }} />
                    <div ref={homeRef}><Home scrollToSection={scrollToSection} expertiseRef={expertiseRef} /></div>
                    <div ref={expertiseRef}><Expertise /></div>
                    <div ref={blogRef}><Blog /></div>
                    <div ref={contactRef}><Contact /></div>
                </div>
            </div>
        </>
    );
}

export default App;
