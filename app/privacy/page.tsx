export default function Privacy() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 py-20">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Privacy Policy</h1>
      <div className="max-w-2xl text-gray-700 text-md space-y-4">
        <p>Your privacy is important to us. LiveCapShare is committed to protecting your personal information and ensuring transparency about how we use it.</p>
        <ul className="list-disc pl-6">
          <li>We only collect information necessary to provide our services.</li>
          <li>Your videos and data are stored securely and are never shared without your consent.</li>
          <li>We use cookies only to enhance your experience and never for advertising purposes.</li>
          <li>You can request deletion of your data at any time by contacting support.</li>
        </ul>
       </div>
    </main>
  );
}