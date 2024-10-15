/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'primary-100': '#f3f4f7',
			'primary-200': '#cdd1df',
			'secondary': '#4c5a6b',
			'accent': '#ba3b46',
			'd-primary-100': '#254441',
			'd-primary-200': '#1d3533',
			'd-secondary': '#89a7a7',
			'd-accent': '#f1ab86'
		}
	},
	extend : {
		screens: {
			print: { raw: 'print' },
		  }
	},
	plugins: [],
}
