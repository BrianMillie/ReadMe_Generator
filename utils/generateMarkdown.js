// function to generate markdown for README
function generateMarkdown(data) {
  //define licence agreement on project
  let description = ""
  let badge = ""
  if (data.license === "MIT") {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    description = "The MIT license gives users express permission to reuse code for any purpose, sometimes even if code is part of proprietary software"

  } else {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    description = "The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works."
  }

  return `# ${data.title}
                                    
## Badge:  

${badge}

## Description

${data.description}

## Table of Contents

[Usage](#usage)

[License](#License)

[Contributions](#contributions)

[Tests](#tests)

[Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${description}

## Contributions

${data.contribution}

## Tests

${data.tests}

## Questions

Any questions about this project please reach out to ${data.email}

(https://github.com/${data.github_username})

`;
}

module.exports = generateMarkdown;
