import { createContext, useState, useEffect } from "react";
import { projectImages } from "../content/index.js";

const ImageContext = createContext({
  image: null,
  showImage: function (imageTitle) {},
  hideImage: function () {},
  nextImage: function () {},
});

export function ImageContextProvider(props) {
  const [activeImage, setActiveImage] = useState();
  const [imageIndex, setImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState();

  useEffect(() => {
    if (currentProject) {
      const correctImage = currentProject.images[imageIndex];
      setActiveImage(correctImage);
    }
  }, [imageIndex, currentProject]);

  function showImageHandler(imageTitle) {
    // Overlay image gallery navigation
    if (imageTitle === "right" || imageTitle === "left") {
      const direction = imageTitle;
      const length = currentProject.images.length;

      if (imageIndex === length) {
        return setImageIndex(0);
      }

      setImageIndex((prevIndex) => {
        if (imageIndex === 0 && direction === "left") {
          return length - 1;
        } else if (direction === "left") {
          return prevIndex - 1;
        } else if (imageIndex === length - 1 && direction === "right") {
          return 0;
        } else if (direction === "right") {
          return prevIndex + 1;
        }

        return prevIndex;
      });
    } else {
      const trimmed = imageTitle.replace(/\s/g, "").toLowerCase();

      const project = projectImages.find(
        (project) => project.title === trimmed
      );

      setCurrentProject(project);
      setImageIndex(0);
    }
  }

  function hideImageHandler() {
    setActiveImage(null);
    setCurrentProject(null);
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
