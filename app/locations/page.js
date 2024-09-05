import Navbar from '../components/Navbar';

export default function Locations() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-start p-8">
        <h1 className="text-4xl font-bold mb-8">Our Locations</h1>
        {/* Add information about your deli locations here */}
      </div>
    </main>
  );
}
