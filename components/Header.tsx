import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: NextPage = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </a>
      </Link>
    </nav>
  );
}

export default Header;