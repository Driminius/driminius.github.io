const HeadingTwoCopy = ({
  head = "defaultHeading",
  copy = "lorem ipsum copy",
}) => {
  return (
    <div className="mt-7 mb-7">
      <h2 className=" mt-2 mb-2 text-2xl font-bold tracking-wide">
        <span className=" pb-1 border-b-8 border-[#E1E1E1]">{head}</span>
      </h2>
      <p className="pt-4 ">{copy}</p>
    </div>
  );
};

export default HeadingTwoCopy;
