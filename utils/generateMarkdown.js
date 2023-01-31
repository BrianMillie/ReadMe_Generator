// function to generate markdown for README
function generateMarkdown(data) {
  //define licence agreement on project
  let description = ""
  if (data.license === "MIT") {
    description = "The MIT license gives users express permission to reuse code for any purpose, sometimes even if code is part of proprietary software"

  } else {
    description = "The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works."
  }

  return `# ${data.title}
                                    
## Badge:  

${data.license}

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

Github link ${data.github_username}

`;
}

module.exports = generateMarkdown;
