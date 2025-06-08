"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({ provider: "google" });
      // You can handle post sign-in logic here if needed
    } catch (error) {
      console.error("Sign-in failed", error);
      setIsLoading(false);
    }
  };

  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>LivCapShare</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  key={index}
                  width={20}
                  height={20}
                />
              ))}
            </figure>
            <p>
              LivCapShare makes screen recording easy. From quick walkthroughs
              to full presentations, it's fast, smooth, and shareable in seconds
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="jason"
                width={64}
                height={64}
                className="rounded-full"
              />
            </article>
            <div className="mt-2">
              <h2 className="font-bold text-center text-2xl">Harsh Agarwal</h2>
              <p className="text-center font-normal text-xl">
                Web Developer, TEN
              </p>
            </div>
          </section>
        </div>
      </aside>

      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1>LivCapShare</h1>
          </Link>
          <p>
            Create and Share your very first <span>SnapCast Video</span> in no
            time!
          </p>

          <button onClick={handleSignIn} disabled={isLoading}>
          {isLoading ? "" : <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />}
            
            <span>{isLoading ? "Signing in..." : "Sign in with Google"}</span>
          </button>
        </section>
      </aside>

      <div className="overlay" />
    </main>
  );
};

export default Page;
