import React from "react";
import { recipeData } from "../data/data";
import DottedBox from "./DottedBox";

const PersonalProfile = ({ id }) => {
    const recipe = recipeData[id];

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
                <DottedBox
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
    );
};

export default PersonalProfile;
