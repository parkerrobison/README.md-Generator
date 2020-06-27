// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.badges}

  ## Description 
  
${data.description}
  
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 

 ${data.usage}
  
  ## Credits
  
  ${data.credits}
   
  ## License

  ${data.license}

  ## Badges
 
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  ## Contributing

  ${data.contribution}
  
  ## Tests

  ${data.test}

  ## Questions

  If you have further questions about this program, you can contact me through github: https://github.com/${data.github} 
  or by email: ${data.email}.
  Please reference the project in question in the message.
`;
}

module.exports = generateMarkdown;

  