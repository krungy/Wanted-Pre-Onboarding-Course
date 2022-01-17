const breakPoints = {
  large: 1200,
  medium: 992,
  small: 768,
};

const mediaQuery = (breakpoint, minOrMax = 'max') => {
  return `@media (${minOrMax}-width: ${breakPoints[breakpoint]})`;
};

const theme = { breakPoints, mediaQuery };

export default theme;
