import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ShieldCheck, Users2, Settings, Users, Car, Building, QrCode, Ruler, FileText, Navigation, DollarSign, ListFilter, ClipboardList, BarChart, Wallet } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-purple via-dark-card to-dark-purple px-4 sm:px-6 pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(111,171,117,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 font-poppins tracking-tight">
                Modernizing Public Utility Vehicle Operations
                <br />
                <span className="gradient-text font-extrabold">Across Tacloban City</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-poppins font-light">
                EZakay is a role-based smart platform that connects passengers, drivers, and cooperatives through real-time tracking, automated fare, QR verification, and secure digital payment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link href="#features" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-green to-accent-green/80 text-white text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:shadow-accent-green/30 hover:scale-105 transition-all duration-300 font-poppins">
                  Explore Features
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/get-started" className="inline-flex items-center px-8 py-4 border-2 border-accent-green/50 text-accent-green text-base sm:text-lg font-semibold rounded-full hover:bg-accent-green/10 hover:border-accent-green transition-all duration-300 font-poppins">
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Right Column - App Screenshots */}
            <div className="relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {/* Login Screen */}
                  <div className="relative transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-10">
                    <div className="absolute -inset-3 bg-gradient-to-br from-accent-green/30 to-accent-green/10 rounded-3xl blur-xl opacity-75"></div>
                    <div className="relative bg-dark-card/90 backdrop-blur-xl rounded-3xl p-2 shadow-2xl border border-accent-green/30">
                      <Image
                        src="/screenshot-login.png"
                        alt="EZakay Login Screen"
                        width={300}
                        height={600}
                        className="rounded-2xl w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Map Screen */}
                  <div className="relative transform rotate-6 translate-y-8 lg:translate-y-12 hover:rotate-0 hover:translate-y-0 transition-all duration-500 hover:scale-105 hover:z-10">
                    <div className="absolute -inset-3 bg-gradient-to-br from-accent-green/30 to-accent-green/10 rounded-3xl blur-xl opacity-75"></div>
                    <div className="relative bg-dark-card/90 backdrop-blur-xl rounded-3xl p-2 shadow-2xl border border-accent-green/30">
                      <Image
                        src="/screenshot-map.png"
                        alt="EZakay Map Interface"
                        width={300}
                        height={600}
                        className="rounded-2xl w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center bg-gradient-to-b from-dark-purple via-dark-card to-dark-purple px-4 sm:px-6 pt-20 pb-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-dark-card/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-accent-green/10 card-hover">
            <div className="bg-gradient-to-r from-accent-green via-accent-green/90 to-accent-green/80 p-[2px]">
              <div className="bg-dark-card p-8 sm:p-12 rounded-t-3xl">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold gradient-text text-center mb-6 font-poppins tracking-tight">
                  About EZakay
                </h2>
                <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto font-poppins">
                  Revolutionizing public transportation through innovative digital solutions
                </p>
              </div>
            </div>
            
            <div className="p-8 sm:p-12 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12">
                <div className="space-y-8">
                  <div className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-6 p-6 rounded-2xl bg-dark-purple/50 hover:bg-dark-purple/70 border border-accent-green/10 hover:border-accent-green/30 transition-all duration-300 card-hover">
                    <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-accent-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-poppins">Digital Management System</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light">
                        A comprehensive mobile-based platform optimizing modern PUV operations in Tacloban with seamless stakeholder coordination.
                      </p>
                    </div>
                  </div>

                  <div className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-6 p-6 rounded-2xl bg-dark-purple/50 hover:bg-dark-purple/70 border border-accent-green/10 hover:border-accent-green/30 transition-all duration-300 card-hover">
                    <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-accent-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-poppins">Secure Transactions</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light">
                        Integrated with GCash for cashless payments, ensuring safe and convenient transactions for all users.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-6 p-6 rounded-2xl bg-dark-purple/50 hover:bg-dark-purple/70 border border-accent-green/10 hover:border-accent-green/30 transition-all duration-300 card-hover">
                    <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Users2 className="w-6 h-6 sm:w-7 sm:h-7 text-accent-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-poppins">Collaborations</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light">
                        Collaborating with TAVAGCADOTCO and NORBATCO to implement modern transport solutions across the city.
                      </p>
                    </div>
                  </div>

                  <div className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-6 p-6 rounded-2xl bg-dark-purple/50 hover:bg-dark-purple/70 border border-accent-green/10 hover:border-accent-green/30 transition-all duration-300 card-hover">
                    <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-accent-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-poppins">Smart Features</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light">
                        Automated fare computation, discount management via ID verification, and comprehensive analytics for operators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-accent-green/20 pt-10">
                <div className="flex flex-col items-center gap-8">
                  <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest font-poppins">Current Available Transport Cooperatives</p>
                  <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                    <div className="flex items-center gap-4 bg-gradient-to-r from-dark-purple/80 to-dark-purple/60 px-6 sm:px-8 py-4 rounded-2xl border border-accent-green/20 hover:border-accent-green/40 hover:bg-dark-purple/90 transition-all duration-300 card-hover">
                      <div className="bg-accent-green/20 p-2 rounded-lg">
                        <ShieldCheck className="w-5 h-5 text-accent-green" />
                      </div>
                      <span className="text-base sm:text-lg text-white font-bold font-poppins">TAVAGCADOTCO</span>
                    </div>
                    <div className="flex items-center gap-4 bg-gradient-to-r from-dark-purple/80 to-dark-purple/60 px-6 sm:px-8 py-4 rounded-2xl border border-accent-green/20 hover:border-accent-green/40 hover:bg-dark-purple/90 transition-all duration-300 card-hover">
                      <div className="bg-accent-green/20 p-2 rounded-lg">
                        <ShieldCheck className="w-5 h-5 text-accent-green" />
                      </div>
                      <span className="text-base sm:text-lg text-white font-bold font-poppins">NORBATCO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="min-h-screen bg-gradient-to-b from-dark-card via-dark-purple to-dark-card px-4 sm:px-6 pt-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 sm:mb-8 font-poppins tracking-tight">
              <span className="gradient-text">Core Features</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4 font-poppins font-light leading-relaxed">
              Discover how EZakay is revolutionizing public transportation with our comprehensive suite of features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Passenger App Card */}
            <div className="bg-dark-card/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-accent-green/10 hover:border-accent-green/30 card-hover">
              <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-accent-green" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 font-poppins">Passenger App</h3>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Real-time tracking of modern PUVs via Google Maps</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Verification system for discounts (Student, Senior, PWD)</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <QrCode className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Ride verification with QR code boarding</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Ruler className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Automated fare calculation based on distance</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FileText className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Ride history tracking and e-receipts</span>
                </li>
              </ul>
            </div>

            {/* Driver App Card */}
            <div className="bg-dark-card/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-accent-green/10 hover:border-accent-green/30 card-hover">
              <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <Car className="w-8 h-8 sm:w-10 sm:h-10 text-accent-green" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 font-poppins">Driver App</h3>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Users className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Displays booked passengers with destination info</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Navigation className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Real-time driver location sharing via GPS</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Tracks fare payments in real-time</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <ListFilter className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Automatically sorts passengers by destination</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Stores boarding and exit logs</span>
                </li>
              </ul>
            </div>

            {/* Operator App Card */}
            <div className="bg-dark-card/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-accent-green/10 hover:border-accent-green/30 card-hover">
              <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-8 h-8 sm:w-10 sm:h-10 text-accent-green" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 font-poppins">Operator App</h3>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <BarChart className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Real-time analytics and performance metrics</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Wallet className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Digital wallet and payment management</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Users className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Driver and vehicle management system</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FileText className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Automated reports and documentation</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Settings className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-poppins font-light pt-0.5">Customizable route and fare settings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-started" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-green via-accent-green/90 to-accent-green/80 text-white text-center px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl space-y-10 relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight mb-6 font-poppins tracking-tight">
            Ready to Modernize Your Commute?
          </h2>
          <p className="text-lg md:text-xl text-white/95 font-poppins font-light leading-relaxed max-w-2xl mx-auto">
            Be part of the digital transport movement transforming Tacloban City.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
            <Link href="/download" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-accent-green font-bold rounded-full shadow-2xl hover:shadow-white/30 hover:scale-110 transition-all duration-300 font-poppins text-lg">
              Download
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
            <Link href="/learn-more" className="inline-flex items-center px-10 py-5 bg-dark-card/90 backdrop-blur-xl text-white font-bold rounded-full border-2 border-white/30 hover:bg-dark-card hover:border-white/50 transition-all duration-300 hover:scale-110 font-poppins text-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

