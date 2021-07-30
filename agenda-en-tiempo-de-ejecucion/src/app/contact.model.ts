export class Contact {

    //Attributes
    group:string = "";
    name:string = "";
    surname:string = "";
    email:string = "";
    telephone:number = 0;

    //Constructor
    constructor(group:string, name:string, surname:string, email:string, telephone:number){
        this.group = group;
        this.name= name;
        this.surname = surname;
        this.email = email;
        this.telephone = telephone;
    }

}