class NavigationToggler {
  constructor(name) {
    this.name = name;
    
    this.test();
  }

  test() {
    console.log('Nice, ', this.name);
  }
}

export default NavigationToggler;