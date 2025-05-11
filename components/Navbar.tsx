"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const user = {}; // Adjust this logic as needed — maybe use actual auth data

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="navbar">
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <h1>SnapCast</h1>
        </Link>

        {user && (
          <figure className="flex items-center gap-4">
            <button
              aria-label="Go to profile"
              onClick={() => router.push("/profile/123456")}
            >
              <Image
                src="/assets/images/dummy.jpg"
                alt="User"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer" aria-label="Log out">
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
