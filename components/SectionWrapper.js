function SectionWrapper(props) {
  return (
    <div
      className={`w-full flex py-24 mx-auto items-center  justify-center ${props.bgColour} ${props.background}`}
      id={props.elementId}
    >
      <div className="h-fit w-[1600px] mx-4 sm:mx-10 flex flex-col gap-20 z-10 p-4 sm:p-8 ">
        {props.children}
      </div>
    </div>
  );
}

export default SectionWrapper;
