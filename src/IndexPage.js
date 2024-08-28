import React from "react";
import { Link } from "react-router-dom";
import RetroWindowWrapper from "./components/RetroWindowWrapper";
import PersonalProfile from "./components/PersonalProfile";
import { recipeData } from "./data/data";

// Reusable Recipe Card Component
const RecipeCard = ({ id, recipe }) => (
    <Link to={`/recipe/${id}`}>
        <div className="aspect-square overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <img
                src={recipe.images.color}
                alt={recipe.name}
                className="w-full h-full object-cover"
            />
        </div>
    </Link>
);

const IndexPage = () => {
  const recipeIds = Object.keys(recipeData);
  return (
      <RetroWindowWrapper activeTab="Index">
          <div className="p-4 flex space-x-4 overflow-y-auto h-[calc(100%-2rem)]">
              <div className="p-4 flex space-x-4 overflow-y-auto h-[calc(100%-2rem)]">
                  <PersonalProfile></PersonalProfile>
              </div>
              <div className="p-4 flex space-x-4 overflow-y-auto h-[calc(100%-2rem)]">
                  <div className="grid grid-cols-2 gap-2 mb-2">
                      {recipeIds.slice(0, 2).map((id) => (
                          <RecipeCard key={id} id={id} recipe={recipeData[id]}/>
                      ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                      {recipeIds.slice(2, 4).map((id) => ( // Corrected the slicing to 2, 4 to fetch the next two recipes
                          <RecipeCard key={id} id={id} recipe={recipeData[id]}/>
                      ))}
                  </div>
              </div>
          </div>
      </RetroWindowWrapper>
  );
};

export default IndexPage;
