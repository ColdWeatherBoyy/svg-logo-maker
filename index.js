const { prompt } = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    message: 'Enter up to three characters for your logo, please.',
    name: 'text'
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
  const {shapecolor, textcolor, text, shape } = answers;
  if (shape === "circle") {
  return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    <circle cx="150" cy="100" r="75" fill="${shapecolor}" />
    <text x="150" y="100" font-size="40" text-anchor="middle" dominant-baseline="central" fill="${textcolor}">${text}</text>
    </svg>
    `
  } else if (shape === "square") {
    return `
      <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <rect x="75" y="25" width="150" height="150" fill="${shapecolor}"/>
      <text x="150" y="100" font-size="40" text-anchor="middle" dominant-baseline="central" fill="${textcolor}">${text}</text>
      </svg>
      `
  } else {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    <polygon points="150,20 40,180 260,180" fill="${shapecolor}" />
    <text x="150" y="100" font-size="40" text-anchor="middle" dominant-baseline="central" fill="${textcolor}">${text}</text>
    </svg>
    `
  }
}

const init = function () {
  prompt(questions)
    .then((answers) => makeFile("logo.svg", svgText(answers)))
}

init();