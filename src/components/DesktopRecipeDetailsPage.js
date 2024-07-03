import React from "react";
import { useParams } from "react-router-dom";
import RetroWindowWrapper from "./RetroWindowWrapper";
import { recipeData } from "../data/data";

const DesktopRecipeDetailsPage = () => {
  const { id } = useParams();
  const recipe = recipeData[id];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  console.log("desktop page");

  const DottedBox = ({
    children,
    className = "",
    title,
    subtitle,
    titleSize = "text-2xl",
    paddingTop = "pt-4",
  }) => (
    <div
      className={`relative border-4 border-dotted border-black ${className}`}
      style={{
        borderImageSlice: "16.5% 16.5%",
        borderImageRepeat: "round",
      }}
    >
      {title && (
        <div className="absolute top-0 left-0 w-full -mt-4 text-center">
          <span className="relative inline-block px-4 bg-white">
            <span className="relative z-10 whitespace-nowrap text-2xl font-bold">
              {title}
            </span>
            <span className="absolute inset-0 bg-white"></span>
          </span>
          {subtitle && <div className="mt-1 text-sm italic">{subtitle}</div>}
        </div>
      )}
      <div className={`${paddingTop} p-2`}>{children}</div>
    </div>
  );

  return (
    <RetroWindowWrapper activeTab="Index">
      {/* Main content */}
      <div className="p-4 flex space-x-4 overflow-y-auto h-[calc(100%-2rem)]">
        <DottedBox
          className="w-1/2"
          title={recipe.name}
          subtitle={recipe.scientificName}
          paddingTop="pt-14"
          titleSize="text-3xl"
        >
          <div className="mb-4 flex justify-center space-x-4">
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

          <div className="flex justify-center">
            <table className="text-sm">
              <tbody>
                {recipe.details.map(([label, value]) => (
                  <tr key={label}>
                    <td className="text-right pr-4">{label}</td>
                    <td className="text-left">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DottedBox>

        <div className="w-1/2 space-y-4">
          <DottedBox title="Identification">
            <p className="text-sm text-left">{recipe.identification}</p>
          </DottedBox>

          <DottedBox title="Batch Notes">
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

export default DesktopRecipeDetailsPage;
