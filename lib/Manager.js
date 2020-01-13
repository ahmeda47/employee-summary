const Employee = require('../lib/Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole(){
        const man = new Manager();
        return Object.getPrototypeOf(man).constructor.name;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }

}
module.exports = Manager;