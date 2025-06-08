"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 px-4">
      <section className="w-full max-w-4xl text-center py-20">
        <motion.h1
          className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to LiveCapShare
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Capture, upload, and share your screen moments instantly. Discover
          trending videos and connect with creators.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="/upload"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Upload Video
          </Link>
          <Link
            href="/dashboard"
            className="px-8 py-3 rounded-full bg-purple-500 text-white font-semibold shadow-lg hover:bg-purple-600 transition"
          >
            Explore Dashboard
          </Link>
        </motion.div>
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white rounded-xl shadow-md p-6 w-64"
          >
            <Image
              src="/assets/images/video1.png"
              alt="Trending Video"
              width={200}
              height={120}
              className="rounded-lg"
            />
            <div className="mt-4 text-left">
              <h3 className="font-bold text-lg">Trending Video</h3>
              <p className="text-gray-500 text-sm">See what’s popular now</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white rounded-xl shadow-md p-6 w-64"
          >
            <Image
              src="/assets/images/alex.png"
              alt="Creator"
              width={60}
              height={60}
              className="rounded-full mx-auto"
            />
            <div className="mt-4 text-left">
              <h3 className="font-bold text-lg">Join Creators</h3>
              <p className="text-gray-500 text-sm">Share your own moments</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
