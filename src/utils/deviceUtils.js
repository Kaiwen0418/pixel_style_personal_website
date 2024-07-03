import { isMobile } from "react-device-detect";

export const checkIfMobileDevice = (callback) => {
  const userAgentMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    );
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  const combinedCheck = userAgentMobile || mediaQuery.matches || isMobile;

  callback(combinedCheck);

  const handler = (event) => callback(event.matches || userAgentMobile);
  mediaQuery.addListener(handler);

  return () => mediaQuery.removeListener(handler);
};

export default checkIfMobileDevice;
