import Header from '@/components/Header';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PrivacyPolicy />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicyPage; 