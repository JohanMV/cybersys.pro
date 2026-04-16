'use client';

import { motion } from 'motion/react';
import { TypeAnimation as ReactTypeAnimation } from 'react-type-animation';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type LibrarySpeedType = ComponentProps<typeof ReactTypeAnimation>['speed'];

type SpeedType = number | 'slow' | 'normal' | 'fast';

interface TypeAnimationProps {
  words?: string[];
  className?: string;
  typingSpeed?: SpeedType;
  deletingSpeed?: SpeedType;
  pauseDuration?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

const TypeAnimation = ({
  words = [' existence', ' reality', ' the Internet'],
  className,
  typingSpeed = 50,
  deletingSpeed = 50,
  pauseDuration = 1000,
  gradientFrom = 'blue-500',
  gradientTo = 'purple-600',
}: TypeAnimationProps) => {
  const sequence = words.flatMap((word) => [word, pauseDuration]);

  return (
    <motion.span
      className={cn(
        `bg-clip-text text-transparent bg-linear-to-r from-${gradientFrom} to-${gradientTo}`,
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ReactTypeAnimation
        sequence={sequence}
        wrapper='span'
        repeat={Infinity}
        className=''
        speed={typingSpeed as LibrarySpeedType}
        deletionSpeed={deletingSpeed as LibrarySpeedType}
      />
    </motion.span>
  );
};

export default TypeAnimation;


