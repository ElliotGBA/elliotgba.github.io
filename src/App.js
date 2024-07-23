import React, { useRef } from "react";

import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Expertise from "./components/Expertise.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import CustomCursor from "./components/CustomCursor.js";

function App() {

    const homeRef = useRef(null);
    const expertiseRef = useRef(null);
    const blogRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (section) => {
        section.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <CustomCursor />
            <div className="bg-gradient-to-b from-slate-900 to-zinc-900">
                <Navbar scrollToSection={scrollToSection} refs={{ homeRef, expertiseRef, blogRef, contactRef }} />
                <div ref={homeRef}><Home /></div>
                <div ref={expertiseRef}><Expertise /></div>
                <div ref={blogRef}><Blog /></div>
                <div ref={contactRef}><Contact /></div>
            </div>
        </>
        
    );
}

export default App;