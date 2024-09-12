import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDevice } from '../utils/DeviceContext'; // Ensure the context hook is correctly imported
import HoverPlayImage from "./projs/HoverPlayImage";

const ProjectCard = ({ id, proj, isHovered, handleMouseEnter, handleMouseLeave }) => {
    const isMobileDevice = useDevice(); // Using the context to determine if it's a mobile device

    return (
        <Link to={`/proj/${id}`}>
            <div 
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                className={`aspect-square overflow-hidden grayscale-1/4
                    ${isMobileDevice ? 'p-2' : 'border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] mr-2'}
                    ${isHovered ? '' : 'opacity-50'} transition-opacity duration-300
                    `}
            >
            <HoverPlayImage
                isHovered={isHovered}
                staticSrc={proj.images.static} // Path to your static image
                gifSrc={proj.images.gif} // Path to your GIF
                alt={proj.name}
                />
                <div className="flex items-center w-4/5 m-auto pl-5">  {/* Added pl-5 for padding left 20px */}
                    <p className="text-xs mr-5 mt--1">  {/* Added mr-5 for margin right 20px */}
                        {proj.name}
                    </p>
                    <img
                        src="/images/github-icon.png"
                        alt="github"
                        className="w-5 h-5 mb-1"  
                    />
                </div>
            </div>
        </Link>
    );
};

const RrojectsGrid = ({ projIds, projData }) => {
    const isMobileDevice = useDevice(); // Using the context to determine if it's a mobile device

    const [hoveredId, setHoveredId] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    return (
        <div className="w-9/10">
            <div className={`grid ${isMobileDevice ? 'grid-cols-1' : 'grid-cols-2'} mb-3`}>
                {projIds.slice(0, 2).map((id) => (
                    <ProjectCard
                        key={id}
                        id={id}
                        proj={projData[id]}
                        isHovered={hoveredId === null || hoveredId === id}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>
            <div className={`grid ${isMobileDevice ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {projIds.slice(2, 4).map((id) => (
                    <ProjectCard
                        key={id}
                        id={id}
                        proj={projData[id]}
                        isHovered={hoveredId === null || hoveredId === id}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>
        </div>
    );
};

export default RrojectsGrid;
