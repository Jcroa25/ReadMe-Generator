// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license) {
  case "ISC License (ISC)":
    return "https://img.shields.io/badge/License-ISC-blue.svg"
  
    case "The MIT License":
    return "https://img.shields.io/badge/License-MIT-yellow.svg"

  case "SIL Open Font License":
    return "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg"

  case "Unlicensed":
    return "https://img.shields.io/badge/license-Unlicense-blue.svg"

   default:
    return "" 
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "ISC License (ISC)":
      return "https://opensource.org/licenses/ISC"

      case "The MIT License":
      return "https://opensource.org/licenses/MIT"
  
    case "SIL Open Font License":
      return "https://opensource.org/licenses/OFL-1.1"
  
    case "Unlicensed":
      return "http://unlicense.org/"
    
    default:
      return "" 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under [${license}](${renderLicenseLink(license)})`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

  ## Description
  ${data.description}

  ## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [License](#license)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## License
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  For all questions contact me at (https://github.com/${data.username}) or ${data.email}.

  `;
}

module.exports = generateMarkdown;
