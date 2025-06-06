import TitleDescription from "@/components/ui/TitleDescription";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full mt-20">
      <TitleDescription title="Contact" description="" classes="" />
      <p className="text-base text-white/70">
        Feel free to reach out at{" "}
        <Link href={"mailto:ruturajchaubey16@gmail.com"} className="text-white font-bold underline">
          ruturajchaubey16@gmail.com
        </Link>
        {" "} I&apos;m always open to new opportunities and collaborations.
      </p>
    </div>
  );
}
