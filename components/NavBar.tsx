import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
  const router = useRouter();
  return (
    <div className='relative top-0 min-w-[300px] bg-white'>
      <div className='mx-auto'>
        <nav className='grid grid-cols-12 gap-40 p-4 pl-20 font-bold text-xl lg:pl-[10%]'>
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
