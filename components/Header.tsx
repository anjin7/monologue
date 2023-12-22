import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: NextPage = () => {
  const router = useRouter();
  return (
    <nav className='grid grid-cols-12 gap-6 px-4 py-3'>
      <Link href="/" legacyBehavior>
        <a style={{ color: router.pathname === "/" ? "skyblue" : "silver" }} className='font-bold'>
          Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a style={{ color: router.pathname === "/about" ? "skyblue" : "silver" }} className='font-bold'>
          About
        </a>
      </Link>
    </nav>
  );
}

export default Header;