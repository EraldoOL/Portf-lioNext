import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extends: {
      colors:{
        'e-gray-500': '#737994',
        'e-blue-500': '#8CAAEE',
        'e-blue-900': '#303446',
      }
    }
  },
  plugins: [],
};
export default config;
