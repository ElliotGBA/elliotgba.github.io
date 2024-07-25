import React from "react";
import "../css/App.css";

const links = ["home", "expertise", "blog", "contact"];

const Navbar = ({ scrollToSection, refs }) => {
    const handleLinkClick = (section) => {
        const offset = section === 'home' ? 0 : -100;
        scrollToSection(refs[`${section}Ref`], offset);
    };

    return (
        <div id="navbarContainer" className="font-mono p-10 flex justify-center bg-opacity-80 bg-slate-800 z-50">
            <CreateTitle />
            <CreateNavbarLinks handleLinkClick={handleLinkClick} />
        </div>
    );
};

const CreateTitle = () => {
    return (
        <div id="titleContainer" className="text-3xl font-bold flex absolute left-10 hover:opacity-80 hover:cursor-default">
            <div id="title" className="text-violet-400 hover:text-violet-500 ease-in-out duration-200">
                ElliotGBA
            </div>
            <div id="period" className="text-white">.</div>
            <div id="underscore" className="text-violet-600 hover:text-violet-700 relative bottom-1">_</div>
        </div>
    );
};

const CreateNavbarLinks = ({ handleLinkClick }) => {
    return (
        <div id="linksContainer" className="flex relative bottom-1">
            {links.map((x, index) => (
                <div
                    key={index}
                    onClick={() => handleLinkClick(x)}
                    className="text-white mr-8 hover:opacity-70 ease-in-out duration-200 cursor-pointer"
                >
                    <div id="index" className="text-right text-xs">{"0" + (index + 1)}</div>
                    <div className="text-base">// {x}</div>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
