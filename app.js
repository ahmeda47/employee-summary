class App{
    constructor(){
    const inquirer = require('inquirer');
    const fs = require('fs');
    const util = require('util');
    const writeFileAsync = util.promisify(fs.writeFile);
    const generateHTML = require('./output/html')
    const HTML = new generateHTML;
    
        inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'what is your name?'
            },
            {
                name: 'email',
                type: 'input',
                message: 'what is your email?'
            },
            {
                name: 'id',
                type: 'list',
                message: 'what is your id?',
                choices:[1, 2, 3, 4, 5]
            },
            {
                name: 'role',
                type: 'list',
                message: 'what is your role?',
                choices:['Employee', 'Intern', 'Engineer', 'Manager'],
                //when:
            }
        
        ]).then(function(res){
            const newHTML = HTML.generateHTML(res)            
            writeFileAsync(`${res.name}.html`, newHTML)
        }).catch(function(err){
            if (err){
                console.log(err)
            }
        })
    }
}

new App()


module.exports = App;