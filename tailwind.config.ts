import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    data: {
      reverse: 'reverse~="true"',
    },
    extend: {
      screens: {
        xs: '475px',
      },
      colors: {
        foreground: {
          DEFAULT: '#FFFFFF',
        },
        background: {
          DEFAULT: '#16171d',
          900: '#16171d',
          300: '#282A36',
        },
        background2: {
          DEFAULT: '#44475A',
        },
        comment: {
          DEFAULT: '#6272A4',
        },
        green: {
          DEFAULT: '#50FA7B',
        },
        red: {
          DEFAULT: '#FF5555',
        },
        cyan: {
          DEFAULT: '#7bccef',
        },
      },
      transitionProperty: {
        'mask': 'mask-size',
      },
      height: {
        'screen-2': '200vh',
      },
      flexGrow: {
        2: '2',
      },
    },
  },
  plugins: [],
} satisfies Config;
