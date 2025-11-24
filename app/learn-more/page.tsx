import Link from 'next/link';

export default function LearnMore() {
  return (
    <>
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-gradient-to-b from-dark-card to-dark-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8">Understanding EZakay</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Discover how our digital platform is transforming public transportation in Tacloban City
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Mission & Vision */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-dark-card p-6 sm:p-8 rounded-2xl shadow-md">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent-green mb-4">Mission</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">
                To provide a seamless, efficient, and modern public transportation experience through innovative digital solutions that benefit passengers, drivers, and operators alike.
              </p>
            </div>
            <div className="bg-dark-card p-6 sm:p-8 rounded-2xl shadow-md">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent-green mb-4">Vision</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">
                To be the leading digital transportation management platform in the Philippines, setting the standard for modern public utility vehicle operations.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">How It Works</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-dark-card p-6 sm:p-8 rounded-2xl shadow-md">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent-green mb-4">For Passengers</h3>
              <ol className="list-decimal pl-5 space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-300">
                <li>Download the EZakay passenger app</li>
                <li>Register and verify your account</li>
                <li>Add your discount credentials (if applicable)</li>
                <li>Track PUVs in real-time</li>
                <li>Pay fares using GCash</li>
              </ol>
            </div>

            <div className="bg-dark-card p-6 sm:p-8 rounded-2xl shadow-md">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent-green mb-4">For Drivers</h3>
              <ol className="list-decimal pl-5 space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-300">
                <li>Register through your transport cooperative</li>
                <li>Complete the verification process</li>
                <li>Use the driver app for daily operations</li>
                <li>Track earnings and passenger information</li>
                <li>Receive real-time updates and notifications</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-dark-card p-4 sm:p-6 rounded-2xl shadow-md">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent-green mb-3">For Passengers</h3>
              <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-300">
                <li>• Real-time tracking</li>
                <li>• Cashless payments</li>
                <li>• Automated discounts</li>
                <li>• Trip history</li>
              </ul>
            </div>
            
            <div className="bg-dark-card p-4 sm:p-6 rounded-2xl shadow-md">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent-green mb-3">For Drivers</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>• Digital fare collection</li>
                <li>• Passenger management</li>
                <li>• Route optimization</li>
                <li>• Daily earnings tracking</li>
              </ul>
            </div>
            
            <div className="bg-dark-card p-4 sm:p-6 rounded-2xl shadow-md">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent-green mb-3">For Operators</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>• Fleet management</li>
                <li>• Revenue monitoring</li>
                <li>• Analytics dashboard</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-accent-green text-white p-8 sm:p-12 rounded-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Ready to Get Started?</h2>
          <p className="text-xs sm:text-sm text-white/90 mb-6 sm:mb-8">Join the digital transportation revolution today.</p>
          <Link href="/get-started" className="inline-block bg-white text-accent-green px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started Now
          </Link>
        </section>
      </main>
    </>
  );
}

