import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';

export default function ConstructingNoiseMonitoring() {
  return (
    <div>
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Welcome to Constructing Noise Monitoring</h1>
              <p className="text-xl text-gray-600">Explore our services and solutions for noise monitoring in construction projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Services Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl text-center mb-8">Our Services</h2>
          <p className="text-xl text-center text-gray-600">
            We offer a range of comprehensive services for monitoring and controlling noise levels in construction environments. Our services include:
          </p>
          <ul className="list-disc list-inside text-lg mt-6">
            <li>Noise Impact Assessments</li>
            <li>Real-time Noise Monitoring</li>
            <li>Construction Site Noise Surveys</li>
            <li>Noise Control Solutions</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
