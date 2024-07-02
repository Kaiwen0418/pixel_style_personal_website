import React from "react";
import { useParams } from "react-router-dom";
import RetroWindowWrapper from "./RetroWindowWrapper";
import { recipeData } from "../data/data";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const recipe = recipeData[id];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const DottedBox = ({ children, className = "" }) => (
    <div
      className={`border-4 border-dotted border-black p-4 ${className}`}
      style={{
        borderImageSlice: "33% 33%",
        borderImageRepeat: "round",
      }}
    >
      {children}
    </div>
  );

  return (
    <RetroWindowWrapper activeTab="Index">
      {/* Main content */}
      <div className="p-4 flex space-x-4 overflow-y-auto h-[calc(100%-2rem)]">
        <DottedBox className="w-1/2">
          <h2 className="text-2xl mb-2 text-left">{recipe.name}</h2>
          <p className="text-sm italic mb-4 text-left">
            {recipe.scientificName}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="w-36 h-36 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={recipe.images.plant}
                alt={`${recipe.name} plant`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-36 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={recipe.images.color}
                alt={`${recipe.name} color`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <table className="w-full text-sm">
            <tbody>
              {recipe.details.map(([label, value]) => (
                <tr key={label}>
                  <td className="text-right pr-2">{label}</td>
                  <td className="text-left">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DottedBox>

        <div className="w-1/2 space-y-4">
          <DottedBox>
            <h3 className="text-lg mb-2 text-left">Identification</h3>
            <p className="text-sm text-left">{recipe.identification}</p>
          </DottedBox>

          <DottedBox>
            <h3 className="text-lg mb-2 text-left">Batch Notes</h3>
            <p className="text-sm text-left">{recipe.batchNotes}</p>
          </DottedBox>

          <div className="flex space-x-4">
            <button className="border-2 border-black px-2 py-1 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              I've Dyed It!
            </button>
            <button className="border-2 border-black px-2 py-1 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              Share Your Results
            </button>
          </div>
        </div>
      </div>

      {/* Scrollbar */}
      <div className="absolute right-0 top-8 bottom-0 w-4 bg-gray-200 border-l-2 border-black">
        <div className="w-full h-8 bg-gray-400 border-2 border-black"></div>
      </div>
    </RetroWindowWrapper>
  );
};

export default RecipeDetailsPage;
