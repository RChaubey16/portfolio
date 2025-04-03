import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="list-none space-y-5">
        <li>
          <Link href="#" className="text-lg text-white hover:text-white/80">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="text-lg text-white hover:text-white/80">
            Contact
          </Link>
        </li>
        <li>
          <Link href="#" className="text-lg text-white hover:text-white/80">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#" className="text-lg text-white hover:text-white/80">
            Links
          </Link>
        </li>
        <li>
          <Link href="#" className="text-lg text-white hover:text-white/80">
            Testimonials
          </Link>
        </li>
        <li>
          <Link href="#" className="text-lg text-white hover:text-white/80">
            Recent Photos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
