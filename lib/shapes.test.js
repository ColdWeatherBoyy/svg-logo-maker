const { Square, Circle, Triangle } = require('./shapes');


// test the specific SVG line specific to Triangle class SVGs
describe('Triangle', () => {
  it('should return triangle defined for SVG as a polygon with points that is blue', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  })
})

// test the specific SVG line specific to Square class SVGs
describe('Square', () => {
  it('should return a square defined for SVG as a rect with sides 150px long and that is blue', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue"/>');
  })
})

// test the specific SVG line specific to Circle class SVGs
describe('Circle', () => {
  it('should return a cricle defined for SVG as a cicle with a 75px radius and that is blue', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue" />');
  })
})
