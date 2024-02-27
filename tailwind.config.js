module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "usm-white": "#ffffff",
        "usm-yellow": "#E5B300",
        "usm-blue": "#005E90",
        "usm-darkblue": "#002d46",
        "usm-red": "#D1091E",
        "usm-black": "#333333",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
