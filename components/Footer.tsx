import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-card text-gray-200 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl border border-accent-green/10">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text font-poppins">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
              We'd love to hear from you. Whether you're a commuter, driver, or operator — let's work together to build smart mobility.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4 p-8 bg-dark-card/50 backdrop-blur rounded-2xl border border-accent-green/10 hover:border-accent-green/30 card-hover">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-green/20 to-accent-green/10 rounded-xl flex items-center justify-center mx-auto">
                  <Mail className="w-7 h-7 text-accent-green" />
                </div>
                <h3 className="font-bold text-xl font-poppins">Email Us</h3>
                <a href="mailto:ezakay25@gmail.com" className="text-accent-green hover:text-accent-green/80 transition-colors duration-300 font-poppins font-medium">
                  info@ezakay.ph
                </a>
              </div>
              
              <div className="space-y-4 p-8 bg-dark-card/50 backdrop-blur rounded-2xl border border-accent-green/10 hover:border-accent-green/30 card-hover">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-green/20 to-accent-green/10 rounded-xl flex items-center justify-center mx-auto">
                  <MapPin className="w-7 h-7 text-accent-green" />
                </div>
                <h3 className="font-bold text-xl font-poppins">Visit Us</h3>
                <p className="text-gray-400 font-poppins font-light">EZakay HQ — Tacloban City, Philippines</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500 font-poppins">
          <p>&copy; 2025 EZakay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

