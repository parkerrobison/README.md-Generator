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
  
  ## Badges
 
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  ${data.badges}
  
  
  ## Contributing

  ${data.contribution}
  
  ## Tests

  ${data.test}
  


`;
}

module.exports = generateMarkdown;
