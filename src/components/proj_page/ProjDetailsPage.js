import React from "react";
import { useParams } from "react-router-dom";
import { useDevice } from '../../utils/DeviceContext';
import DesktopProjDetailsPage from "./DesktopProjDetailsPage";
import MobileProjDetailsPage from "./MobileProjDetailsPage";

const ProjDetailsPage = () => {
  const { id } = useParams();
  const isMobileDevice = useDevice();

  return isMobileDevice ? (
    <MobileProjDetailsPage id={id} />
  ) : (
    <DesktopProjDetailsPage id={id} />
  );
};

export default ProjDetailsPage;
