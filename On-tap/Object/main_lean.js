/*
name, age, address được gọi là thuộc tính của đối tượng (property) hay gọi là key và value
talk ở đây được gọi là phương thức của đối tượng
*/

/* nắm được
- CRUD:
- Spread dạng shallow clone
- Object.assign shallow clone
- Deep clone
- Object constructor
*/

// ví dụ:
// var person = {
//     name: "Thanh Vân",              // cặp key value
//     age: 16,
//     address: "Việt Nam",
//     talk: function () {
//         console.log("hello");

//     }
// }

///////////////////     Tham trị và tham chiếu      ///////////////////

// let a = 7;
// let b = a;
// a = 9;
// console.log(a);  //7

// let student = {
//     name:"mimi",
// }
// let duong = student;
// student.name = "Đạt"
// console.log(duong);   //Đạt


///////////////////     Create      ///////////////////

// person.id = 1;     // tên key và value truyền vào
// console.log(person);



///////////////////     Read      ///////////////////
//      ở Object    for in thì ra key
//          for of thì ra value

// for (let key in person) {
//     console.log(key);
// }

// for (let valueName in person) {
//     console.log(person[valueName]);
// console.log('************');

    
// }


///////////////////     Update      ///////////////////


// person.age = '18';        // tên obj chấm key bằng value muốn thay đổi

// console.log(person);
// console.log('************');



///////////////////     Delete      ///////////////////

// delete tên OBJ chấm KEY-name (để xóa đối tượng đó)


// delete person.address;
// console.log(person);
// console.log('************');


///////////////////     Spread  shallow clone   ///////////////////
// Spread dạng shallow clone

// var person1 = {
//     name: "Thanh Vân",              // cặp key value
//     age: 16,
//     address: {
//         district: "Mỹ Đình",
//         street: "Trần Bình"
//     },
//     talk: function () {
//         console.log("hello");

//     }
// }

// var person2 = { ...person1 }
// person1.age = 18;
// person1.address.district = "Mỹ Tho"
// console.log(person2);
// console.log(person1);
// console.log('************');

///////////////////     Object.assign  shallow clone    ///////////////////
// Object.assign  shallow clone
// var person2 = Object.assign({}, person1);
// person1.address.street = "HÒa Bình"
// console.log(person2);
// console.log(person1);


////////////////////////////     Deep clone    //////////////////////////////

// let person2 = JSON.parse(JSON.stringify(person1));
// person1.address.district = "Ba Đình";

// console.log(person2);
// console.log(person1);


////////////////////////////    object constructor     //////////////////////////////
// object constructor bản thiết kế


function User(firstName, lastNamne, age) {
    this.firstName = firstName;
    this.lastNamne = lastNamne;
    this.age = age;
}
let mimi = new User('Dương', 'Phạm Tùng', '15');
let ngocThu = new User('Thu', 'Trương Minh', '18');
console.log(mimi);
console.log(ngocThu);
console.log("**************");

/////////////////// new Date, Set, ... ///////////////////

// let array = [1, 1, 1, 5, 5, 8, 8, 9, 1, 1, 1, 5, 5, 5];
// let result = new Set(array);                    // lọc các phần tử giống nhau
// console.log("result",result);

// lấy date:

let date = new Date();
console.log(date.getMonth());

let date2 = new Date();
console.log(date.getFullYear());

// tính từ năm 1900 lấy năm hiện tại trừ đi
let date3 = new Date();
console.log(date.getYear());