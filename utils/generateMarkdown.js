// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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

    ${data.description}

    ## Table of Contents

    1.[Installation](#installation)
    2.[Usage](#usage)
    3.[Contribution](#contribution)
    4.[License](#license)
    5.[Tests](#tests)

    ##Installation
    ${data.installation}

    ##Usage
    ${data.usage}

    ##Contribution
    ${data.contribution}

    ##License
    ${data.license}

    ##Tests
    ${data.tests}
    `;
}

module.exports = generateMarkdown;
