import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import KeyNumbersSection from '@/components/home/KeyNumbersSection';
import GuestsSection from '@/components/home/GuestsSection';
import SponsorsSection from '@/components/home/SponsorsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <KeyNumbersSection />
      <GuestsSection />
      <SponsorsSection />
    </Layout>
  );
};

export default Index;
