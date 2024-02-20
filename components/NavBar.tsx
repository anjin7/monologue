import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
  const router = useRouter();
  return (
    <div className='relative top-0 min-w-[300px] bg-white/20'>
      <div className='mx-auto'>
        <nav className='grid grid-cols-12 gap-40 font-bold text-xl p-4 pl-[72px] md:pl-28 xl:pl-48'>
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
    </div>
  );
}
