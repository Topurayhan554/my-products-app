export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-indigo-600 animate-fadeIn">
            About Us
          </h1>
          <p className="text-gray-700 text-lg md:text-xl animate-fadeIn delay-150">
            We are dedicated to providing the best products with top-notch
            service. Our mission is to make online shopping delightful and
            trustworthy.
          </p>
        </div>

        {/* Vision & Values */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted online store, offering high-quality
              products and excellent customer support.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
              Our Values
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Customer satisfaction is our priority</li>
              <li>Quality and authenticity guaranteed</li>
              <li>Continuous innovation</li>
              <li>Integrity in all dealings</li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-600">
            Meet Our Team
          </h2>
          <p className="text-gray-700 md:text-lg">
            A small but dedicated team working tirelessly to serve you the best.
          </p>
        </div>

        {/* Optional Team Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {["Alice", "Bob", "Charlie", "Diana"].map((name) => (
            <div
              key={name}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                {name[0]}
              </div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-gray-600">Team Member</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
