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
    extend: {},
  },
  variants: {},
  plugins: [],
};
