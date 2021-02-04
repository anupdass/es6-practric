class Student {
    constructor(name,id){
        this.name = name;
        this.id =id;
        this.school = "Dhanbari Collegiate School"
    }
}

const student1 = new Student('anup','12');
const student2 = new Student('jamal','15');

student2.school = "Dhanbari Noban"
console.log(student1,student2);

