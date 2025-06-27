import Image from "next/image";
import Link from "next/link";
import GlareHover from "./animations/GlareHover/GlareHover";

interface TechLogoProps {
  title: string;
  logo: string;
  altText: string;
  linkHref: string;
}

export default function TechLogo({
  title,
  logo,
  altText,
  linkHref,
}: TechLogoProps) {
  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={false}
      width="full"
      height="auto"
    >
      <div className="w-full bg-dark-a20 rounded-sm">
        <Link
          href={linkHref}
          className="p-5 px-8 flex flex-col justify-center items-center"
        >
          <Image
            src={logo}
            alt={altText}
            width={30}
            height={30}
            className="mb-2 w-[40px] h-[40px] object-cover"
          />
          <p className="text-white/85">{title}</p>
        </Link>
      </div>
    </GlareHover>
  );
}
