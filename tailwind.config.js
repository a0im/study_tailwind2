/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "1000": "1000px",
        "180": "180px",
        "50": "12.5rem",
      },
      height: {
        "200" : "200px"
      },
      lineHeight : {
        "11": "2.75rem",
      },
      fontSize : {
        "none" : "0"
      }
   },
ns: [],
};
