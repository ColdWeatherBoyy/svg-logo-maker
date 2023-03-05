const { prompt } = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    message: 'Enter up to three characters for your logo, please.',
    name: 'logotext'
  },
  {
    type: 'input',
    message: 'Please select a color, either with a color keyword or a hexadecimal number.',
    name: 'logocolor'
  },
  {
    type: 'list',
    message: 'Pick one of the shapes below.',
    name: 'shape',
    choices: ["circle", "triangle", "square"],
    default: "circle"
  },
]

const makeFile = function(answers) {
  fs.writeFile(filename, answers, "utf8", (err) => err ? console.log(err) : console.log("SVG MADE"));
}

const init = function () {
  prompt(questions)
    .then((answers) => makeFile("newSVG.svg", answers))
}

init();