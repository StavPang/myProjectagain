import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import Image from 'next/image';
import Footer from '@/components/ui/footer';

// Import your header background image
const headerBackgroundImage = 'https://static.vecteezy.com/system/resources/thumbnails/002/082/615/small/header-with-black-and-blue-overlapped-arrows-abstract-modern-banner-with-place-for-your-text-material-design-abstract-widescreen-background-vector.jpg';

export default function ConstructingNoiseMonitoring() {
  return (
    <>
      <div>
        <section
          className="bg-black text-white"
          style={{
            backgroundImage: `url(${headerBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '50vh', // Adjust this height as needed
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome to Constructing Noise Monitoring</h1>
                <p className="text-xl text-gray-600">
                  Constructing noise monitoring is crucial for managing noise levels during construction. It ensures compliance with regulations and minimizes environmental impact. Advanced sound monitoring equipment accurately measures noise, preventing disturbances. Noise impact assessments identify risks, enabling proactive measures for mitigation. Real-time monitoring systems provide immediate data insights for timely adjustments. .
                </p>
              </div>
            </div>
          </div>
        </section>

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

        {/* Features Section */}
        <Features />
        <Footer />
      </div>
    </>
  );
}
