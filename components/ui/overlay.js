import { useContext } from "react";
import ImageContext from "../../store/imageContext.js";
import Image from "next/image.js";
import { motion } from "framer-motion";
import closeIcon from "../../assets/icons/closeIcon.svg";

function Overlay() {
  const imageCtx = useContext(ImageContext);

  return (
    <div
      className="bg-[#000000b3] w-full h-full fixed top-0 left-0 z-50"
      onClick={() => imageCtx.hideImage()}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-full p-2">
        <div className="flex justify-center items-center">
          <Image
            src={imageCtx.image}
            height={540}
            width={960}
            alt="Project screenshot"
            className="transition-all duration-300 ease-out"
          />
        </div>
      </div>
      <Image
        src={closeIcon}
        height={50}
        width={50}
        alt="Close icon"
        className="fixed top-20 right-10 fill-white h-10 hover:p-1 hover:fill-slate-300 transition-all duration-300 ease-out cursor-pointer scale-150"
      />
    </div>
  );
}

export default Overlay;
