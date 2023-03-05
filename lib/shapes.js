class Shapes {
  constructor() {
    this.xposition = 150;
    this.yposition = 100
  }

  getArea = function() {};
}

class Triangle extends Shapes {
  constructor(height, baseLength) {
    super();
    this.height = height;
    this.baseLength =baseLength;
  }

  getArea = function() {
    return (this.height*this.baseLength)/2;
  }
}

class Circle extends Shapes {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  getArea = function() {
    return Math.PI * this.radius *this.radius;
  }
}

class Square extends Shapes {
  constructor(side) {
    super();
    this.side = side;
  }
  
  getArea = function() {
    return this.side *this.side;
  }
}