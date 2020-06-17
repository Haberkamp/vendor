export default class NavigationToggler {
	/**
	 * Toggles state of navigation when the toggle element is clicked
	 * @param {string} toggleElement CSS query wich points to the toggle element
	 * @param {string} navigationElement CSS query wich points to the navigation element
	 * @param {string} toggleClass Class that toggles the state of the navigation
	 */
	constructor(toggleElement, navigationElement, toggleClass) {
		this.toggleElement = document.querySelector(toggleElement)
		this.navigationElement = document.querySelector(navigationElement)
		this.toggleClass = toggleClass

		// automatically add event listener
		this.addListener()
	}

	/**
	 * Checks if navigation is expanded or collapsed.
	 * It does it so by checking wether the element contains `this.toggleClass`
	 * in its class attribute
	 * @returns {boolean} returns true when nav is collapsed otherwise it returns true
	 */
	isNavOpenned() {
		const classAttribute = this.navigationElement.getAttribute('class')

		return classAttribute.includes(this.toggleClass)
	}

	expandNavigation() {
		const initialClassAttribute = this.navigationElement.getAttribute('class')
		const newClassAttribute = initialClassAttribute.concat(
			' ',
			this.toggleClass
		)

		this.navigationElement.setAttribute('class', newClassAttribute)
	}

	collapseNavigation() {
		const initialClassAttribute = this.navigationElement.getAttribute('class')
		const newClassAttribute = initialClassAttribute.replace(
			this.toggleClass,
			''
		)

		this.navigationElement.setAttribute('class', newClassAttribute)
	}

	/**
	 * This method toggles the state of the navigation
	 * @returns {void}
	 */
	onToggle() {
		const isOpenned = this.isNavOpenned()

		if (isOpenned) {
			this.collapseNavigation()

			return
		}

		this.expandNavigation()
	}

	addListener() {
		this.toggleElement.addEventListener('click', this.onToggle.bind(this))
	}
}
