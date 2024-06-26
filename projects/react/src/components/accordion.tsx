import { generateClasses } from "@lib/utils";
import { FC, HTMLProps, useMemo } from "react";
import * as styles from "./accordion.module.scss";
// import "../../scss/components/accordion.scss";

console.log(styles);

export const Accordion: FC<HTMLProps<HTMLDetailsElement>> = ({
  children,
  className = "",
  title,
  ...props
}) => {
  // const classes = useMemo(() => {
  //   return generateClasses({
  //     accordion: true,
  //     [className]: className,
  //   });
  // }, [className]);

  return (
    // <details className={classes} {...props}>
    <details className={styles.accordion} {...props}>
      <summary>{title}</summary>

      {children}
    </details>
  );
};
