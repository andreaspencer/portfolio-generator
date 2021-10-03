const inquirer = require('inquirer');
console.loh(inquirer);
/* const fs = require('fs');
const generatePage = require('./src/page-template.js');
const pageHTML = generatePage(name, github);


fs.write('./index.html', pageHTML, err => {
    if(err) throw err;

    console.log('Porfolio complete! Check out index.html to see the output!');
});
*/

inquirer 
    .ptompy([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));