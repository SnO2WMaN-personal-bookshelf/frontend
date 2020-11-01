module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/**/*.jsx', 'src/**/*.tsx'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      spacing: {
        [18 * 4]: `${18}rem` /* 72 */,
        [21 * 4]: `${21}rem` /* 84 */,
        [24 * 4]: `${24}rem` /* 96 */,
        [27 * 4]: `${27}rem` /* 108 */,
        [30 * 4]: `${30}rem` /* 120 */,
      },
    },
  },
  variants: {},
  plugins: [],
};
