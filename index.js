import fs from 'fs';
import inquirer from 'inquirer';

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter repository title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter repository description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Enter usage instructions',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['MIT', 'GNU GPL V3', 'Apache 2.0']
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'guidelines'
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter your github username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email'
    },
])
.then((response) => {
    let licenseBadge = '';
    switch (response.license){
        case 'MIT': licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'; break;
        case 'GNU GPL V3': licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'; break;
        case 'Apache 2.0': licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; break;

    }    

    fs.writeFile('output/README.md', `# ${response.title}\n${licenseBadge}\n## Table of contents\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contribution guidelines](#contribution-guidelines)\n- [Test instructions](#test-instructions)\n- [Questions](#questions)\n## Description\n${response.description}\n## Installation\n${response.install}\n## Usage\n${response.usage}\n## License\nThis software is covered under the ${response.license} license\n## Contribution guidelines\n${response.guidelines}\n## Test instructions\n${response.test}\n## Questions\n- My Github profile is https://github.com/${response.username}\n- I can be reached at ${response.email}\n`, (err) => {err ? console.error(err) : console.log('README created');});
});