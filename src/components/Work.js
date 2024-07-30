import React from 'react';

import battleshipImage from "../resources/BattleshipScreenshot.png";

const Work = () => {
    return (
        <div className="mt-[23em]">
            <div className="text-white text-center text-4xl font-sans mb-8 relative z-10">My Work</div>
            <div className="flex">
                {workData.map((work) => (
                    <WorkItem key={work.id} {...work} />
                ))}
            </div>
        </div>
    );
}

const WorkItem = ({ id, title, date, description, image, alt }) => {
    return (
        <div key={id} className="flex flex-wrap flex-col border-white rounded-[1em]">
            <img src={image} alt={alt} className="rounded-[1em]" />
            <div className="font-mono text-white text-3xl font-bold">{title}</div>
            <div>{date}</div>
            <div>{description}</div>
        </div>
    );
}

const workData = [
    {
        id: 1,
        title: "Battleship",
        date: "08/07/2002",
        description: "Written in Java using blood, sweat, and tears",
        image: battleshipImage,
        alt: "Battleship Alt Image"
    }
];

export default Work;
