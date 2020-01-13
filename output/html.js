class generateHTML{
    constructor(){}
    generateHTML(res){
        const pickRole = require(`../lib/${res.role}`)
        const getRole = pickRole.prototype.getRole()

        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <div class="container">
                <div class="team">
                <p>${res.name}</p>
                <p>${res.role}</p>
                <p>ID: ${res.id}</p>
                <p>Email: ${res.email}</p>
                <p>${getRole}</p>
                </div>
            </div>
            <script src="./lib/Employee.js"></script>
            <script src="./app.js"></script>
        </body>
        </html>`
    }
}
module.exports = generateHTML;