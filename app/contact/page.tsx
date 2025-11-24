import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-card to-dark-purple px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-5xl w-full">
        <div className="bg-dark-card backdrop-blur rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
          <div className="text-center space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent-green to-accent-green/80 text-transparent bg-clip-text mb-4">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              We'd love to hear from you. Whether you're a commuter, driver, or operator — let's work together to build smart mobility.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="space-y-4 p-4 sm:p-6 bg-dark-purple/50 rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mx-auto">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                </div>
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white mb-3">Email Us</h3>
                <a href="mailto:ezakay25@gmail.com" className="text-accent-green hover:text-accent-green/80 transition text-xs sm:text-sm md:text-base">
                  info@ezakay.ph
                </a>
              </div>
              
              <div className="space-y-4 p-4 sm:p-6 bg-dark-purple/50 rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mx-auto">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                </div>
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white mb-3">Visit Us</h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">EZakay HQ — Tacloban City, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

