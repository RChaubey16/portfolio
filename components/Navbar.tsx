import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="list-none space-y-2">
        <li>
          <Link href="#" className="text-white hover:text-white/80">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="text-white hover:text-white/80">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="#" className="text-white hover:text-white/80">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
