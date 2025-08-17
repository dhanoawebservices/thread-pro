import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TrendingProducts from '@/components/TrendingProducts';
import FAQ from '@/components/FAQs';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <TrendingProducts />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}