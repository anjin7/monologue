import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
  const router = useRouter();
  return (
    <div className='top-0 min-w-[300px]'>
      <nav className='grid grid-cols-12 gap-40 p-4 pl-16 font-bold text-xl'>
        <Link href="/" legacyBehavior>
          <a style={{ color: router.pathname === "/" ? "skyblue" : "silver" }} >
            Monologue
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a style={{ color: router.pathname === "/about" ? "skyblue" : "silver" }} >
            About
          </a>
        </Link>
      </nav>
    </div>

  );
}
