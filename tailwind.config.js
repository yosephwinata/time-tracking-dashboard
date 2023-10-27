// tailwind.config.js
module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: [
        // Prevent these classes from being purged as we need to add them dynamically from json
        "bg-orange",
        "bg-soft-blue",
        "bg-light-red",
        "bg-lime-green",
        "bg-violet",
        "bg-yellow",
      ],
    },
  },
  theme: {
    colors: {
      blue: "hsl(246, 80%, 60%)",
      orange: "hsl(15, 100%, 70%)",
      "soft-blue": "hsl(195, 74%, 62%)",
      "light-red": "hsl(348, 100%, 68%)",
      "lime-green": "hsl(145, 58%, 55%)",
      violet: "hsl(264, 64%, 52%)",
      yellow: "hsl(43, 84%, 65%)",
      "very-dark-blue": "hsl(226, 43%, 10%)",
      "dark-blue": "hsl(235, 46%, 20%)",
      "desaturated-blue": "hsl(235, 45%, 61%)",
      "pale-blue": "hsl(236, 100%, 87%)",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [],
};
