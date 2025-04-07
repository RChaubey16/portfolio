export default function TitleDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-base text-white/70">{description}</p>
    </div>
  );
}
