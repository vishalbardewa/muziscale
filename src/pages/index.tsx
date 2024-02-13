import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import Explore from "@/components/Explore";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muziscale - Become a professional musician in 3 months</title>
        <meta
          name="Muziscale - Become a professional musician in 3 months"
          content="Transform your passion into expertise with Muziscale! Elevate your musical journey in just 3 months and become a professional musician. Unleash your potential now!"
        />
        <meta name="robots" content="index,follow"></meta>
        <meta property="og:title" content="Muziscale - Become a professional musician in 3 months"></meta>
        <meta property="og:site_name" content="Muziscale"></meta>
        <meta property="og:locale" content="en"></meta>
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
