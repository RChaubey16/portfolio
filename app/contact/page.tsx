import Fade from "@/components/ui/Fade";
import TitleDescription from "@/components/ui/TitleDescription";

export default function ContactPage() {
  return (
    <Fade>
      <div className="w-full">
        <TitleDescription
          title="Contact"
          description="I'm a software engineer with a passion for building products that help people live better lives."
        />
      </div>
    </Fade>
  );
}
