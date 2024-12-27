/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,90,144,1) 0%, rgba(0,0,0,1) 67%)",
        'custom-radial2': "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,40,46,1) 22%, rgba(29,89,115,1) 56%, rgba(59,139,187,1) 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
