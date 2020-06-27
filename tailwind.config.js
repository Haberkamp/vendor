/**
 * Variables
 */

const colors = {
	lightGrey: '#f2f2f2',
	lightGreen: '#cce6e7',
	darkGreen: '#529c9c',
}

module.exports = {
	theme: {
		fontFamily: {
			sans: ['Rubik', 'Helvetica', 'Arial', 'sans-serif'],
			mono: ['Roboto Mono', 'monospace'],
		},
		extend: {
			colors: {
				'light-grey': colors.lightGrey,
				'accent-light': colors.lightGreen,
				accent: colors.darkGreen,
			},
			textColor: {
				'light-grey': colors.lightGrey,
				'accent-light': colors.lightGreen,
				accent: colors.darkGreen,
			},
			borderColor: {
				'light-grey': colors.lightGrey,
				'accent-light': colors.lightGreen,
				accent: colors.darkGreen,
			},
		},
	},
	purge: ['./*.hbs', './partials/*.hbs'],
}
