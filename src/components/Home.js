import React from "react";
import "../css/Home.css";
import { ReactTyped } from "react-typed";
import { renderToStaticMarkup } from "react-dom/server";

const Home = ({ scrollToSection, expertiseRef }) => {
    const cursorCharacter = renderToStaticMarkup(<span className="text-violet-600 relative bottom-2">_</span>);
    const whiteDot = renderToStaticMarkup(<span className="text-white">.</span>)

    const Arrow = <div className="flex justify-center mt-[10vh]" onClick={() => scrollToSection(expertiseRef)}>
        <svg
            id="svg"
            width="60"
            height="100"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-svg hover:cursor-pointer"
        >
            <rect
                x="5"
                y="-5"
                width="50"
                height="60"
                rx="10"
                stroke="#a78bfa"
                strokeWidth="4"
                fill="none" />
            <path
                d="M30 15 V35 M30 35 L25 30 M30 35 L35 30"
                stroke="#a78bfa"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    </div>;

    const Text = <>
        <div className="text-violet-400 mb-[80px] mt-20">Hello, I'm {" "}
            <ReactTyped className="font-mono font-semibold"
                strings={[`Elliot${whiteDot}`]} typeSpeed={100} backSpeed={50} backDelay={3000} cursorChar={cursorCharacter} loop />
        </div>
        <span className="text-xl">
            I'm a web and software developer from Canada where I currently attend Dalhousie University.
            If I'm not programming or working on homework I'm more than likely snowboarding, reading or gaming. 
        </span><br/><br/>
        <span className="text-xl">
            I have a diverse set of skills in web development and experience developing desktop applications.
            If you think we would work well together let's get in touch!
        </span>
    </>

    return (
        <>
            <div className="relative z-10 h-[40rem] flex justify-center items-center px-4 mt-[32vh]">
                <div className="text-4xl font-normal text-neutral-300 text-center mx-[25vw] leading-none mb-[20vh]">
                    {Text}
                    {Arrow}
                </div>
            </div>
        </>
    );
};

export default Home;
