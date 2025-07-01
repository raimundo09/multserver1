
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ContentShowcase from '@/components/ContentShowcase';
import DemoGallery from '@/components/DemoGallery';
import SavingsCalculator from '@/components/SavingsCalculator';
import Features from '@/components/Features';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingNotifications from '@/components/FloatingNotifications';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <ContentShowcase />
      <DemoGallery />
      <SavingsCalculator />
      <Features />
      <SocialProof />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingNotifications />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
