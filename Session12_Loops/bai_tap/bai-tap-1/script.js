let result = "";
for (let i = 2; i <= 9; i++){
    result += "<tr>";
    for (let j = 2; j <= 9; j++) {
        result += "<td>" + j + "x" + i + " = " + j * i +"</td>";
    }
    result += "</tr>";

}
document.getElementById("tableDemo").innerHTML = result;



// let result = "";