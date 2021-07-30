export class Contact {

    //Attributes
    name:string = "";
    surname:string = "";
    email:string = "";
    telephone:number = 0;

    //Constructor
    constructor(name:string, surname:string, email:string, telephone:number){
        this.name= name;
        this.surname = surname;
        this.email = email;
        this.telephone = telephone;
    }

}