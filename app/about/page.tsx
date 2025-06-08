export default function About() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 py-20">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">About LiveCapShare</h1>
      <p className="max-w-2xl text-lg text-gray-700 mb-6 text-center">
        LiveCapShare is a modern platform for capturing, uploading, and sharing screen recordings and videos. Our mission is to empower creators and professionals to share knowledge, tutorials, and moments with ease and security. Built with Next.js, Tailwind CSS, and the latest web technologies, we focus on performance, accessibility, and a delightful user experience.
      </p>
      <p className="max-w-2xl text-md text-gray-600 text-center">
        Whether you are a teacher, developer, gamer, or business professional, LiveCapShare provides the tools you need to connect and inspire others through video.
      </p>
    </main>
  );
}