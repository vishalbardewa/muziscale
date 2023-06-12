import { motion } from 'framer-motion';
import { useState } from 'react';

import { exploreWorlds } from '@/constants';
import styles from '@/styles';
import { staggerContainer } from '@/utils/motion';

import { TitleText, TypingText } from './CustomTexts';
import ExploreCard from './ExploreCard';

const Explore = () => {
  const [active, setActive] = useState('piano');
  return (
    <section className={`${styles.paddings} bg-black`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title="Explore"
          textStyles="text-white text-center text-xl "
        />
        <TitleText
          title={
            <>
              Choose the course you want
              <br className="hidden md:block" /> to explore
            </>
          }
          textStyles="text-center"
        />

        <div className="mt-[50px] flex min-h-[70vh] flex-col gap-5 lg:flex-row">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
