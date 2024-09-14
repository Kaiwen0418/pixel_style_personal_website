import React from "react";
import { useParams } from "react-router-dom";
import { useDevice } from '../../utils/DeviceContext';
import { projData } from "../../data/data";
import DesktopProjDetailsPage from "./DesktopProjDetailsPage";
import MobileProjDetailsPage from "./MobileProjDetailsPage";
import ProjectsGrid from "../home_page/ProjectGrid";
import RetroWindowWrapper from "../RetroWindowWrapper";

const ProjDetailsPage = () => {
  const { id } = useParams();
  const isMobileDevice = useDevice();

  const proj = projData[id];

  const content = !proj ? 
  (
    <ProjectsGrid/>
  ) : (
    isMobileDevice ? (
      <MobileProjDetailsPage id={id} />
    ) : (
      <DesktopProjDetailsPage id={id} />
    )
  )

  return (
    <RetroWindowWrapper activeTab="Project">
      {content}
    </RetroWindowWrapper>
  )
};

export default ProjDetailsPage;
