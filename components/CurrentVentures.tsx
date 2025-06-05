import TitleDescription from "./ui/TitleDescription";

export default function CurrentVentures() {
  return (
    <div className="">
      <TitleDescription
        title="Current Ventures"
        description="Apps I'm currently working on"
        classes="mt-16"
      />
      <div className="mt-10 grid grid-cols-1 gap-4">
        <div>
          <h4 className="text-lg text-white/90 font-semibold">
            Roast My Drupal V2
          </h4>
          <p className="text-base text-white/70">
            Get your Drupal profile roasted
          </p>
        </div>
        <div>
          <h4 className="text-lg text-white/90 font-semibold">Curate</h4>
          <p className="text-base text-white/70">
            AI powered curation tool for your content
          </p>
        </div>
      </div>
    </div>
  );
}
