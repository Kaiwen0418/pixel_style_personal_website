import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDevice } from '../../utils/DeviceContext'; // Ensure the context hook is correctly imported
import HoverPlayImage from "../HoverPlayImage";

const ProjectCard = ({ id, proj, curHovered, handleMouseEnter, handleMouseLeave }) => {
    const isMobileDevice = useDevice(); // Using the context to determine if it's a mobile device

    const isHovered = (curHovered === id)
    const otherHovered = (curHovered !== id && curHovered !== null)

    return (
        <Link to={`/project/${id}`}>
            <div className='relative h-[200px] w-[200px]'>
            <div 
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                className={`overflow-hidden grayscale-1/4 transition-opacity duration-300 bg-white
                    ${isMobileDevice ? '' : 'border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]'}
                    ${otherHovered ? 'opacity-50' : ''} 
                    ${isHovered ? 'h-[210px] w-[210px] z-10' : 'h-[200px] w-[200px]'}
                    `}
                    style={{
                        position: 'absolute'
                    }}
            >
                <img
                    className="w-4/5 h-4/5 object-cover m-auto"
                    src={isHovered ? proj.images.gif : proj.images.static} // Path to your static image
                    alt={proj.name}
                />
                <div className="flex items-center w-4/5 m-auto pl-2">  {/* Added pl-5 for padding left 20px */}
                    <p className="text-xs mr-1 mt--1">  {/* Added mr-5 for margin right 20px */}
                        {proj.name}
                    </p>
                    {!isMobileDevice &&
                    <img
                        src="/images/github-icon.png"
                        alt="github"
                        className="w-3 h-3 mb-1 float-right"  
                    />}
                </div>
            </div>
            </div>
        </Link>
    );
};

const RrojectsGrid = ({ projIds, projData }) => {
    const isMobileDevice = useDevice(); // Using the context to determine if it's a mobile device
    const initialHoveredId = projIds[0]; // Setting the initial hovered ID to the first project's ID

    // State for tracking which project ID is currently hovered
    const [hoveredId, setHoveredId] = useState(initialHoveredId);

    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    // This effect runs once on component mount and sets the hoveredId based on some conditions or external data
    useEffect(() => {
        // For example, set the hoveredId to '1' if it exists in the projIds array
        if (projIds.includes('1')) {
            setHoveredId('1');
        }
    }, []); // Empty dependency array ensures this runs only on mount

    return (
        <div className="w-9/10">
            <div className={`grid grid-cols-2 gap-3`}>
                {projIds.map((id) => (
                    <ProjectCard
                        key={id}
                        id={id}
                        proj={projData[id]}
                        curHovered={hoveredId}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>
        </div>
    );
};

export default RrojectsGrid;
