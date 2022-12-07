const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      boxShadow: {
        'ob': '0.5rem 0.5rem black',
        'ol': '0.2rem 0.2rem black',
      }
    },
  },

  plugins: [],
};

module.exports = config;
