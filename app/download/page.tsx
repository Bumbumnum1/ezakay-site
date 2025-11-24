import Link from 'next/link';
import { Users2 } from 'lucide-react';

export default function Download() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 min-h-screen">
      <div className="text-center mb-12 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8">
          Download EZakay
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
          Choose your platform and start your journey towards modern public transportation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
        {/* Android Card */}
        <div className="bg-dark-card rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="space-y-4 sm:space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505.145 505.145" className="w-12 h-12 sm:w-14 sm:h-14">
                <g fill="#6FAB75">
                  <path d="m68.541 164.715h-1.294c-16.588 0-30.113 13.568-30.113 30.113v131.107c0 16.61 13.525 30.134 30.113 30.134h1.316c16.588 0 30.113-13.568 30.113-30.134v-131.108c-.022-16.544-13.547-30.112-30.135-30.112z"/>
                  <path d="m113.085 376.54c0 15.229 12.446 27.632 27.675 27.632h29.574v70.817c0 16.631 13.568 30.156 30.113 30.156h1.294c16.61 0 30.156-13.546 30.156-30.156v-70.817h41.33v70.817c0 16.631 13.611 30.156 30.156 30.156h1.273c16.609 0 30.134-13.546 30.134-30.156v-70.817h29.595c15.207 0 27.654-12.403 27.654-27.632v-207.013h-278.954z"/>
                  <path d="m322.041 43.983c1.273-2.461 2.020-5.254 2.020-8.262 0-10.185-8.262-18.469-18.469-18.469-6.06 0-11.381 2.933-14.755 7.394-11.102-7.158-24.649-11.337-39.296-11.337-14.711 0-28.237 4.179-39.339 11.337-3.374-4.461-8.695-7.394-14.755-7.394-10.185 0-18.469 8.284-18.469 18.469 0 3.008.747 5.801 2.020 8.262-18.576 16.413-30.725 41.022-31.319 68.783h201.704c-.616-27.761-12.744-52.37-31.342-68.783z"/>
                  <path d="m437.876 164.715h-1.294c-16.588 0-30.113 13.568-30.113 30.113v131.107c0 16.61 13.525 30.134 30.113 30.134h1.316c16.588 0 30.113-13.568 30.113-30.134v-131.108c-.022-16.544-13.547-30.112-30.135-30.112z"/>
                </g>
              </svg>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">Android App</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-6">Download the beta version for Android</p>
            </div>
            <a href="https://github.com/Bumbumnum1/EZakay-App/releases/latest" target="_blank" rel="noopener noreferrer" className="block bg-accent-green text-white text-center py-3 sm:py-4 rounded-xl hover:bg-accent-green/90 transition-colors font-semibold">
              Download Now
            </a>
            <div className="text-xs sm:text-sm text-gray-400 text-center">
              Version 1.0.0 • Requires Android 8.0 and up
            </div>
          </div>
        </div>

        {/* iOS Card (Coming Soon) */}
        <div className="bg-dark-card/50 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-dark-purple/50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-accent-green text-white px-4 sm:px-6 py-2 rounded-full font-semibold transform rotate-12 text-sm sm:text-base">
              Coming Soon
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 opacity-50">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-12 h-12 sm:w-14 sm:h-14">
                <path fill="#6FAB75" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">iOS App</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-6">Will be available on App Store</p>
            </div>
            <div className="block bg-accent-green/50 text-white text-center py-3 sm:py-4 rounded-xl font-semibold cursor-not-allowed">
              Download
            </div>
            <div className="text-xs sm:text-sm text-gray-400 text-center">
              Coming to iOS devices soon
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-20 text-center max-w-2xl mx-auto px-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Need Help?</h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-6 sm:mb-8">
          If you need assistance with downloading or installing the app, please contact our support team.
        </p>
        <a href="mailto:ezakay25@gmail.com" className="text-accent-green hover:text-accent-green/80 font-medium">
          support@ezakay.ph
        </a>
      </div>

      <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto border-t border-gray-700 pt-12 sm:pt-16 px-4">
        <div className="bg-dark-card rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Are you a Transport Operator or Cooperative?</h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-6">
            Join our growing network of modern transport providers. Let's work together to revolutionize public transportation in Tacloban.
          </p>
          <a href="mailto:ezakay25@gmail.com" className="inline-flex items-center gap-2 bg-accent-green text-white px-6 sm:px-8 py-3 rounded-xl hover:bg-accent-green/90 transition-colors font-semibold text-sm sm:text-base">
            <Users2 className="w-4 h-4 sm:w-5 sm:h-5" />
            Contact Our Partnership Team
          </a>
        </div>
      </div>
    </main>
  );
}

