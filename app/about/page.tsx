import { Settings, ShieldCheck, Users2, User, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-card to-dark-purple px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-dark-card rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="bg-gradient-to-r from-accent-green to-accent-green/80 p-1">
            <div className="bg-dark-card p-6 sm:p-8 rounded-t-xl sm:rounded-t-2xl">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-accent-green/80 text-center mb-6">
                About EZakay
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center max-w-2xl mx-auto">
                Revolutionizing public transportation through innovative digital solutions
              </p>
            </div>
          </div>
          
          <div className="p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-dark-purple p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 hover:bg-dark-purple/80 transition-colors">
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3">Digital Management System</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                      A comprehensive mobile-based platform optimizing modern PUV operations in Tacloban with seamless stakeholder coordination.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-dark-purple p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 hover:bg-dark-purple/80 transition-colors">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3">Secure Transactions</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      Integrated with GCash for cashless payments, ensuring safe and convenient transactions for all users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-dark-purple p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 hover:bg-dark-purple/80 transition-colors">
                    <Users2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3">Collaborations</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      Collaborating with TAVAGCADOTCO and NORBATCO to implement modern transport solutions across the city.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-dark-purple p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 hover:bg-dark-purple/80 transition-colors">
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3">Smart Features</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      Automated fare computation, discount management via ID verification, and comprehensive analytics for operators.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col items-center gap-6">
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Current Available Transport Cooperatives</p>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12">
                  <div className="flex items-center gap-3 bg-dark-purple px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl">
                    <ShieldCheck className="w-5 h-5 text-accent-green" />
                    <span className="text-sm sm:text-base text-gray-300 font-semibold">TAVAGCADOTCO</span>
                  </div>
                  <div className="flex items-center gap-3 bg-dark-purple px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl">
                    <ShieldCheck className="w-5 h-5 text-accent-green" />
                    <span className="text-sm sm:text-base text-gray-300 font-semibold">NORBATCO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Developers Section */}
            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="flex flex-col items-center gap-8">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Capstone Team</h3>
                  <p className="text-sm text-gray-400">A thesis project in fulfillment of Capstone 1</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                  <div className="flex flex-col items-center p-6 bg-dark-purple rounded-2xl hover:bg-dark-purple/80 transition-colors">
                    <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mb-4">
                      <User className="w-10 h-10 text-accent-green" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Merielle O. Ramirez</h4>
                    <p className="text-sm text-gray-400">Research Lead & Project Strategist</p>
                    <a href="https://www.linkedin.com/in/merielle-ramirez-80430336b/" target="_blank" rel="noopener noreferrer" className="mt-3 text-accent-green hover:text-accent-green/80 flex items-center gap-1 transition">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-6 bg-dark-purple rounded-2xl hover:bg-dark-purple/80 transition-colors">
                    <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mb-4">
                      <User className="w-10 h-10 text-accent-green" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Melvin Jomar D.Nicer</h4>
                    <p className="text-sm text-gray-400">Systems Analysis & Design Specialist</p>
                    <a href="https://ph.linkedin.com/in/melvinicer" target="_blank" rel="noopener noreferrer" className="mt-3 text-accent-green hover:text-accent-green/80 flex items-center gap-1 transition">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-6 bg-dark-purple rounded-2xl hover:bg-dark-purple/80 transition-colors">
                    <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mb-4">
                      <User className="w-10 h-10 text-accent-green" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Kurt Russel Destrajo</h4>
                    <p className="text-sm text-gray-400">System Developer</p>
                    <a href="https://www.linkedin.com/in/kurt-russel-destrajo-36074a32a/" target="_blank" rel="noopener noreferrer" className="mt-3 text-accent-green hover:text-accent-green/80 flex items-center gap-1 transition">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

