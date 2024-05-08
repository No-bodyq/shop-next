/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ski-img": "url('/ski.jpg')",
        "promotion-img": "url('/promotion.jpg')",
        "shoe-img": "url('/shoes.jpg')",
        "jacket-img": "url('/jacket.jpg')",
        "accessories-img": "url('/accessories.jpg')",
        "headwear-img": "url('/headwear.jpg')",
        "bag-img": "url('/bag.jpg')",
        "bottom-img": "url('/bottom.jpg')",
        "footer-img": "url('/ski-footer.jpg')",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
