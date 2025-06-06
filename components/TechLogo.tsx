import Image from "next/image";
import Link from "next/link";

interface TechLogoProps {
  title: string;
  logo: string;
  altText: string;
  linkHref: string;
}

export default function TechLogo({ title, logo, altText, linkHref }: TechLogoProps) {
  return (
    <div className="w-full bg-dark-a20 hover:bg-dark-a10 rounded-sm">
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
  );
}
