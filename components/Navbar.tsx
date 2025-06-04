import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="list-none space-y-5">
        <li>
          <Link href="/" className="text-lg text-white hover:text-white/80">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-lg text-white hover:text-white/80"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link href="#" className="text-lg text-white hover:text-white/80">
            Photos
          </Link>
        </li>
        <li>
          <Link
            href="/links"
            className="text-lg text-white hover:text-white/80"
          >
            Links
          </Link>
        </li>
        <li>
          <Link
            href="/testimonials"
            className="text-lg text-white hover:text-white/80"
          >
            Testimonials
          </Link>
        </li>
      </ul>
    </nav>
  );
}
