import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: NextPage = () => {
  const router = useRouter();
  return (
    <nav className='grid grid-cols-12 gap-40 px-4 py-4 pl-12'>
      <Link href="/" legacyBehavior>
        <a style={{ color: router.pathname === "/" ? "skyblue" : "silver" }} className='font-bold text-xl'>
          Monologue
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a style={{ color: router.pathname === "/about" ? "skyblue" : "silver" }} className='font-bold text-xl'>
          About
        </a>
      </Link>
    </nav>
  );
}

export default Header;