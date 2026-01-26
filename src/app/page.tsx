import Hero3D from '@/components/home/Hero3D';
import QuickStats from '@/components/home/QuickStats';
import HomeAbout from '@/components/home/HomeAbout';
import ServicesSection from '@/components/home/ServicesSection';
import HomeSafety from '@/components/home/HomeSafety';
import Testimonials from '@/components/home/Testimonials';
import CtaSection from '@/components/home/CtaSection';

export const metadata = {
  title: 'Elekon Engineers | Best Electrical Contractors in Mysore',
  description: 'Top-rated electrical services in Mysore. Experts in residential wiring, commercial electrical systems, solar rooftop, and temporary power solutions.',
};

export default function Home() {
  return (
    <main>
      <Hero3D />
      <QuickStats />
      <HomeAbout />
      <ServicesSection />
      <HomeSafety />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
