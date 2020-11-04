var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var axios = require("axios");
var fs = require("fs");

const questions = ([
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your title for this Project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe this project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        default: 'MIT',
        choices: [
            'Apache 2.0',
            'MIT',
            'GNU GPL v3.0'
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of this application'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who all contributed to this project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions?'
    }

])

function init() {
    inquirer.prompt(questions).then(answers => {
      console.log(answers);
      axios
        .get("https://api.github.com/users/" + answers.username)
        .then(response => {
          console.log(response);
          var imageURL = response.data.avatar_url;
          answers.image = imageURL;
          console.log(imageURL);
          fs.writeFile("README.md", generateMarkdown(answers), function(err) {
            if (err) {
              throw err;
            }
          });
        });
    });
  }
  
  init();