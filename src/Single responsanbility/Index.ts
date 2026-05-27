/* 
Single Responsibility Principle

The Single Responsibility Principle (SRP) states that a class should have only one reason to change. 

A class should have only one reason to change. 

This principle is a fundamental principle of object-oriented design. 

It states that every class should have a single responsibility, and that responsibility should be entirely encapsulated by the class. 

Cada clase debe tener una única responsabilidad, y esa responsabilidad debe estar completamente encapsulada por la clase. 

*/


// incorrect

class User {
    name : string;
    email: string;
    constructor(name : string, email : string){
        this.email = email;
        this.name = name;
    }

    saveToDatabase(){}

    sendEmail() {}
}


// Correct


class UserService {
    name : string;
    emai: string;
    constructor(name: string, email: string){
        this.emai = email;
        this.name = name;
    }

    saveToDataBase(user: string) {
        return "saved";
    }
}

class EmailService {
    email: string;
    constructor(email: string) {
        this.email = email;
    }

    sendEmail(user: string) {
        return "email sent";
    }
}