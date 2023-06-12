import Image from 'next/image';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import backgroundImage from '@/public/assets/images/background-call-to-action.png';

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-teal-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Begin your musical journey today and unleash your inner talent. Sign
            up now to experience personalized music instruction and embark on a
            path of musical mastery.
          </p>
          <Button
            href="https://tally.so/r/mVjbQ6"
            color="white"
            className="mt-10"
            target="__blank"
          >
            Join Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
