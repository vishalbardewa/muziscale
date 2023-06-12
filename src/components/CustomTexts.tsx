/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText: any = ({ title, textStyles }: any) => (
  <motion.p
    variants={textContainer}
    className={`text-[14px] font-normal ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: any) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] text-[40px] font-bold leading-none text-white md:text-[64px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
