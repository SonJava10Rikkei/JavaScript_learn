/*
ES6 la ECMA javascript 2015
1. Let Var CONST
2. Decstructuring
3. Spread
4. Arrow function
5. Template function
6. Template

*/

//////////////// Phân biệt phạm vị hoạt động của Let và Var ////////////////

// Phạm vi của Let là: scope ({scope})  thì phạm vi của nó chỉ trong scope thôi Var cũng vậy
// Phạm vi của Var là function Var có thể khai báo lại gán giá trị lại
//    - Let có thể khai báo lại nhưng không gán lại được giá trị
//

// var a = 7;
// var a = 8;

// let b = 1;
// let b = 2; // ở đây bị lỗi
// console.log(a);
// console.log(b);

// nhận biết về độ ưu tiên
// Biến cục bộ và toàn cục

// var a = 6;

// function test() {
//     let a = 8;
//     console.log("a trong ", a);
// }
// test();
// console.log("a ngoài ", a);



// // sự khác nhau

// {
//     let a = 7
// }


// console.log(a); //lỗi


// {
//     var b = 1;
// }

// console.log(b); // log :1

//////////////// Const ////////////////
// Const

// const a = 7;
// // a = 8;  //  lỗi ở đây không gán lại được
// // console.log(a);

// // nhưng nếu const khai báo cho 1 object có thể gán lại được vì nó là địa chỉ vùng nhớ
// // ví dụ
// const student = {
//     name: "Son ",
//     age: 29,
// }
// console.log("cũ ", student);
// student.name = "Danh Son";
// console.log("mới ", student);


////////////////        2. Decstructuring       ////////////////

// let listStudents = ["Thu", "Dương", "Minh", "Đức"];
// let name = listStudents[1];
// let [name1, name2, name3] = listStudents;
// console.log(listStudents[0]);
// console.log(listStudents[1]);
// console.log(listStudents[2]);
// console.log(listStudents[3]);


// let obj = {
//     nameStudent: "Hoàng",
//     age: 50,
//     id: 1
// }

// let objName = obj.nameStudent;
// let { nameStudent, age, id } = obj;
// console.log(nameStudent);
// console.log(age);
// console.log(id);
// console.log(nameStudent);

////////////////        3. Spread        ////////////////
// Noi lai bang dau ...

// noi trong Array
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array = array1.concat(array2);
// console.log(array);

// let noiMang = [...array1, ...array2];
// console.log(noiMang);


// Noi trong OBJ
// let student1 = {
//     name: "Dat",
//     age: 18
// }
// let student2 = { ...student1 };
// console.log(student2);
// function param(a, ...params) {
//     console.log(params);
// }
// param(1, 2, 3, 6, 7, 8)


////////////////        4. Arrow function        ////////////////
// Ham mui ten
// context trong arrow function

// let result = () => {
//     console.log("Hello hoc vien RA! ");
// }
// result();

// let obj = {
//     name: "Minh",
//     age: 16,
//     sayHello: function say() {
//         console.log(this)
//     },
//     sayHellos: () => {
//         console.log(this)
//     }
// }

// obj.sayHello();
// obj.sayHellos();


// let obj1 = {
//     name: "Minh",
//     age: 16,
//     sayHello: function say() {
//         console.log(this.name)
//     },
//     sayHellos: () => {
//         console.log(this.name)
//     }
// }

// obj1.sayHello();
// obj.sayHellos();

////////////////        5. Template String $ (``)       ////////////////
// Noi string
// let name1 = "Thu";
// let say = `hello ${name1}`;
// let sayName = "hello " + name1;
// console.log(say);


////////////////        class JS       ////////////////
// Báo đóng của lập trình hướng đố tượng
// kế thừa
// đa hình
// trừu tượng


// Hàm tạo constructor
// Tính bao đóng


// class Person {
//     constructor(name, age, id) {
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }
//     setName(name) {
//         this.name = name;
//     }
//     setAge(age) {
//         this.age = age;
//     }
//     hello() {
//         return "Chao ban"
//     }

//     getName() {
//         return this.name;
//     }
//     getAge() {
//         return this.age;

//     }
// }
// let person1 = new Person();
// person1.setName("Thu");
// person1.setAge("18");
// console.log(person1.getName());
// console.log(person1.getAge());
// console.log("Ten toi la" + " " + person1.getName() + ". " + "Nam nay toi len " + person1.getAge());

// let person1 = new Person("Thu", 18, 1);
// console.log("Ten toi la" + " " + person1.getName() + ". " + "Nam nay toi len " + person1.getAge());


// function object1(name, age, id) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
// }
// let object1 = new object1("Thu", 18, 1);

// Tính kế thừa

// class Person2 extends Person {
//     constructor(name, age, lastName) {
//         super(name, age);
//         this.lastName = "Trương Minh";
//     }
//     aTest() {
//         console.log(this.hello());
//     }
//     getInfor() {
//         return this.getName() + " " + this.getAge() + " " + this.lastName;
//     }
// }
// let Person3 = new Person2("Dương", 20);
// console.log(Person3.getInfor());
// // console.log(Person3);
// Person3.aTest();




////////////////        class JS       ////////////////
// import: Nhập vào


import test from "./export.js"
// import { sayHello } from "./export.js"
console.log(test());
console.log(sayHello());

import { sayHello, sayNo } from "./export.js"
console.log(sayNo());



