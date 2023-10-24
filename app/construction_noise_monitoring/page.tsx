import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import Image from 'next/image';

export default function ConstructingNoiseMonitoring() {
  return (
    <div>
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Welcome to Constructing Noise Monitoring</h1>
              <p className="text-xl text-gray-600">Constructing noise monitoring is crucial for managing noise levels during construction. It ensures compliance with regulations and minimizes environmental impact. Advanced sound monitoring equipment accurately measures noise, preventing disturbances. Noise impact assessments identify risks, enabling proactive measures for mitigation. Real-time monitoring systems provide immediate data insights for timely adjustments. Site surveys evaluate the overall noise footprint, facilitating tailored control plans. Solutions like sound barriers and scheduling restrictions mitigate excessive noise emissions. Integrating noise reduction measures demonstrates commitment to sustainable practices. Collaboration with experts ensures comprehensive noise management aligned with standards. Emphasizing noise monitoring underscores dedication to sustainable development.</p>
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

      {/* Team Photo Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl text-gray-800 mb-4">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="p-4">
              <Image
                src="/team-member1.jpg" // Replace with your image path
                alt="Team Member 1"
                width={200}
                height={200}
              />
              <p className="text-lg mt-2">John Doe</p>
            </div>
            <div className="p-4">
              <Image
                src="/team-member2.jpg" // Replace with your image path
                alt="Team Member 2"
                width={200}
                height={200}
              />
              <p className="text-lg mt-2">Jane Doe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
