import CTA from './(components)/CTA';
import Cards from './(components)/Cards';
import FeatureRow from './(components)/FeatureRow';
import Footer from './(components)/Footer';
import HeroSection from './(components)/HeroSection';
import Testimonial from './(components)/Testimonial';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureRow />
      <Cards />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}
