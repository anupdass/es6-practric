class Parent{
    constructor(){
        this.fatherName = "Hablu";
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}



const haby = new Child("Bablu");
console.log(haby);