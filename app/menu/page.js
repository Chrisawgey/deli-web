import Navbar from '../components/Navbar';
import MenuSection from '../components/MenuSection';

export default function Menu() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-start p-8">
        <h1 className="text-4xl font-bold mb-8">Our Menu</h1>
        <MenuSection />
      </div>
    </main>
  );
}
