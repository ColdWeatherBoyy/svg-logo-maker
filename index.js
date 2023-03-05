const { prompt } = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    message: 'Enter up to three characters for your logo, please.',
    name: 'text',
    validate: function(input) {
      if (input.length < 3 && input.length > 0) {
      return true
      } else {
        return 'Please enter text over 0 and at least 3 characters long'
      }
    }
  },
  {
    type: 'input',
    message: 'Please select a color, either with a color keyword or a hexadecimal number, for your text.',
    name: 'textcolor'
  },
  {
    type: 'list',
    message: 'Pick one of the shapes below.',
    name: 'shape',
    choices: ["circle", "triangle", "square"],
    default: "circle"
  },
  {
    type: 'input',
    message: 'Please select a color, either with a color keyword or a hexadecimal number, for your shape',
    name: 'shapecolor'
  },
]

const makeFile = function(filename, answers) {
  fs.writeFile(filename, answers, "utf8", (err) => err ? console.log(err) : console.log("Generated logo.svg" ));
}

const svgText = function(answers) {
  const { shapecolor, textcolor, text, shape } = answers;
  let newSVG;
  if (shape === "circle") {
    newSVG = new Circle(text, textcolor, shapecolor)
  } else if (shape === "square") {
    newSVG = new Square(text, textcolor, shapecolor)
  } else {
    newSVG = new Triangle(text, textcolor, shapecolor)
  }
  return newSVG.generateSVG()
}

const init = function () {
  prompt(questions)
    .then((answers) => makeFile("logo.svg", svgText(answers)))
}

init();