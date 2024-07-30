import React from "react";
import CodeBackground from "./CodeBackground.js";
import useIntersectionObserver from "./UseIntersectionObserver.js";
import { motion } from "framer-motion";

import "../css/App.css";

import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbMug } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

const Expertise = () => {
    return (
        <div className="relative mt-[10vh]">
            <div className="scroll-padding-top pt-20"></div>
            <CodeBackground className="relative text-center" />
            <div className="text-white text-center text-4xl font-sans mb-8 relative z-10">My Expertise</div>
            <div
                id="workContainer"
                className="text-center mx-[10vw] flex flex-wrap justify-center gap-4 relative z-10"
            >
                {expertiseData.map((expertise) => (
                    <WorkContainer key={expertise.id} {...expertise} className={expertise.className} />
                ))}
            </div>
        </div>
    );
};

const expertiseData = [
    {
        id: "software",
        icon: <HiOutlineComputerDesktop className="text-[4em]" />,
        title: "Software",
        subtitle: "Development",
        color: "#b91c1c",
        description: (
            <>
                Experience writing complex Object-Oriented and Functional applications in
                <span className="text-red-500"> Java</span>,
                <span className="text-red-500"> Javascript</span>,
                <span className="text-red-500"> Lua</span> and
                <span className="text-red-500"> C#</span>.
            </>
        ),
    },
    {
        id: "frontend",
        icon: <FaReact className="text-[4em]" />,
        title: "Frontend Dev",
        subtitle: "React, Native",
        color: "#047857",
        description: (
            <>
                Passionate about <span className="text-emerald-500">UI/UX</span> with experience
                developing in <span className="text-emerald-500">HTML</span>,{" "}
                <span className="text-emerald-500">CSS</span>, <span className="text-emerald-500">JS</span>,
                <span className="text-emerald-500"> React</span> and{" "}
                <span className="text-emerald-500">React Native</span> frameworks.
            </>
        ),
    },
    {
        id: "game",
        icon: <IoGameControllerOutline className="text-[4em]" />,
        title: "Game",
        subtitle: "Development",
        color: "#7e22ce",
        description: (
            <>
                Experience developing games both personally and for jams in{" "}
                <span className="text-purple-500">Unity</span>,{" "}
                <span className="text-purple-500">Pico8</span> and{" "}
                <span className="text-purple-500">Godot</span>.
            </>
        ),
    },
    {
        id: "hidden",
        icon: <TbMug className="text-[4em]" />,
        title: "Want to see",
        subtitle: `my Work? `,
        color: "#0369a1",
        description: (
            <>
                If more of us valued
                <span className="text-sky-500"> food </span>
                and <span className="text-sky-500">cheer</span> and
                <span className="text-sky-500"> song</span> above gold it would be a merrier world.
                <div>
                    <br/>
                    <span className="text-sky-500 text-right">~ J.R.R. Tolkein</span>
                </div>
            </>
        ),
        className: "block custom:hidden border-none",
    },
];

const WorkContainer = ({ id, icon, title, subtitle, color, description, className }) => {
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.6,
    });

    return (
        <motion.div
            ref={ref}
            className={`p-[3%] text-white relative ${id !== "hidden" ? "border-2 border-white" : "border-none"}
            -mx-2 -my-2 ${className} min-w-[400px] max-w-[430px] max-h-[320px] min-h-[320px]}
            ${id === "hidden" ? 'hidden-expertise' : ''} ${isVisible ? 'visible' : ''}`}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
            <div className="flex items-center mb-2">
                <motion.div className="mr-3" whileHover={{ scale: 1.2 }}
                    onHoverStart={ e => {} } onHoverEnd={ e => {} }>{icon}</motion.div>
                <span className="text-3xl font-medium text-left relative">
                    <div className="relative inline-block">
                        <span className="relative z-10">{title}</span>
                        <span
                            className="absolute top-6 left-0 w-full h-[0.4em] z-0"
                            style={{ backgroundColor: color, bottom: '0.2em' }}
                        ></span>
                    </div>
                    <div>{subtitle}</div>
                </span>
            </div>
            <div className="font-mono">
                <div className="text-gray-400 text-left">&lt;h3&gt;</div>
                <div className="text-left border-l-2 pl-8 border-gray-400 ml-5">
                    {description}
                </div>
                <div className="text-gray-400 text-left">&lt;/h3&gt;</div>
            </div>
        </motion.div>
    );
};

export default Expertise;
