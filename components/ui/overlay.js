import { useContext } from "react";
import ImageContext from "../../store/imageContext.js";
import Image from "next/image.js";
import { motion } from "framer-motion";

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
            className="transition-all duration-300 ease-out"
            height={540}
            width={960}
          />
        </div>
      </div>
      <Image
        src="/close.svg"
        height={50}
        width={50}
        className="fixed top-20 right-10 fill-white h-10 hover:p-1 hover:fill-slate-300 transition-all duration-300 ease-out cursor-pointer scale-150"
      />
    </div>
  );
}

export default Overlay;
