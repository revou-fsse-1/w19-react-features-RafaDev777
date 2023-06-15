/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				mountain: "url('/src/assets/background-image.jpeg')",
			},
		},
	},
	plugins: [],
};
