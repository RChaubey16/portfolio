import Image from "next/image";
import TitleDescription from "./ui/TitleDescription";
import Link from "next/link";

export default function CurrentVentures() {
  return (
    <div className="">
      <TitleDescription
        title="Current Ventures"
        description="Apps I'm currently working on"
        classes="mt-16"
      />
      <div className="mt-10 grid grid-cols-1 gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={"/project-icon.svg"}
            alt={"New Project Logo"}
            width={30}
            height={30}
            className="w-[30px] h-[30px] object-cover rounded-lg"
          />
          <div>
            <Link
              href={"/home"}
              className="text-lg text-white/90 font-semibold hover:underline"
            >
              Roast My Drupal V2
            </Link>
            <p className="text-base text-white/70">
              Get your Drupal profile roasted
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={"/project-icon.svg"}
            alt={"New Project Logo"}
            width={30}
            height={30}
            className="w-[30px] h-[30px] object-cover rounded-lg"
          />
          <div>
            <Link
              href={"/home"}
              className="text-lg text-white/90 font-semibold hover:underline"
            >
              Curate
            </Link>
            <p className="text-base text-white/70">
              A tool to help you curate content for your audience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
