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
        72: `${72 / 4}rem`,
        84: `${84 / 4}rem`,
        96: `${96 / 4}rem`,
      },
    },
  },
  variants: {},
  plugins: [],
};
