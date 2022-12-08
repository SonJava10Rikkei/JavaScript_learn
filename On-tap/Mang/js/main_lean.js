/*
  CRUD
1. Create:
2. Read:
3. Update:
4. Delete:
*/

// let listNumbers = [1, 2, 3, 4, 5, 6, 7];

// Create:
// listNumbers.push(9);          // Thêm vào vị trí cuối của mảng
// console.log("listNumbers", listNumbers);
// listNumbers.unshift(0)             // Thêm vào vị trí đầu của mảng
// console.log("new listNumbers", listNumbers);


// // Read:

// // Gọi phần tử của mảng
// for (let i = 0; i < listNumbers.length; i++) {
//     console.log("listNumbers", listNumbers[i]);
// }

///////     Update:      ///////

// listNumbers[4] = 9;    // vị trí của mảng và giá trị thay đổi (update)
// console.log(listNumbers);

///////     Delete:      ///////

// splice tác động trực tiếp mảng ban đầu
// listNumbers.splice(3, 1);  // index và số phần từ muốn xóa
// console.log(listNumbers);

// // slice bản chất là sao chép mảng ban đâu
// console.log(listNumbers.slice(2, 4));
// console.log(listNumbers);




///////       Các method làm việc với Array       ///////

// let listNumbers = [1, 2, 3, 4, 5, 6, 7];

///////      method : fillter        ///////
// lọc lọc chỉ lấy giá trị đủ kiều kiện//

// listNumbers.filter((value, index, array) => {
//     // console.log("value", value);       // in ra từng giá trị của mảng
//     // console.log("index", index);
//     // console.log("array", array);
//     if (value % 2 == 0) {      // tìm số chẵn trong mảng và in ra vị trí của số chẵn đó
//         console.log(value);
//         console.log("index", index);
//         console.log("**************");
//     }

// })


///////      method : map      ///////
// lọc lọc tất cả các phần tử trong mảng //
// in ra all các phần tử trong mảng //

// listNumbers.map((value, index, array) => {
//   // console.log("value", value);
//   // console.log("index", index);
//   // console.log("array", array);

// })

// let filter = listNumbers.filter((value, index, array) => {
//   return value % 2 == 0;
// })
// console.log(filter);

// let map = listNumbers.map((value, index, array) => {
//   return value % 2 == 0;
// })
// console.log(map);

///////      method : forEach      ///////
// không có giá trị trả về //
// không tạo mảng mới //
// chỉ lọc qua từng phần tử trong mảng//

// listNumbers.forEach((value, index, array) => {
//   // console.log("value", value);
//   // console.log("index", index);
//   // console.log("array", array);

// })

////////  Tính tổng các phần tử trong hàm ////////
// let sum = 0;
// listNumbers.forEach((value, index, array) => {
//   sum += value;
// });
// console.log("sum", sum);


///////      method : callBack      ///////
// callBack hàm đucợ truyền vào làm tham số của hàm khác//

// ví dụ:

function hello(callBack) {
  console.log(callBack);
}
hello(test)
function test() {
  console.log("Hello học viện Java10");
}