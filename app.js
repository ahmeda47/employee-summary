const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

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
                choices:['Employee', 'Intern', 'Engineer', 'Manager']
            },
        
        ]).then(function(res){
            console.log(res)
            //write file here...
            writeFileAsync(`${res.role}.html`, JSON.stringify(res))
            .then(function(){
                console.log('wrote data to file')
            })
        }).catch(function(err){
            if (err){
                console.log(err);
            }
        })