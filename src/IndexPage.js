import React from "react";
import RetroWindowWrapper from "./components/RetroWindowWrapper";
import PersonalProfile from "./components/PersonalProfile";
import ProjectsGrid from "./components/ProjectGrid";
import { recipeData } from "./data/data";
import { useDevice } from './utils/DeviceContext';

const IndexPage = () => {
  const recipeIds = Object.keys(recipeData);
  const isMobileDevice = useDevice();

  const profileSection = (
    <div className={`${isMobileDevice ? "w-full h-3/5" : "w-2/5 h-[90%]"} p-4 overflow-y-auto`}>
        <PersonalProfile id={1} />
    </div>
    );

    const gridSection = (
        <div className={`${isMobileDevice ? "w-full h-2/5" : "w-3/5 h-full"} p-4 overflow-y-auto`}>
            <ProjectsGrid recipeIds={recipeIds} recipeData={recipeData} />
        </div>
    );

    return (
        <RetroWindowWrapper activeTab="Index">
            <div className={`flex ${isMobileDevice ? "flex-col" : "flex-row"} overflow-hidden h-full`}>
                {profileSection}
                {gridSection}
            </div>
        </RetroWindowWrapper>
    );
};

export default IndexPage;
