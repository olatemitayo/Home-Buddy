import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1440px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      pview: { max: "980px" },
      clg: { max: "800px" },
      md: { max: "700px" },
      cmd: { max: "631px" },
      mcmd: { min: "630px" },
      gsm: { max: "586px" },
      gcsm: { max: "500px" },
      csm: { max: "425px" },
      sm: { max: "320px" },
    },
  },
  plugins: [],
};
export default config;
