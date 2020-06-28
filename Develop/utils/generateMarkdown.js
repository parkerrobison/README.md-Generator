// function to generate markdown for README
const showTable = tocText => {
  if (!tocText) {
    return '';
  }
  return `
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  `
}
const displayTest = (testAns, test) => {
  console.log(testAns,test)
  if (!testAns) {
    return '';
  }
  return `
  ## Tests

  ${test}
  `
}

function generateMarkdown(data) {
  return `# ${data.title}

  ![licensebadge](https://img.shields.io/badge/license-${data.license}-blue)

  ## Description 
  
${data.description}
  
${showTable(data.toc)}

  ## Installation
  
  ${data.installation}
  
  
  ## Usage 

 ${data.usage}
  
  ## Credits
  
  ${data.credits}
   
  ## License


  ${data.license}
  
  ## Contributing

  ${data.contribution}
  
 ${displayTest(data.testConfirm,data.test)}

  ## Questions

  If you have further questions about this program, you can contact me through github: https://github.com/${data.github} 
  or by email: ${data.email}.
  Please reference the project in question in the message.
`;
}

module.exports = generateMarkdown;

  