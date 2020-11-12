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
      inset: {
        100: '100%',
      },
      height: {
        // n/2
        'screen-1/2': `${(100 / 2) * 1}vh`,
        'screen-2/2': `${(100 / 2) * 2}vh`,
        // n/4
        'screen-1/4': `${(100 / 4) * 1}vh`,
        'screen-2/4': `${(100 / 4) * 2}vh`,
        'screen-3/4': `${(100 / 4) * 3}vh`,
        'screen-4/4': `${(100 / 4) * 4}vh`,
        // n/5
        'screen-1/5': `${(100 / 5) * 1}vh`,
        'screen-2/5': `${(100 / 5) * 2}vh`,
        'screen-3/5': `${(100 / 5) * 3}vh`,
        'screen-4/5': `${(100 / 5) * 4}vh`,
        'screen-5/5': `${(100 / 5) * 5}vh`,
      },
      spacing: {
        [18 * 4]: `${18}rem` /* 72 */,
        [21 * 4]: `${21}rem` /* 84 */,
        [24 * 4]: `${24}rem` /* 96 */,
        [27 * 4]: `${27}rem` /* 108 */,
        [30 * 4]: `${30}rem` /* 120 */,
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};
