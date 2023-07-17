import { createContext, useState } from "react";
import localCrimeChecker from "../assets/projects/localCrimeChecker.png";
import bookCollectionManager from "../assets/projects/bookCollectionManager.png";
import ecoElectronics from "../assets/projects/ecoElectronics.png";
import fullStackForum from "../assets/projects/fullStackForum.png";
import coachFinder from "../assets/projects/coachFinder.png";
import vuePortfolio from "../assets/projects/vuePortfolio.png";

const ImageContext = createContext({
  image: null,
  showImage: function (imageTitle) {},
  hideImage: function () {},
});

export function ImageContextProvder(props) {
  const [activeImage, setActiveImage] = useState();

  function showImageHandler(imageTitle) {
    const trimmed = imageTitle.replace(/\s/g, "").toLowerCase();
    console.log("trimmed", trimmed);
    const correctImage =
      trimmed === "localcrimechecker"
        ? localCrimeChecker
        : trimmed === "bookcollectionmanager"
        ? bookCollectionManager
        : trimmed === "ecoelectronicsstorefront"
        ? ecoElectronics
        : trimmed === "fullstackforum"
        ? fullStackForum
        : trimmed === "coachfinder"
        ? coachFinder
        : trimmed === "vueportfolio"
        ? vuePortfolio
        : null;
    console.log(correctImage);
    setActiveImage(correctImage);
  }

  function hideImageHandler() {
    setActiveImage(null);
  }

  const context = {
    image: activeImage,
    showImage: showImageHandler,
    hideImage: hideImageHandler,
  };

  return (
    <ImageContext.Provider value={context}>
      {props.children}
    </ImageContext.Provider>
  );
}

export default ImageContext;
