import React from "react";
import { useParams } from "react-router-dom";
import { recipeData } from "../data/data";

const MobileRecipeDetailsPage = () => {
  const { id } = useParams();
  const recipe = recipeData[id];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  console.log("mobile page");

  const DottedBox = ({
    children,
    className = "",
    title,
    subtitle,
    titleSize = "text-xl",
  }) => (
    <div
      className={`relative border-4 border-dotted border-black mb-4 ${className}`}
      style={{
        borderImageSlice: "16.5% 16.5%",
        borderImageRepeat: "round",
      }}
    >
      {title && (
        <div className="absolute top-0 left-0 w-full -mt-3 text-center">
          <span className="relative inline-block px-2 bg-white">
            <span
              className={`relative z-10 whitespace-nowrap ${titleSize} font-bold`}
            >
              {title}
            </span>
            <span className="absolute inset-0 bg-white"></span>
          </span>
          {subtitle && (
            <div className="mt-1 text-xs italic text-left pl-2">{subtitle}</div>
          )}
        </div>
      )}
      <div className="pt-6 p-2">{children}</div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen p-4 font-mono">
      <h1 className="text-2xl font-bold mb-4 text-center">{recipe.name}</h1>
      <p className="text-sm italic mb-4 text-center">{recipe.scientificName}</p>

      <div className="space-y-4">
        <DottedBox title="Images">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-xs h-64 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={recipe.images.plant}
                alt={`${recipe.name} plant`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full max-w-xs h-64 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={recipe.images.color}
                alt={`${recipe.name} color`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </DottedBox>

        <DottedBox title="Details">
          <table className="w-full text-sm">
            <tbody>
              {recipe.details.map(([label, value]) => (
                <tr key={label}>
                  <td className="text-right pr-4 font-bold">{label}</td>
                  <td className="text-left">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DottedBox>

        <DottedBox title="Identification">
          <p className="text-sm">{recipe.identification}</p>
        </DottedBox>

        <DottedBox title="Batch Notes">
          <p className="text-sm">{recipe.batchNotes}</p>
        </DottedBox>

        <div className="flex flex-col space-y-2">
          <button className="w-full border-2 border-black px-2 py-1 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            I've Dyed It!
          </button>
          <button className="w-full border-2 border-black px-2 py-1 text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            Share Your Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileRecipeDetailsPage;
