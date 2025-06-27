import ShinyText from "../animations/ShinyText/ShinyText";

export default function TitleDescription({
  title,
  description,
  classes = "",
}: {
  title: string;
  description: string;
  classes?: string;
}) {
  const customClasses = "text-xl font-semibold"
  return (
    <div className={`${classes}`}>

      <ShinyText text={title} disabled={false} speed={3} className={customClasses} />
      {/* <h3 className="text-xl font-semibold text-white">{title}</h3> */}
      <p className="mt-2 text-base text-white/70">{description}</p>
    </div>
  );
}
