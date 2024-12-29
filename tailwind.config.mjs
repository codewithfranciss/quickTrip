/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			'text': '#111214',
			'background': '#f9fafb',
			'primary': '#5963ad',
			'secondary': '#9ba3db',
			'accent': '#6472d9',
		   },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
