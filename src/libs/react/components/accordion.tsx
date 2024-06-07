import React, { FC, HTMLProps, useMemo } from 'react';
import { generateClasses } from '../../utils/index';

export const Accordion: FC<HTMLProps<HTMLDetailsElement>> = ({
  children,
  className = '',
  title,
  ...props
}) => {
  const classes = useMemo(() => {
    return generateClasses({
      accordion: true,
      [className]: className,
    });
  }, [className]);

  return (
    <details className={classes} {...props}>
      <summary>{title}</summary>

      {children}
    </details>
  );
};
