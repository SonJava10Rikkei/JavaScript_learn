function inputnumber() {
  let a = prompt("Cho số a bằng:");
  let b = prompt("Cho số b bằng:");
    
    
    a = parseInt(a);
    b = parseInt(b);
   
  if (a % b == 0) {
    alert("a chia hết cho b")
  } else {
    alert("a không chia hết cho b");
  }
}
