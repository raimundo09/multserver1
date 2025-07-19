import Header from '@/components/Header';
import TermsOfService from '@/components/TermsOfService';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TermsOfService />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TermsOfServicePage; 