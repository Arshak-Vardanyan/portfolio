/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStroke: {
        sm: '1px',
        lg: '2px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColorHover: "#FE7F7F",
        primaryColorActive: "#FE4040",
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'inter': ['Inter'],
      }
    },
  },
  plugins: [  function ({ addUtilities }) {
    addUtilities({
      '.text-stroke-white': {
        '-webkit-text-stroke': '1px white',
      },
      '.text-stroke-black': {
        '-webkit-text-stroke': '1px black',
      },
    });
  },],
}; 

// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         primaryColorHover: "#FE7F7F",
//         primaryColorActive: "#FE4040",
//       },
//       fontFamily: {
//         'montserrat': ['Montserrat'],
//         'inter': ['Inter'],


//       }
//     },
//   },
//   plugins: [],
// } satisfies Config;
