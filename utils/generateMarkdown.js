

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Function to render badge
function renderBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;  }
 
  else if (license === "Apache") { 
    `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;
    
  }
  else if (license === "GPL") {
    `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n`;
  }
  else if (license === "None") {
    return '';
  
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
// Function to render link

//   if (license !== "None") {
//     return (
//       `\n* [License](#license)\n`
//     )
//   }
//   return ''
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
// Function to render license section
  if (license !== "None") {
    return (
      `## License 📛
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}
### Motivation
${data.motivation}
### Problem Solved
${data.problem_solved}
### Learnings
${data.learnings}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

##Contributing
${data.credits}

## Tests
${data.tests}

## License
${data.license}

## Questions
If you have any questions, please contact me at ${data.email}.
You can also find more of my work at [${data.github}]

`;
}

module.exports = generateMarkdown;

