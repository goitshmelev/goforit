function Human(name, age, gender, height, weight){
    this.name= name;
    this.age= age;
    this.gender= gender;
    this.height= height;
    this.weight= weight;
};

function Worker() {
    this.work = 'Developer';
    this.salary = 1000;
    this.working = function(){
        console.log('I am ' + this.work + ' and my Salary ' + this.salary);
    };

};

function Student() {
    this.school='University';
    this.grants=300;
    this.watch= function(){
        console.log('I am learning at ' + this.school + ' and my Grants ' + this.grants);
    };
};

Worker.prototype = new Human('Sergey', 32, 'male', 186, 80);
var newWorker = new Worker();
console.log('Worker');
console.log('Gender: ', newWorker.gender);
console.log('Name: ', newWorker.name);
console.log('Age: ', newWorker.age + "years");
console.log('Height: ', newWorker.height + "px");
console.log('Weight: ', newWorker.weight + "px");
newWorker.working();

console.log('');

Student.prototype = new Human('Katrin', 29, 'female', 160, 40);
var newStudent = new Student();
console.log('Student');
console.log('Gender: ', newStudent.gender );
console.log('Name: ', newStudent.name );
console.log('Age: ', newStudent.age + "years");
console.log('Height: ', newStudent.height + "px");
console.log('Weight: ', newStudent.weight + "px");
newStudent.watch();

console.log('');