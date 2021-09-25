module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      dark: "#1b1937",
      "lightish-purple": "#ab5cdb",
    },
    spacing: {
      16: "1rem",
      24: "1.5rem",
      28: "1.75rem",
      31: "1.9375rem",
      32: "2rem",
      40: "2.5rem",
      60: "3.75rem",
      72: "4.5rem",
    },
    fontFamily: {
      lexend: "Lexend",
    },
    borderRadius: {
      8: "0.5rem",
    },
    lineHeight: {
      25: "1.5625rem",
      32: "2rem",
      44: "2.75rem",
    },
    fontSize: {
      12: "0.75rem",
      15: "0.9375rem",
      24: "1.5rem",
      28: "1.75rem",
      36: "2.25rem",
    },
    boxShadow: {
      lg: "0px 20px 20px -10px rgba(23, 25, 41, 0.203087)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
