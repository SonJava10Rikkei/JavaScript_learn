function lamgido1() {
  let month1 = document.getElementById("dauvao1").value;

  month1 = parseInt(month1);

  switch (month1) {
    case 1:
    case 3:
    case 4:
    case 7:
    case 8:
    case 10:
    case 12:
      document.getElementById("outputT1").innerHTML =
        "Tháng " + month1 + " có 31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById("outputT1").innerHTML =
        "Tháng " + month1 + " có 30 ngày";
      break;
    case 2:
      // console.log("Tháng " + month + " có 28 hoặc 29 ngày");
      document.getElementById("outputT1").innerHTML =
        "Tháng " + month1 + " có 28 hoặc 29 ngày";
      break;
    default:
      document.getElementById("outputT2").innerHTML =
        "Vui lòng nhập lại " + month1 + " không có trong 12 tháng";
      break;
  }
}

function lamgido2() {
  let month2 = document.getElementById("dauvao2").value;

  month2 = parseInt(month2);

  switch (month2) {
    case 1:
    case 3:
    case 4:
    case 7:
    case 8:
    case 10:
    case 12:
      document.getElementById("outputT2").innerHTML =
        "Tháng " + month2 + " có 31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById("outputT2").innerHTML =
        "Tháng " + month2 + " có 30 ngày";
      break;
    case 2:
      // console.log("Tháng " + month + " có 28 hoặc 29 ngày");
      document.getElementById("outputT2").innerHTML =
        "Tháng " + month2 + " có 28 hoặc 29 ngày";
      break;
    default:
      console.log('Vui lòng nhập lại - "Một năm 12 tháng"');
      document.getElementById("outputT2").innerHTML =
        "Vui lòng nhập lại " + month2 + " không có trong 12 tháng";
      break;
  }
}
