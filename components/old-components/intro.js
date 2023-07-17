import { introduction } from "../../content/index.js";
import Image from "next/image.js";
import avatar from "../../assets/avatar.webp";
import Link from "next/link.js";

import { motion } from "framer-motion";

function Intro() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 align-middle my-20 bg-secondaryBlue min-h-[200px] max-w-[900px] self-center p-4 sm:p-10 mx-2 sm:mx-8 shadow-xl">
      <div className=" bg-primaryBlue flex flex-col gap-6 py-4 items-center text-lg font-medium sm:font-semibold tracking-wide border-8 border-primaryGreen max-h-[400px] self-center ">
        <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.7 }}>
          <Image
            src={avatar}
            width={150}
            height={150}
            alt="Robin's Avatar"
            className="rounded-full border-2 border-primaryGreen object-contain"
          />
        </motion.div>
        <ul className="list-none mx-4 p-2 flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <Image
              src="/user.svg"
              alt="User Icon"
              title="My Name"
              width={30}
              height={30}
              className="object-contain"
            />

            <span>Robin Wilschere-Green</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src="/location.svg"
              alt="Location Icon"
              title="My Location"
              width={30}
              height={30}
              className="object-contain"
            />
            <span>Devon, England</span>
          </li>
          <li className="flex gap-2 items-center">
            <Link href="mailto:rlinden91@gmail.com" target="_blank">
              <Image
                src="/email.svg"
                alt="Email Icon"
                title="My Email"
                width={30}
                height={30}
                className="infoIcon"
              />
            </Link>
            <span>rlinden91@gmail.com</span>
          </li>
          <li className="flex gap-2 items-center">
            <Link href="https://github.com/rwgr" target="_blank">
              <Image
                src="/github.svg"
                alt="GitHub Icon"
                title="My GitHub"
                width={30}
                height={30}
                className="infoIcon"
              />
            </Link>
            <span>github.com/rwgr</span>
          </li>
        </ul>
      </div>
      <div className="p-8">
        <div className="flex flex-col gap-5  ">
          <h4 className="uppercase text-xs font-bold tracking-widest">
            Introduction
          </h4>
          <h2 className="text-2xl text-white font-bold">
            {introduction.subheading}
          </h2>
          <p className="text-lg">{introduction.intro}</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
