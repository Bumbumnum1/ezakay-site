import Link from 'next/link';
import { Download, BookOpen, ArrowRight, Smartphone, MapPin, Users, Zap } from 'lucide-react';

export default function GetStarted() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-purple via-dark-card to-dark-purple px-4 sm:px-6 pt-20 pb-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(111,171,117,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(111,171,117,0.1),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/10 border border-accent-green/30 rounded-full mb-4">
              <Zap className="w-4 h-4 text-accent-green" />
              <span className="text-sm font-semibold text-accent-green font-poppins">Get Started Today</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-poppins tracking-tight">
              Ready to Modernize Your{' '}
              <span className="gradient-text">Commute?</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-poppins font-light max-w-2xl mx-auto lg:mx-0">
              Be part of the digital transport movement transforming Tacloban City. Join thousands of commuters, drivers, and operators already using EZakay.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link 
                href="/download" 
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-green to-accent-green/80 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-accent-green/30 hover:scale-105 transition-all duration-300 font-poppins text-lg"
              >
                <Download className="w-5 h-5" />
                Download App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/learn-more" 
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-dark-card/80 backdrop-blur-xl text-white font-bold rounded-full border-2 border-accent-green/30 hover:border-accent-green hover:bg-dark-card transition-all duration-300 hover:scale-105 font-poppins text-lg"
              >
                <BookOpen className="w-5 h-5" />
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-dark-card/80 backdrop-blur-xl rounded-3xl p-6 border border-accent-green/10 hover:border-accent-green/30 card-hover">
              <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <Smartphone className="w-7 h-7 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-poppins">Easy Download</h3>
              <p className="text-sm text-gray-400 font-poppins font-light">
                Get the app in minutes. Available for Android devices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-dark-card/80 backdrop-blur-xl rounded-3xl p-6 border border-accent-green/10 hover:border-accent-green/30 card-hover">
              <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-poppins">Real-Time Tracking</h3>
              <p className="text-sm text-gray-400 font-poppins font-light">
                Track PUVs in real-time and never miss your ride.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-dark-card/80 backdrop-blur-xl rounded-3xl p-6 border border-accent-green/10 hover:border-accent-green/30 card-hover">
              <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-poppins">Join the Community</h3>
              <p className="text-sm text-gray-400 font-poppins font-light">
                Connect with thousands of users across Tacloban.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-accent-green/20 to-accent-green/10 rounded-3xl p-6 border border-accent-green/30 hover:border-accent-green/50 card-hover">
              <div className="bg-accent-green/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-poppins">Quick Setup</h3>
              <p className="text-sm text-gray-300 font-poppins font-light">
                Register and start using in under 5 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-dark-card/50 backdrop-blur rounded-2xl border border-accent-green/10">
            <div className="text-3xl font-bold text-accent-green mb-2 font-poppins">3</div>
            <div className="text-sm text-gray-400 font-poppins">Active Users</div>
          </div>
          <div className="text-center p-6 bg-dark-card/50 backdrop-blur rounded-2xl border border-accent-green/10">
            <div className="text-3xl font-bold text-accent-green mb-2 font-poppins">2</div>
            <div className="text-sm text-gray-400 font-poppins">PUVs Tracked</div>
          </div>
          <div className="text-center p-6 bg-dark-card/50 backdrop-blur rounded-2xl border border-accent-green/10">
            <div className="text-3xl font-bold text-accent-green mb-2 font-poppins">2</div>
            <div className="text-sm text-gray-400 font-poppins">Cooperatives</div>
          </div>
          <div className="text-center p-6 bg-dark-card/50 backdrop-blur rounded-2xl border border-accent-green/10">
            <div className="text-3xl font-bold text-accent-green mb-2 font-poppins">24/7</div>
            <div className="text-sm text-gray-400 font-poppins">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

