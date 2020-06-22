/**
 * Variabless
 */

const colors = {
	lightGrey: '#f2f2f2',
	lightGreen: '#cce6e7',
	darkGreen: '#529c9c',
}

module.exports = {
	theme: {
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
