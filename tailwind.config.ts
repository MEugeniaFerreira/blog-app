import type { Config } from 'tailwindcss';

const config: Config = {
  content:[
    './app/**/*.{js,ts,jsx,tsx}', // Scans all files in the `app` directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;