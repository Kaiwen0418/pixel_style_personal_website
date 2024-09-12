import React from "react";
import { Link } from "react-router-dom";
import { useDevice } from '../utils/DeviceContext'; // Ensure the context hook is correctly imported

const ProjectCard = ({ id, recipe }) => {
    const isMobileDevice = useDevice(); // Using the context to determine if it's a mobile device

    return (
        <Link to={`/recipe/${id}`}>
            <div className={`aspect-square overflow-hidden ${isMobileDevice ? 'p-2' : 'border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]'}`}>
                <img
                    src={recipe.images.color}
                    alt={recipe.name}
                    className="w-4/5 h-4/5 object-cover m-auto" // Centered using margin auto
                />
                <div className="flex justify-center w-4/5 m-auto">
                    <p className="m-auto text-sm">{recipe.name}</p>
                </div>
            </div>
        </Link>
    );
};

const RecipesGrid = ({ recipeIds, recipeData }) => {
    const isMobileDevice = useDevice(); // Using the context to determine if it's a mobile device

    return (
        <div className="w-9/10">
            <div className={`grid ${isMobileDevice ? 'grid-cols-1' : 'grid-cols-2'} mb-4 gap-120`}>
                {recipeIds.slice(0, 2).map((id) => (
                    <ProjectCard key={id} id={id} recipe={recipeData[id]} />
                ))}
            </div>
            <div className={`grid ${isMobileDevice ? 'grid-cols-1' : 'grid-cols-2'}`}> 
                {recipeIds.slice(2, 4).map((id) => (
                    <ProjectCard key={id} id={id} recipe={recipeData[id]} />
                ))}
            </div>
        </div>
    );
};

export default RecipesGrid;
