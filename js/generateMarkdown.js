// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.yourProjectTitle}

  ${
    data.licenses === "MIT License"
      ? `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      : data.licenses === "GNU General Public License v3.0"
      ? `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      : data.licenses === "GNU Affero General Public License v3.0"
      ? `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
      : "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }  
  ## Description

- What was your motivation? ${data.descriptionMotivation}
- Why did you build this project? ${data.descriptionBuild}
- What problem does it solve? ${data.descriptionProblemSolve}
- What did you learn? ${data.descriptionLearn}

## Table of Contents

${
  data.tableOfContents === true
    ? `- [Description](#Description)
- [Table of Contents](#Table-of-Contents)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#Features)
- [tests](#tests)
- [questions](#questions)
`
    : ``
}

## Installation

${data.installProject}

## Usage

![${data.usageAltText}](../images/${data.usage}.${data.usageImageType})

## Credits

${data.credits}

## License

${
  data.licenses === "MIT License"
    ? `MIT License

Copyright (c) [${data.licensesYear}] [${data.licensesFullName}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    : data.licenses === "GNU General Public License v3.0"
    ? `GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.`
    : data.licenses === "GNU Affero General Public License v3.0"
    ? `GNU AFFERO GENERAL PUBLIC LICENSE
    Version 3, 19 November 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.`
    : "No License"
}

## Features

${data.features}

## Tests

${data.tests}

## Questions

[${data.questionsGitHub}'s GitHub profile](https://github.com/${
    data.questionsGitHub
  })
If you have any additional questions your can reach me at ${
    data.questionsEmail
  }`;
}

// module.exports is an object we use to store variables or methods to be called on in other js also future proofs in case you need to export more functions
module.exports = {
  generateMarkdown,
};
