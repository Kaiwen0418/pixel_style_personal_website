import React from "react";
import { Link } from "react-router-dom";
import { useDevice } from '../utils/DeviceContext'; // Ensure the context hook is correctly imported



// Adjusting the grid layout based on device type
const ProjectsGrid = ({ recipeIds, recipeData }) => {
    const isMobileDevice = useDevice(); // Using the context to determine if it's a mobile device

    const ProjectCard = ({ id, recipe }) => (
        <Link to={`/recipe/${id}`}>
            <div className={`aspect-square overflow-hidden ${isMobileDevice ? '' : 'border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]'}`}>
                <img
                    src={recipe.images.color}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                />
            </div>
        </Link>
    );

    return (
        <>
            <div className={`grid ${isMobileDevice ? 'grid-cols-1' : 'grid-cols-2'} gap-2 mb-4`}>
                {recipeIds.slice(0, 2).map((id) => (
                    <ProjectCard key={id} id={id} recipe={recipeData[id]} />
                ))}
            </div>
            <div className={`grid ${isMobileDevice ? 'grid-cols-1' : 'grid-cols-2'} gap-2`}>
                {recipeIds.slice(2, 4).map((id) => (
                    <ProjectCard key={id} id={id} recipe={recipeData[id]} />
                ))}
            </div>
        </>
    );
};

export default ProjectsGrid;
