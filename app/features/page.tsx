import { MapPin, ShieldCheck, QrCode, Ruler, FileText, Users, Car, Building, Navigation, DollarSign, ListFilter, ClipboardList, BarChart, Wallet, Settings } from 'lucide-react';

export default function Features() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-dark-purple to-dark-card px-4 sm:px-6 pt-16 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Core Features</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Discover how EZakay is revolutionizing public transportation with our comprehensive suite of features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Passenger App Card */}
          <div className="bg-dark-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-dark-purple w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent-green" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Passenger App</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Real-time tracking of modern PUVs via Google Maps</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Verification system for discounts (Student, Senior, PWD)</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Ride verification with QR code boarding</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <Ruler className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Automated fare calculation based on distance</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Ride history tracking and e-receipts</span>
              </li>
            </ul>
          </div>

          {/* Driver App Card */}
          <div className="bg-dark-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-dark-purple w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <Car className="w-6 h-6 sm:w-8 sm:h-8 text-accent-green" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Driver App</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Displays booked passengers with destination info</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Real-time driver location sharing via GPS</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Tracks fare payments in real-time</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <ListFilter className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Automatically sorts passengers by destination</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Stores boarding and exit logs</span>
              </li>
            </ul>
          </div>

          {/* Operator App Card */}
          <div className="bg-dark-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-dark-purple w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <Building className="w-6 h-6 sm:w-8 sm:h-8 text-accent-green" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Operator App</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <BarChart className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Real-time analytics and performance metrics</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Digital wallet and payment management</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Driver and vehicle management system</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Automated reports and documentation</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark-purple p-2 rounded-lg sm:rounded-xl">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                </div>
                <span className="text-sm sm:text-base text-gray-300">Customizable route and fare settings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

