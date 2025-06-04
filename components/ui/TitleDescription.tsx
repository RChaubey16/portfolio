export default function TitleDescription({
  title,
  description,
  classes = "",
}: {
  title: string;
  description: string;
  classes?: string;
}) {
  return (
    <div className={`${classes}`}>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-base text-white/70">{description}</p>
    </div>
  );
}
