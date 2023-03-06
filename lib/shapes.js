// super class called shape containing a constructor function with three methods and three properties
class Shapes {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  // added for required test, not utilizing method to complete project parameters
  setColor(inputColor) {
    return this.shapeColor = inputColor;
  }

  // creates the dynamic line of code that depends on shape picked by user
  render() {
    return `${this.shapeColor}`;
  }
  
  // creates full SVG text
  generateSVG() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    ${this.render()}
    <text x="150" y="100" font-size="40" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.text}</text>
    </svg>
    `
  }
}

// creates triangle subclass, overwriting render's definition
class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />`
  }
}

// creates circle subclass, overwriting render's definition
class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />`
  }
}

// creates square subclass, overwriting render's definition
class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`
  }
}

// export of three used subclasses
module.exports = { Square, Circle, Triangle };