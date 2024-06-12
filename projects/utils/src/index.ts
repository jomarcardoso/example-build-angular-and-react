export function generateClasses(
  object: Record<string, boolean | string | undefined | null>
): string {
  return Object.entries(object)
    .reduce((classes, [className, statement]) => {
      if (statement) {
        return `${classes} ${className}`;
      }

      return classes;
    }, '')
    .trim();
}

export const kebabCase = (string = '') =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
