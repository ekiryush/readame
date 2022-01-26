module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fcf4f0",
        brown: "#362a1d",
        darkbrown: "#2e2a26",
        gray: "rgba(0, 0, 0, 0.7)",
      },
      fontFamily: {
        base: '"Josefin Slab", serif',
        cursive: "Sofia, cursive",
      },
      maxHeight: {
        18: "4.5rem",
      },
      height: {
        18: "4.5rem",
      },
      width: {
        128: "128px",
      },
      height: {
        180: "180px",
      },
      screens: {
        xl: "1175px",
        lg: "830px",
        sm: "1px",
      },
    },
  },
  plugins: [],
};
