import TitleDescription from "@/components/ui/TitleDescription";
import PhotosGrid from "@/components/PhotosGrid";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="w-full">
      <TitleDescription
        title="About"
        description="I'm a software engineer with a passion for building products that help people live better lives."
        classes="mb-16"
      />
      <PhotosGrid />
      <Experience />
    </div>
  );
}
