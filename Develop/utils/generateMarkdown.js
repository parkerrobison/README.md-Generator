// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

  ${data.licence}

`;
}

module.exports = generateMarkdown;

// add in after license when you get the MVP figured out.
// ## Badges
 
//   ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
//   ${data.badges}
  
  
//   ## Contributing

//   ${data.contribution}
  
//   ## Tests

//   ${data.test}
  