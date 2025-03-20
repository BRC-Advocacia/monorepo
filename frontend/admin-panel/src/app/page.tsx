import Link from "next/link";

export default function Home() {
  return (
    <nav className="h-dvh w-dvw flex bg-black">
      <ul className="m-auto px-16 w-full flex justify-between items-center">
        <li>
          <Link
            href={"/login"}
            className="font-sans text-white text-xl font-bold hover:text-green-200 cursor-pointer"
          >
            /login
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard"}
            className="font-sans text-white text-xl font-bold hover:text-green-200 cursor-pointer"
          >
            /dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
