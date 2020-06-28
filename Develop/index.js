const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// the answers from qPrompt will be added to this object.
const data = {}

const qPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title.')
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: desInput => {
                if (desInput) {
                    return true;
                } else {
                    console.log('Please enter your a description of your project.')
                }
            }
        },
        {
            type: 'confirm',
            name: 'toc',
            message: 'Will the README.md include a table of contents?',
            default: false
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: instInput => {
                if (instInput) {
                    return true;
                } else {
                    console.log('Please provide installtion steps.')
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for how to use this project. (Required)',
            validate: useageInput => {
                if (useageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions.')
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators, third-party assets, or tutorials that were used in making this project. (include links)'
        },
        {
            type: 'list',
            message: 'What type of license does your project need?',
            name: 'license',
            choices: ['Apache', 'GNU', 'MIT'],
        },
        // this checks to see if the user would like to add a contribution section 
        {
            type: 'confirm',
            name: 'contributeConfirm',
            message: 'Would you like for other developers to contribute to your project?',
            default: false
        },
        // if they answer yes they will be directed to this prompt. No will exclude the section.
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter your custom contribution guidelines here',
            when: ({contributeConfirm}) => contributeConfirm
        },
        // this checks to see if the user wants to add a test section.
        {
            type: 'confirm',
            name: 'testConfirm',
            message: 'Would you like to write any tests for your program?',
            default: false
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please include testing instructions here',
            when: ({testConfirm}) => testConfirm
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        }
    ])
}

// function to write README file
function writeToFile(fileName, output) {
    fs.writeFile(fileName, output, (err) => {
        if (err) {
            throw (err)
        } else {
            console.log('Success!')
        }
    }) 
}

// function to initialize program
function init() {
    qPrompt()
    .then (userInput => {
        data.title=userInput.title;
        data.description=userInput.description;
        data.installation=userInput.installation;
        data.toc=userInput.toc;
        data.usage=userInput.usage;
        data.credits=userInput.credits;
        data.license=userInput.license;
        data.contributeConfirm=userInput.contributeConfirm;
        data.contribution=userInput.contribution;
        data.testConfirm=userInput.testConfirm;
        data.test=userInput.test;
        data.email=userInput.email;
        data.github=userInput.github
        console.log(data);
        const rmString= generateMarkdown(data)
        writeToFile("./README.md", rmString)
    })
    .catch(err => {
        console.log(err);
    });
}

// function call to initialize program
init();