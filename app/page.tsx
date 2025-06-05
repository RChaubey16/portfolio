import TitleDescription from "@/components/ui/TitleDescription";
import PhotosGrid from "@/components/PhotosGrid";
import Experience from "@/components/Experience";
import CurrentVentures from "@/components/CurrentVentures";
import Contact from "@/components/Contact";
import data from "@/data/data.json";

export default function Home() {
  const { description } = data;
  return (
    <div className="w-full">
      <TitleDescription
        title="About"
        description={description}
        classes="mb-20"
      />
      <PhotosGrid />
      <Experience />
      <CurrentVentures />
      <Contact />
    </div>
  );
}
