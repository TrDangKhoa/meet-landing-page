module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      "very-light-blue": "#e0e8ff",
      "light-periwinkle": "#d6e1ff",
      blurple: "#382ae1",
      "pale-grey": "#f7f9ff",
      "blue-grey": "#717fa6",
      "dark-blue-grey": "#1f2e55",
    },
    fontSize: {
      14: "0.875rem",
      15: "0.9375rem",
      16: "1rem",
      28: "1.75rem",
    },
    lineHeight: {
      26: "1.625rem",
    },
    spacing: {
      0: "0rem",
      6: "0.375rem",
      15: "0.9375rem",
      16: "1rem",
      17: "1.0625rem",
      20: "1.25rem",
      24: "1.5rem",
      25: "1.5625rem",
      32: "2rem",
      45: "2.8125rem",
      48: "3rem",
    },
    borderRadius: {
      11: "0.6875rem",
      20: "1.25rem",
      full: "9999px",
    },
    boxShadow: {
      "btn-primary": "0 20px 20px 0 rgba(56, 42, 225, 0.19)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
