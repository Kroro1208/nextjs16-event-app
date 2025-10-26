import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Logo" width={24} height={24} />
          <p>Dev Event</p>
        </Link>
        <ul className="list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Events</Link>
          </li>
          <li>
            <Link href="/">Create Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
