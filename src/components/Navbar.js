import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const links = ["home", "work", "blog", "contact"];

const Navbar = () => {
    return (
        <div id="navbarContainer" className="flex font-mono">
            <CreateTitle />
            <CreateNavbarLinks />
        </div>
    )
}

const CreateTitle = () => {
    return (
        <div id="titleContainer" 
            className="text-3xl font-bold p-7 flex 
            hover:opacity-80 hover:cursor-pointer">
                <div id="title"
                    className="text-violet-400 hover:text-violet-500
                    ease-in-out duration-200">
                        ElliotGBA
                </div>
                <div id="period"
                    className="text-white">
                        .
                </div>
                <div id="underscore"
                    className="text-violet-600 hover:text-violet-700 relative bottom-2">
                        _
                </div>
            </div>
    );
}

const CreateNavbarLinks = () => {
    return (
        <div id="linksContainer" className="flex">
            {links.map((x, index) => (
                <Link to={x} key={index} className="">
                    <div id="index" className="text-right">{"0"+(index+1)}</div>
                    <div>{x}</div>
                </Link>
            ))}
        </div>    
    );
}

export default Navbar
