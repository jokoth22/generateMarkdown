// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  const badge = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GNU GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache License 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'ISC': '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
  };
  return badge[license] || '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  const licenseLink = {
    'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
    'GNU GPLv3': '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    'ISC': '[ISC License](https://opensource.org/licenses/ISC)',
  };
  return licenseLink[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `## License

This project is licensed under the ${license} - see the ${renderLicenseLink(license)} for details
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
- Find me on GitHub: [${data.username}](https://github.com/${data.username})
- Email me with any questions: ${data.email}
`;
}

module.exports = generateMarkdown;
