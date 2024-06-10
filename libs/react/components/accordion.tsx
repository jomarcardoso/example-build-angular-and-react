import React, { FC, HTMLProps, useMemo } from 'react';
import { generateClasses } from '../../utils/index';
import * as styles from './accordion.module.scss';
// import '../../scss/components/accordion.scss';

console.log(styles);

export const Accordion: FC<HTMLProps<HTMLDetailsElement>> = ({
  children,
  className = '',
  title,
  ...props
}) => {
  const classes = useMemo(() => {
    return generateClasses({
      accordion: true,
      teste: true,
      [className]: className,
    });
  }, [className]);

  return (
    <details className={styles.accordion} {...props}>
      <summary>{title}</summary>

      {children}
    </details>
  );
};
