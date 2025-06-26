import TitleDescription from "@/components/ui/TitleDescription";
import PhotosGrid from "@/components/PhotosGrid";
import Experience from "@/components/Experience";
import CurrentVentures from "@/components/CurrentVentures";
import Contact from "@/components/Contact";
import data from "@/data/data.json";
import Fade from "@/components/ui/Fade";

export const metadata = {
  title: "Ruturaj Chaubey",
  description:
    "Ruturaj's peronal website, showcasing his journey, experiences, and current ventures.",
};

export default function Home() {
  const { description } = data;
  return (
    <Fade>
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
    </Fade>
  );
}
