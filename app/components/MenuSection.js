export default function MenuSection() {
    return (
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-bold">Item 1</h3>
            <p className="text-sm text-gray-600">Description of item 1</p>
            <p className="text-lg font-semibold mt-2">$10.00</p>
          </li>
          {/* More menu items will go here */}
        </ul>
      </section>
    );
  }
  