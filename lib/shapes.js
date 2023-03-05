class Shapes {
  constructor(text, textcolor, shapecolor) {
    this.text = text;
    this.textcolor = textcolor;
    this.shapecolor = shapecolor;
  }

  generateSpecificShape() {
    return `${this.shapecolor}`;
  }
  
  render() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    ${this.generateSpecificShape()}
    <text x="150" y="100" font-size="40" text-anchor="middle" dominant-baseline="central" fill="${this.textcolor}">${this.text}</text>
    </svg>
    `
  }
}

class Triangle extends Shapes {
  constructor(text, textcolor, shapecolor) {
    super(text, textcolor, shapecolor);
  }

  generateSpecificShape() {
    return `<polygon points="150,20 40,180 260,180" fill="${this.shapecolor}" />`
  }

}

class Circle extends Shapes {
  constructor(text, textcolor, shapecolor) {
    super(text, textcolor, shapecolor);
  }
  generateSpecificShape() {
    return `<circle cx="150" cy="100" r="75" fill="${this.shapecolor}" />`
  }
}

class Square extends Shapes {
  constructor(text, textcolor, shapecolor) {
    super(text, textcolor, shapecolor);
  }
  generateSpecificShape() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.shapecolor}"/>`
  }
}

module.exports = { Square, Circle, Triangle };