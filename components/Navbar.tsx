"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const hiddenRoutes = ["/sign-in"];
  if (hiddenRoutes.includes(pathname)) return null;

  const { data: session } = authClient.useSession();
  const user = session?.user;

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
          <h1>LiveCapShare</h1>
        </Link>

        {user ? (
          <figure className="flex items-center gap-4">
            <button onClick={() => router.push(`/profile/${user.id}`)}>
              <Image
                src={user.image || "/assets/images/dummy.jpg"}
                alt="User"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>

            <button
              onClick={async () => {
                await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      redirect("/sign-in");
                    },
                  },
                });
              }}
              className="cursor-pointer"
            >
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        ) : (
          // Show Sign In link if no user
          <Link href="/sign-in" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
