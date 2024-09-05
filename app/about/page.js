import Navbar from '../components/Navbar';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[rgb(239,236,215)]">
      <Navbar />
      <div className="flex flex-col items-center justify-start p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">About Us</h1>
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <section className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Deli is more than just a place to grab a bite—it's where friends and family come together to enjoy great food in a warm, welcoming atmosphere.
            </p>
          </section>

          <section className="mb-8 flex flex-col md:flex-row items-center">
            <img
              src="/images/restaurant.jpg"
              alt="Our Restaurant"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
            />
            <div className="text-gray-700 leading-relaxed">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Space</h3>
              <p>
                Located in the heart of Springfield, our cozy spot is the perfect place to enjoy a delicious meal. Come see us!
              </p>
            </div>
          </section>

          <section className="mb-8 flex flex-col md:flex-row items-center">
            <img
              src="/images/team.jpg"
              alt="Our Team"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
            />
            <div className="text-gray-700 leading-relaxed">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Meet the Team</h3>
              <p>
                We're a small, passionate group dedicated to making your visit special. Our team is like family, and we can't wait to welcome you to our deli.
              </p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you're here for a quick lunch or a leisurely meal, we look forward to serving you with a smile.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
