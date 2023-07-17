function SectionIntro(props) {
  return (
    <div className="p-2 sm:-p10 flex flex-col gap-5 max-w-[750px]">
      <div className="flex flex-col gap-2">
        <h4 className="uppercase text-xs font-bold tracking-widest">
          {props.subHeading}
        </h4>
        <h2 className="text-4xl font-extrabold">{props.section}</h2>
      </div>
      <div className="text-xl">
        <p>{props.introduction}</p>
      </div>
    </div>
  );
}

export default SectionIntro;
