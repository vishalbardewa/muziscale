import { motion } from 'framer-motion';
import Link from 'next/link';

import { slideIn, staggerContainer, textVariant } from '@/utils/motion';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-teal-100/20 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-teal-600/10 ring-1 ring-teal-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8"
      >
        <div className="mx-auto max-w-2xl pt-12 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 lg:pt-0 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <motion.h1
            variants={textVariant(1.1)}
            className="max-w-2xl text-4xl font-bold leading-none tracking-tight text-black sm:text-6xl lg:col-span-2 xl:col-auto"
          >
            Unleash your musical potential
          </motion.h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <motion.p
              variants={textVariant(1.2)}
              viewport={{ once: true, amount: 0.25 }}
              className="text-lg leading-8 text-gray-700"
            >
              We’re changing the way you learn music. Learn piano, guitar, and
              vocal lessons at Muziscale.{' '}
              <span className="font-bold">
                Discover the joy of playing and expressing yourself{' '}
              </span>{' '}
              through captivating melodies. Join us today and let the harmonious
              adventure begin!
            </motion.p>
            <motion.div
              variants={textVariant(1.3)}
              viewport={{ once: true, amount: 0.25 }}
              className="mt-10 flex items-center gap-x-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/"
                  className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Get started
                </Link>
              </motion.div>
              <Link
                href="/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Reach Us <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
          <motion.img
            variants={slideIn('right', 'tween', 0.2, 1)}
            src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
            alt=""
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}
