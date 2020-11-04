const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const promptUser = () =>

inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your description of this application?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is installation of this application?'
    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this application?'
    
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose License?',
        choices: ["MIT"]    
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Please add contributor of this application?'
    
    },
    {
        type: 'input',
        name: 'test',
        message: 'Do you have any test for this application?'
    
    },
    {
        type: 'input',
        name: 'question',
        message: 'Do you have any questions for this application?',
    },
  ])

  

const generateReadme = (answers) =>
`## Title of this Project: ${answers.title}\n \n
![licensing](https://img.shields.io/badge/License-MIT-yellow.svg)
## Table of Content\n
1) [Description](#DESCRIPTION) \n
2) [Installation](#INSTALLATION) \n
3) [Usage](#USAGE) \n
4) [License](#LICENSE) \n
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
SOFTWARE.\n
5) [Contributor](#CONTRIBUTOR) \n
6) [Test](#TEST)
7) [Questions](#Questions) \n \n

## 1) DESCRIPTION \n
${answers.description}\n \n
## 2) INSTALLATION \n
${answers.installation}\n \n
## 3) USAGE \n
${answers.usage}\n \n
## 4) LICENSE \n
${answers.License}\n \n
## 5) CONTRIBUTOR \n
${answers.Contributing}\n \n
## 6) TEST \n
${answers.test}\n \n
## 7) Questions \n
Link to my GitHub profile: https://github.com/${answers.github} \n
For additional questions, please email ${answers.github}
${answers.test}\n \n
`;

  
const init = async () => {
    console.log('hi');
    try {
      const answers = await promptUser();
  
      const readme = generateReadme(answers);
  
      await writeFileAsync('readme.md', readme);
  
      console.log('Successfully wrote to readme.md');
    } catch (err) {
      console.log(err);
    }
  };
  
  init();