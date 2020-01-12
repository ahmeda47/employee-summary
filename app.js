const inquirer = require('inquirer')

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
                type: 'input',
                message: 'what is your role?'
            },
        
        ]).then(function(res){
            console.log(res)
        }).catch(function(err){
            if (err){
                console.log(err);
            }
        })
    



