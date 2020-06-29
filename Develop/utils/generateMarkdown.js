// function to show the table of contents if the user wants to include one in their readme.
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
// function to show the Test section if the user wants to include one in their readme.
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
// function to show the Contribution section if the user wants to include one in their readme.
const displayCon = (conAns, con) => {
  if (!conAns) {
    return '';
  }
  return `
  ## Contributing

  ${con}
  `
}
// function to generate markdown for README
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
  
  ${displayCon(data.contributeConfirm,data.contribution)}
  
  ${displayTest(data.testConfirm,data.test)}

  ## Questions
  If you run into any errors or have further questions about this program, you can contact here: 
  *github: https://github.com/${data.github} 
  *email: ${data.email}.
  Please reference the project in question in the message. Thank you.
`;
}

module.exports = generateMarkdown;

  