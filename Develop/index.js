const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
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
            message: 'Provide instructions for project use. (Required)',
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
        {
            type: 'confirm',
            name: 'contributeConfirm',
            message: 'Would you like for other developers to contribute to your project?',
            default: false
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter your custom contribution guidelines here',
            when: ({contributeConfirm}) => contributeConfirm
        },
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
}

// function call to initialize program
init();


//() GIVEN a command-line application that accepts user input
//() WHEN I am prompted for information about my application repository
//() THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
//      Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//(X) WHEN I enter my project title
//(X) THEN this is displayed as the title of the README
//(X) WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//(X) THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//(X) WHEN I choose a license for my application from a list of options
//(X) THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//(X) WHEN I enter my GitHub username
//(X) THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//(X) WHEN I enter my email address
//(X) THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//(X) WHEN I click on the links in the Table of Contents
//(X) THEN I am taken to the corresponding section of the README