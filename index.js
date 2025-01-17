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
        name: 'guidelines'
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
    fs.writeFile('output/README.md', `# ${response.title}\n## Table of contents\n- [Description](#Description)\n- [Installation](#Installation)\n- [Usage](#Usage)\n- [License](#License)\n- [Contribution guidelines](#Contribution-guidelines)\n- [Test instructions](#Test-instructions)\n- [Questions](#Questions)\n`, (err) => {err ? console.error(err) : console.log('README created');});
});