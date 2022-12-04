// 3. CÂU LỆNH IF______________

/* TÍNH DIỆN TÍCH HÌNH TRÒN*/

// let radius = prompt ('Nhập bán kính hình tròn là: ');
// const PI = 3.14;
// if (radius >= 0) {
//     area = radius * radius + PI;
// console.log ('the area is ' + area);
// }

/* IF với câu lệnh bên trong */

// let i = 2;
// if (i > 0){
//     console.log('i is positive');
// }

/* Có thể viết ngắn gọn không cần dấu chấm phảy ở cuối */

// let i = 2;
// if (i > 0){
// console.log('i is positive')
// }

/*4. CÂU LÊNH IF - ELSE __________ */

// let number = 21;
// // if (number % 2 == 0){
// //     console.log (number + " is even.");
// // }
// // else {
// //     console.log (number + " is odd.");
// // }

// /* CÂU LÊNH IF - ELSE với một dòng lệnh bên trong */

// if (number % 2 == 0)
// console.log (number + " is even.")
// else
// console.log (number + " is odd.")

/*5. VIẾT MÃ SẠCH gán  giá trị cho biến */

// var number = 21;

// var isEven = number % 2 == 0;
// if (isEven)
// console.log(number + " is even.")
// else
// console.log(number + " is odd")

/*6. CÂU LÊNH IF LỒNG NHAU (nested if) ________*/

// let a = 1;
// let b = 4;
// let c = 4;

// if (a > b) {
//   if (a > c) {
//     console.log("Greatest number is a = " + a);
//   } else {
//     console.log("Greatest number is c = " + c);
//   }
// } else {
//   if (b > c) {
//     console.log("Greatest number is b = " + b);
//   } else {
//     console.log("Greatest number is c = " + c);
//   }
// }

/*7. CÂU LỆNH IF BẬC THANG ___________________________ */

// let score = 90;

// if (score >= 90.0) console.log("A");
// else if (score >= 80.0) console.log("B");
// else if (score >= 70.0) console.log("C");
// else if (score >= 60.0) console.log("D");
// else console.log("F");

/* 8. CÁC LỖI THƯỜNG GẶP _______________________________*/

/* 9. CÂU LỆNH SWITCH - CASE ____________________________*/

// let level = prompt("Nhập số tiền lương hàng tháng để tính thuế");

// if (level <= 5000000) {
//   console.log("Level is " + 0);
// } else if (level <= 10000000) {
//   console.log("Level is " + 1);
// } else if (level <= 18000000) {
//   console.log("Level is " + 2);
// } else if (level <= 32000000) {
//   console.log("Level is " + 3);
// } else {
//   console.log("Không hiển thị");
// }

// switch (level) {
//   case 0:
//     // Tính thuế cho thu nhập đến 5tr
//     break;
//   case 1:
//     // Tính thuế cho thu nhập từ 5tr đến 10tr
//     break;
//   case 2:
//     //Tính thuế cho thu nhập từ 10tr đến 18tr
//     break;
//   case 3:
//     // Tính thuế cho thu nhập từ 18tr đến 32tr
//     break;
//   default:
//     // Không hợp lệ
//     break;
// }

/*phân loại ngày trong tuần với ngày cuối tuần*/

// let day = prompt("nhập ngày trong tuần");
// const MONDAY = 1,
//   TUESDAY = 2,
//   WEEKDAY = 3,
//   THURSDAY = 4,
//   FRIDAY = 5,
//   SAT = 7,
//   SUNDAY = 0;

// switch (day) {
//   case MONDAY:
//   case TUESDAY:
//   case WEEKDAY:
//   case THURSDAY:
//   case FRIDAY:
//     console.log("Weekday");
//     break;
//   case SAT:
//   case SUNDAY:
//     console.log("Weekend");
// }

/*switch-case với kiểu dữ liệu String*/

// let greeting = prompt("Chào bạn");

// switch (greeting) {
//   case "hello":
//     console.log("You are speaking English");
//     break;
//   case "hola":
//     console.log("Usted está hablando español");
//     break;
//   case "bonjour":
//     console.log("Vous parlez français");
//     break;
//   case "hallo":
//     console.log("Du sprichst Deutsch");
//     break;
// }
