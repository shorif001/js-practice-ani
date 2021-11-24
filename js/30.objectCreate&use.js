// student details

// var name = "shorif";
// var age = 27;
// var cgpa = 3.92;
// var lang = ["Bengali", "Hindi", "English"];

// console.log(age);

// // object
// var student1 = {
//     name : "Shorif Ahmed",
//     age : 27,
//     cgpa : 3.92,
//     lang: ["Bangla", "Hindi", "English"]

// }
// var student2 = {
//     name : "Shorif Ahmed",
//     age : 27,
//     cgpa : 3.92,
//     lang: ["Bangla", "Hindi", "English"]

// }
// var student3 = {
//     name : "Shorif Ahmed",
//     age : 27,
//     cgpa : 3.92,
//     lang: ["Bangla", "Hindi", "English"]

// }
// var student4 = {
//     name : "Shorif Ahmed",
//     age : 27,
//     cgpa : 3.92,
//     lang: ["Bangla", "Hindi", "English"]

// }

// console.log(student3.age);

// // view no. 1
//     function Student(name, age, cgpa, lang) {
//         this.name = name;
//         this.age = age;
//         this.cgpa = cgpa;
//         this.lang = lang;
//     }

// var student1 = new Student("Shorif Ahmed", 27, 3.4, ["Bangla", "English", "Arabic"]);
// var student2 = new Student("Shorif Ahmed", 27, 3.4, ["Bangla", "English", "Arabic"]);
// var student3 = new Student("Shorif Ahmed", 27, 3.4, ["Bangla", "English", "Arabic"]);
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.cgpa);
// console.log(student1.lang);

// view no. 2
function Student(name, age, cgpa, lang) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  };
}

var student1 = new Student("Shorif Ahmed", 27, 3.4, [
  "Bangla",
  "English",
  "Arabic",
]);
var student2 = new Student("Shorif Ahmed", 27, 3.4, [
  "Bangla",
  "English",
  "Arabic",
]);
var student3 = new Student("Shorif Ahmed", 27, 3.4, [
  "Bangla",
  "English",
  "Arabic",
]);

student1.display();
student2.display();
