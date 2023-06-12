import Head from 'next/head';

import { CallToAction } from '@/components/CallToAction';
import Explore from '@/components/Explore';
import { Faqs } from '@/components/Faqs';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muziscale - Become a professional musician in 3 months</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Explore />
        {/* <PrimaryFeatures /> */}
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
