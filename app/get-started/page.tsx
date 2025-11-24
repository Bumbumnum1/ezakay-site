import Link from 'next/link';

export default function GetStarted() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-accent-green to-accent-green/80 text-white text-center px-4 sm:px-6 pt-16 pb-8 sm:pb-16">
      <div className="max-w-3xl space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Ready to Modernize Your Commute?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90">
          Be part of the digital transport movement transforming Tacloban City.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 sm:mt-8">
          <Link href="/download" className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-accent-green font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-105">
            Download
          </Link>
          <Link href="/learn-more" className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 bg-dark-card text-white font-semibold rounded-full border-2 border-white/20 hover:bg-dark-card/80 transition-all hover:scale-105">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

