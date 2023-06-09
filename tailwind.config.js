/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["form.html", "polio.html", "portfolio.html", "cv.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        notosan: "Noto Sans",
        poppins: "Poppins",
        opensans: "Open Sans",
      },
    },
  },
  plugins: [],
};
