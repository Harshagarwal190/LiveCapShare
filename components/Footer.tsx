import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-300 border-t  text-center text-gray-600 text-sm">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <span>&copy; {new Date().getFullYear()} LiveCapShare. All rights reserved.</span>
        <span className="mx-2">|</span>
        <Link href="/about" className="hover:underline">About</Link>
        <span className="mx-2">|</span>
        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
      </div>
    </footer>
  );
}