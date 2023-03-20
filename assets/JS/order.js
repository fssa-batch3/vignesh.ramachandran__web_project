
const cartId = new URLSearchParams(window.location.search).get("cartId");

let cartData = JSON.parse(localStorage.getItem("cartData"));
let userData = JSON.parse(localStorage.getItem("userData"));
let menuData = JSON.parse(localStorage.getItem("menuData"));
let categoryData = JSON.parse(localStorage.getItem("categoryData"));
let dishData = JSON.parse(localStorage.getItem("dishData"));


// get data from userData
document.getElementById("name").value = userData[0]["name"]
document.getElementById("email").value = userData[0]["email"]
document.getElementById("phone_number").value = userData[0]["phone_number"]

let cartdetails = cartData.filter(data =>
    data.uniqueId === cartId)

console.log(cartdetails);

let menuId = cartdetails[0]["menu_id"];

// for getting menu name from url
let menu_name = menuData.find(data =>
    data.id === menuId);
// console.log(menu_name)


let categoryId = cartdetails[0]["category_id"];

// for getting category name from url
let category_name = categoryData.find(data =>
    data.id === categoryId);
// console.log(category_name);

let n = cartdetails[0]["dishData"]
let z = cartdetails.length


let finddish = dishData.filter(product =>
    n.some(find => find.id === product.id));
// console.log(finddish)

let userId = userData[0]["email"];
// console.log(userId)

let status = "";



for (let i = 0; i < cartdetails.length; i++) {

    let div_seperation = document.querySelector(".seperation")
    // console.log(div_seperation)

    h2_heading = document.createElement("h2");
    h2_heading.innerText = category_name["categoryName"] + " " + menu_name["menuName"]
    div_seperation.append(h2_heading);

    // button = document.createElement("button");
    // button("class", "btn update")

    // div for menu & category name
    div_1 = document.createElement("div");
    div_seperation.append(div_1);

    label_1 = document.createElement("label");
    label_1.setAttribute("for", "");
    label_1.innerText = "No.of.guest:";
    div_1.append(label_1);

    input_1 = document.createElement("input");
    input_1.setAttribute("type", "number");
    input_1.setAttribute("id", "no_of_guest");
    input_1.setAttribute("min", "1")
    input_1.setAttribute("readonly", "true")
    input_1.value = cartdetails[0]["noOfGuest"];
    div_1.append(input_1);

    // div for price
    div_2 = document.createElement("div");
    div_seperation.append(div_2);

    label_2 = document.createElement("label");
    label_2.setAttribute("for", "");
    label_2.innerText = "Price:";
    div_2.append(label_2);

    input_2 = document.createElement("input");
    input_2.setAttribute("type", "number");
    input_2.setAttribute("id", "price");
    input_2.setAttribute("readonly", "true")
    input_2.value = cartdetails[0]["totalCost"] * cartdetails[0]["noOfGuest"];
    div_2.append(input_2);

    // div for delivery date
    div_3 = document.createElement("div");
    div_seperation.append(div_3);

    label_3 = document.createElement("label");
    label_3.setAttribute("for", "");
    label_3.innerText = "Delivery Date:";
    div_3.append(label_3);

    input_3 = document.createElement("input");
    input_3.setAttribute("type", "date");
    input_3.setAttribute("id", "delivery_date");
    input_3.setAttribute("readonly", "true")
    input_3.value = cartdetails[0]["dateOfDelivery"];
    div_3.append(input_3);

    ensure = document.createElement("p");
    ensure.setAttribute("class", "ensure");
    ensure.innerText = "*Please check the Delivery date and No.of.guest. If you want to edit go to My cart"
    div_seperation.append(ensure)

}




// getting order button and add event
// let orderBtn = document.querySelector(".submit");
// orderBtn.addEventListener("onsubmit", placeOrder);


const placeOrder = e => {
    e.preventDefault()

    let orderData = JSON.parse(localStorage.getItem("orderData")) || []

    let order_id = cartdetails[0]["uniqueId"]
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone_number = document.getElementById("phone_number").value;
    let address = document.getElementById("address").value;
    let no_of_guest = document.getElementById("no_of_guest").value;
    let price = document.getElementById("price").value;
    let date = document.getElementById("delivery_date").value;
    let m = moment().format("DD/MM/YYYY hh:mm:ssA");
    let order_date = m.toString();

    let before_date = moment().add({ days: 7 }).format("YYYY-MM-DD");
    // console.log(before_date);


    if (date >= before_date) {
        orderData.push({
            order_id: order_id, name: name, email: email, phone_number: phone_number, address: address, no_of_guest: no_of_guest,
            price: price, delivery_date: date, order_date: order_date
        })

        alert("Order Placed Sucessfully");
        localStorage.setItem("orderData", JSON.stringify(orderData));
        location.href = "./my orders.html";


        function getIndex(e) {
            return e.uniqueId == cartId
        }

        find_cart = cartData.filter(getIndex)
        console.log(find_cart)

        for (i = 0; i < cartData.length; i++) {
            if (find_cart[0]["uniqueId"] == cartData[i]["uniqueId"]) {
                cartData.splice(i, 1);
                localStorage.setItem("cartData", JSON.stringify(cartData))
            }
        }

    }

    else {

        alert("Please check the Delivery date.")

    }



}
