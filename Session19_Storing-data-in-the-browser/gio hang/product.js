let listProduct = [
    {
        name: " I phone 5",
        price: " 3000000",
        image: "img/anh1.jfif",
        id: "1",
    },
    {
        name: " I phone 6",
        price: " 3000000",
        image: "img/anh2.jfif",
        id: "2",
    },
    {
        name: " I phone 7",
        price: " 3000000",
        image: "img/anh3.jfif",
        id: "3",
    },
    {
        name: " I phone 8",
        price: " 3000000",
        image: "img/anh4.jfif",
        id: "4",
    },
    {
        name: " I phone 10",
        price: " 3000000",
        image: "img/anh5.jfif",
        id: "5",
    },

]
function renderProduct(product) {
    let data = "";
    for (let i = 0; i < product.length; i++) {
        data += `
         <div class="product">
            <img src="${product[i].image}" alt="">
            <p>${product[i].name}</p>
            <label for="price">${product[i].price}</label><br>
            <input type="number" value="1"><br>
            <div>
            <input type="number" value="1">
            <i onclick = addToCart(${product[i].id}) 
            class="fa-solid fa-cart-shopping" ></i>
            </div>
        </div>
        `
    }
    document.getElementById("showProduct").innerHTML = data;
}
renderProduct(listProduct);

//function add to cart

function addToCart(id) {
    
}




