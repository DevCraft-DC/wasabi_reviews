import { type HTMLAttributes, type ReactNode } from 'react';

import { useInView } from 'react-intersection-observer';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  img: string;
}

export const Card = ({ children, img, ...props }: CardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} {...props}>
      {inView ? <img src={img} alt="" /> : <img src="" alt="loading img..." />}
      {children}
    </div>
  );
};
