// Hiên thị mã JavaScript
// Các hàm clearScreen(), display(), và calculate() được sử dụng để thêm chức năng vào Máy tính.
//Funcion này để clear tất cả các giá trị
function clearScreen() {
  document.getElementById("result").value = "";
}

//Funcion này để hiển thị các giá trị
// cần chú ý += và = ở value
function display(value) {
  document.getElementById("result").value += value;
  document.getElementById("result").focus();
}

// Funcion này để đánh giá biểu thức 
// Hàm calculate() truy cập DOM bằng cách sử dụng id của kết quả và đánh giá biểu thức
// bằng cách sử dụng hàm eval(). Giá trị đã đánh giá của biểu thức lại được gán cho kết quả.

function calculate() {
  var value = document.getElementById("result").value;
  var result = eval(value);
  document.getElementById("result").value = result;
}
