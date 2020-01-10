const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'username',
        type: 'input',
        message: 'what is your username'
    }
]).then(function(res){
    console.log(res)
}).catch(function(err){
    if (err){
        console.log(err);
    }
})