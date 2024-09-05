import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-[rgb(239,236,215)]">
      <Navbar />
      <div className="flex flex-col items-center justify-start p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                rows="5"
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-medium py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between w-full max-w-2xl">
          <div className="text-gray-700 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="mt-4">123 Springfield Ave</p>
            <p>Springfield, IL 62704</p>
            <p className="mt-4">Email: info@deli-springfield.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-md shadow-inner">
            {/* Embed a map or add an image of a map here */}
            <p className="flex items-center justify-center h-full text-gray-500">Map goes here</p>
          </div>
        </div>
      </div>
    </main>
  );
}
