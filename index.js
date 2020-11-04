// console.log("hello")
// const fs = require('fs');
// const inquirer = require('inquirer');
// const util = require('util');
// const writeFileAsync = util.promisify(fs.writeFile);

// // array of questions for user
// // title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// const promptUser = () =>
// inquirer.prompt([{
//     type: 'input',
//     name: 'description',
//     message: 'What is your description of this application?'
// },
// {
//     type: 'input',
//     name: 'tableOfContent',
//     message: 'Please add Table of Content for the readme?'

// },
// {
//     type: 'input',
//     name: 'installation',
//     message: 'What is installation of this application?'

// },
// {
//     type: 'input',
//     name: 'usage',
//     message: 'What is the usage of this application?'

// },
// {
//     type: 'input',
//     name: 'License',
//     message: 'Add licensing of this application?'

// },
// {
//     type: 'input',
//     name: 'Contributing',
//     message: 'Please add contributor of this application?'

// },
// {
//     type: 'input',
//     name: 'test',
//     message: 'Do you have any test for this application?'

// },
// {
//     type: 'input',
//     name: 'question',
//     message: 'Do you have any questions for this application?'

// },
// ]);

// const generateReadme = (answers) =>
// 'testing this \n testin ${answers.description}';

// promptUser()
//   .then((answers) => writeFileAsync('readme.md', generateReadme(answers)))
//   .then(() => console.log('Successfully wrote readme.md'))
//   .catch((err) => console.error(err));

// .then((data) => {
//     console.log(data.description)
//     fs.writeFile('readme.md',data, (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
    


const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const promptUser = () =>

inquirer.prompt([
    {
        type: 'input',
        name: 'description',
        message: 'What is your description of this application?'
    },
    {
        type: 'input',
        name: 'tableOfContent',
        message: 'Please add Table of Content for the readme?'
    
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
        type: 'input',
        name: 'License',
        message: 'Add licensing of this application?'
    
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
  ]);

const generateReadme = (answers) =>
`## testing this \n testin ${answers.tableOfContent}`;

promptUser()
  .then((answers) => writeFileAsync('readme.md', generateReadme(answers)))
  .then(() => console.log('Successfully wrote to readme.md'))
  .catch((err) => console.error(err));

  
// // function to write README file
// function writeToFile() {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();