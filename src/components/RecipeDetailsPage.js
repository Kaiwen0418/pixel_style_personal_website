import React from "react";
import { useParams } from "react-router-dom";
import { useDevice } from '../utils/DeviceContext';
import DesktopRecipeDetailsPage from "./DesktopRecipeDetailsPage";
import MobileRecipeDetailsPage from "./MobileRecipeDetailsPage";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const isMobileDevice = useDevice();

  return isMobileDevice ? (
    <MobileRecipeDetailsPage id={id} />
  ) : (
    <DesktopRecipeDetailsPage id={id} />
  );
};

export default RecipeDetailsPage;
