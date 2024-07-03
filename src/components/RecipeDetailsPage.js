import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { checkIfMobileDevice } from "../utils/deviceUtils";
import DesktopRecipeDetailsPage from "./DesktopRecipeDetailsPage";
import MobileRecipeDetailsPage from "./MobileRecipeDetailsPage";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const cleanup = checkIfMobileDevice(setIsMobileDevice);
    return cleanup;
  }, []);

  console.log(isMobileDevice);

  return isMobileDevice ? (
    <MobileRecipeDetailsPage id={id} />
  ) : (
    <DesktopRecipeDetailsPage id={id} />
  );
};

export default RecipeDetailsPage;
