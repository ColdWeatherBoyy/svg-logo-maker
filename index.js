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
  fs.writeFile(filename, answers, "utf8", (err) => err ? console.log(err) : console.log("Generated logo.svg" ));
}

const svgText = function(answers) {
  if (answers.shape === "circle") {
  return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="${answers.radius}" fill="${answers.logocolor}" />
    <text x="150" y="100" font-size="60" text-anchor="middle" fill="white">${answers.logotext}</text>
    </svg>
    `
  } else if (answers.shape === "square") {
    return `
      <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect cx="150" cy="100" width="${answers.side}" height="${answers.side}" fill="${answers.logocolor}" />
      <text x="150" y="100" font-size="60" text-anchor="middle" fill="white">${answers.logotext}</text>
      </svg>
      `
  } else {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 0,200 300,200" fill="${answers.logocolor}" />
    <text x="150" y="100" font-size="60" text-anchor="middle" fill="white">${answers.logotext}</text>
    </svg>
    `
  }
}

const init = function () {
  prompt(questions)
    .then((answers) => makeFile("logo.svg", svgText(answers)))
}

init();