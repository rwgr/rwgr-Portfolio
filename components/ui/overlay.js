import { useContext } from "react";
import ImageContext from "../../store/imageContext.js";
import Image from "next/image.js";
// import { motion } from "framer-motion";
import closeIcon from "../../assets/icons/closeIcon.svg";
import rightIcon from "../../assets/icons/rightIcon.svg";
import leftIcon from "../../assets/icons/leftIcon.svg";

function Overlay() {
  const imageCtx = useContext(ImageContext);

  return (
    <div className="bg-[#000000b3] w-full h-full fixed top-0 left-0 z-50">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-full p-2">
        <div className="flex justify-center items-center relative p-4">
          <Image
            src={imageCtx.image}
            height={540}
            width={960}
            alt="Project screenshot"
            className="transition-all duration-300 ease-out"
          />
          <Image
            src={rightIcon}
            height={80}
            width={80}
            alt="Right icon"
            className="absolute top-72 right-0 xl:-right-28 lg:-right-16  overlayIcon"
            onClick={() => imageCtx.showImage("right")}
          />
          <Image
            src={leftIcon}
            height={80}
            width={80}
            alt="Right icon"
            className="absolute top-72 left-0 xl:-left-28 lg:-left-16 overlayIcon"
            onClick={() => imageCtx.showImage("left")}
          />
        </div>
      </div>
      <Image
        src={closeIcon}
        height={60}
        width={60}
        alt="Close icon"
        className="fixed top-20 right-10 fill-slate-100 overlayIcon"
        onClick={() => imageCtx.hideImage()}
      />
    </div>
  );
}

export default Overlay;
