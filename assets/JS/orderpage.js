
cartData = JSON.parse(localStorage.getItem("cartData"));
// menuData = JSON.parse(localStorage.getItem("menuData"));
categoryData = JSON.parse(localStorage.getItem("categoryData"));
dishData = JSON.parse(localStorage.getItem("dishData"));
user_unique = JSON.parse(localStorage.getItem("user_unique"));

// console.log(user_unique)

// console.log(cartData)

let cartData_user = cartData.filter(data =>
    data.user_id == user_unique)

// console.log(cartData_user)

let m = moment().format("YYYY-MM-DD");

for (let i = 0; i < cartData_user.length; i++) {

    let menuId = cartData_user[i]["menu_id"];

    // for getting menu name from url
    let menu_name = menuData.find(data =>
        data.id === menuId);
    // console.log(menu_name)


    let categoryId = cartData_user[i]["category_id"];

    // for getting category name from url
    let category_name = categoryData.find(data =>
        data.id === categoryId);
    // console.log(category_name);

    let n = cartData_user[i]["dishData"]


    let finddish = dishData.filter(product =>
        n.some(find => find.id === product.id));
    // console.log(finddish)



    div_cart_content = document.createElement("div");
    div_cart_content.setAttribute("role", "form");
    div_cart_content.setAttribute("class", "cart_content");

    div_cart_text = document.createElement("div");
    div_cart_text.setAttribute("class", "cart_text");
    div_cart_content.append(div_cart_text)

    h3 = document.createElement("h3");
    h3.innerText = category_name["categoryName"] + " " + menu_name["menuName"];
    div_cart_text.append(h3);

    // h2_cart = document.createElement("h2");
    // h2_cart.innerText = cartData_user[i]["menuName"];
    // div_cart_text.append(h2_cart);


    div_change = document.createElement("div");
    div_change.setAttribute("class", "change");
    div_cart_content.append(div_change)

    div_cart_dishes = document.createElement("div");
    div_cart_dishes.setAttribute("class", "cart_dishes");
    div_change.append(div_cart_dishes);

    // h3 = document.createElement("h3");
    // h3.innerText = cartData_user[i]["categoryName"] + " " + cartData_user[i]["menuName"];
    // div_cart_dishes.append(h3);

    span = document.createElement("span");
    span.innerText = "SR's ";
    h3.prepend(span);

    ul_dishes = document.createElement("ul");
    ul_dishes.setAttribute("class", "dishes");
    div_cart_dishes.append(ul_dishes);

    // let a = cartData_user[i]["dishData"]
    // console.log(a)

    for (let j = 0; j < finddish.length; j++) {

        li = document.createElement("li");
        li.innerText = finddish[j]["name"]

        ul_dishes.append(li);

    }

    div_cart_end = document.createElement("div");
    div_cart_end.setAttribute("class", "cart_end");
    div_change.append(div_cart_end);

    div_cart_end_1 = document.createElement("div");
    div_cart_end_1.setAttribute("class", "inside");
    div_cart_end.append(div_cart_end_1);

    label_1 = document.createElement("label");
    label_1.innerText = "Date:";
    div_cart_end_1.append(label_1);

    input_1 = document.createElement("input");
    input_1.setAttribute("type", "date");
    input_1.setAttribute("class", "date");
    input_1.setAttribute("required", "true");
    input_1.setAttribute("value", cartData_user[i]["dateOfDelivery"])
    label_1.append(input_1);

    label_2 = document.createElement("label");
    label_2.innerText = "No.Of.Guest:";
    div_cart_end_1.append(label_2);

    input_2 = document.createElement("input");
    input_2.setAttribute("type", "number");
    input_2.setAttribute("class", "number");
    input_2.setAttribute("required", "true");
    input_2.setAttribute("min", "1")
    input_2.setAttribute("value", cartData_user[i]["noOfGuest"])
    label_2.append(input_2);

    update = document.createElement("button");
    update.setAttribute("type", "button");
    update.setAttribute("class", "btn update");
    update.setAttribute("style", "display:none");
    update.innerText = "Update"
    div_cart_end_1.append(update);

    // img = document.createElement("img");
    // img.setAttribute("src", "../../assets/img/Dishes/ordinary tiffin.jpg");
    // img.setAttribute("alt", "ordinary tiffin");
    // div_cart_end.append(img);

    price = document.createElement("p");
    price.setAttribute("class", "price");

    // let cost = 0
    // for (let k = 0; k < a.length; k++) {
    //     cost += parseInt(a[k]["price"])
    // }
    price.innerText = "₹ " + cartData_user[i]["totalCost"] * cartData_user[i]["noOfGuest"];
    div_cart_end.append(price);


    div_btn_cart = document.createElement("div");
    div_btn_cart.setAttribute("class", "btn_cart");
    div_cart_end.append(div_btn_cart);

    a_1 = document.createElement("a");
    // a_1.setAttribute("href", "../profile/Order page.html?cartId=" + cartData_user[i]["uniqueId"]);
    div_btn_cart.append(a_1);

    button_1 = document.createElement("button");
    button_1.setAttribute("class", "btn order");
    button_1.setAttribute("type", "button");
    button_1.innerText = "ORDER";
    a_1.append(button_1);

    a_2 = document.createElement("a");
    a_2.setAttribute("href", "#");
    div_btn_cart.append(a_2);

    button_2 = document.createElement("button");
    button_2.setAttribute("class", "btn remove");
    button_2.setAttribute("data-id", cartData_user[i]["uniqueId"])
    button_2.setAttribute("type", "button");
    button_2.innerText = "REMOVE";
    a_2.append(button_2);

    ensure = document.createElement("p")
    ensure.setAttribute("class", "ensure");
    ensure.innerText = "Please check the Delivery date and No.of.guest before order"
    div_cart_end.append(ensure)

    document.querySelector("div.cart").append(div_cart_content);

    // summary table
    div_sum_content = document.querySelector(".sum_content")

    div_sum_details = document.createElement("div")
    div_sum_details.setAttribute("class", "sum_details")
    div_sum_content.append(div_sum_details);

    p_name = document.createElement("p");
    p_name.innerText = category_name["categoryName"] + " " + menu_name["menuName"];
    div_sum_details.append(p_name);

    date = document.createElement("p");
    date.innerText = cartData_user[i]["dateOfDelivery"];
    div_sum_details.append(date);

    p_price = document.createElement("p");
    p_price.innerText = "₹ " + cartData_user[i]["totalCost"] * cartData_user[i]["noOfGuest"];
    div_sum_details.append(p_price);

}


div_sum_end = document.createElement("div");
div_sum_end.setAttribute("class", "sum_end");
div_sum_content.append(div_sum_end);

p_total = document.createElement("p")
p_total.innerText = "Total Price";
div_sum_end.append(p_total);

let totalcost = 0
for (let s = 0; s < cartData_user.length; s++) {

    totalcost += cartData_user[s]["totalCost"] * cartData_user[s]["noOfGuest"]
}

p_totalprice = document.createElement("p")
p_totalprice.innerText = "₹ " + totalcost;
div_sum_end.append(p_totalprice);

// orderall button
let div_orderAll = document.querySelector(".cart_orderall");

let btn_orderall = document.createElement("button");
btn_orderall.setAttribute("type", "button");
btn_orderall.setAttribute("class", "btn orderall");
btn_orderall.innerText = "ORDER ALL" + " " + "(" + cartData_user.length + ")";

div_orderAll.append(btn_orderall);

// const checkOrder = e => {
//     e.preventDefault();

//     let date = document.getElementById("")
// }


// // getting extra informatio like no.of.guest and date of delivery
// let updateBtn = document.querySelectorAll(".update")
// updateBtn.forEach(function (upDate) {
//     upDate.addEventListener("click", function () {

//         let parent = this.closest(".cart_end")
//         let getDate = parent.querySelector(".date").value;
//         let getNumber = parent.querySelector(".number").value;

//         let id = parent.querySelector(".remove").getAttribute("data-id");

//         function getId(e) {
//             return e.uniqueId == id
//         }
//         findcartId = cartData.filter(getId);
//         // console.log(findcartId)

//         // let y = parent.querySelector(".price").innerText.replace("₹", "");
//         let y = findcartId[0]["totalCost"]
//         // console.log(y);
//         let up_totalcost = y * getNumber;
//         // console.log(up_totalcost)

//         findcartId[0]["dateOfDelivery"] = getDate;
//         findcartId[0]["noOfGuest"] = getNumber;
//         // findcartId[0]["totalCost"] = up_totalcost;

//         localStorage.setItem("cartData", JSON.stringify(cartData));
//         location.reload();

//     })
// })





// getting extra information like no.of.guest 
// let number_of_guest = document.querySelectorAll(".number")
// number_of_guest.forEach(function (getGuest) {
//     getGuest.addEventListener("click", function () {

//         let parent = this.closest(".cart_end")
//         update_btn = parent.querySelector(".update")
//         update_btn.setAttribute("style", "display:block");

//         order_btn = parent.querySelector(".order")
//         order_btn.setAttribute("style", "display:none")

//     })
// })

let number_of_guest = document.querySelectorAll(".number")
number_of_guest.forEach(function (getGuest) {
    getGuest.addEventListener("change", function () {

        let parent = this.closest(".cart_end")
        let product_id = parent.querySelector(".remove").dataset.id

        let pdts = cartData_user.find(data=>
            data.uniqueId == product_id)

        let quantity = parent.querySelector(".number").value
        // console.log(quantity)

        pdts["noOfGuest"] = quantity

        localStorage.setItem("cartData", JSON.stringify(cartData));
        location.reload();

    })
})


// getting the date of delivery
// let dateInput = document.querySelectorAll(".date");
// dateInput.forEach(function (getDate) {
//     getDate.addEventListener("click", function () {

//         let parent = this.closest(".cart_end")
//         update_btn = parent.querySelector(".update")
//         update_btn.setAttribute("style", "display:block");

//         order_btn = parent.querySelector(".order")
//         order_btn.setAttribute("style", "display:none")

//     })
// })


let dateInput = document.querySelectorAll(".date");
dateInput.forEach(function (getDate) {
    getDate.addEventListener("change", function () {

        let parent = this.closest(".cart_end");
        let product_id = parent.querySelector(".remove").dataset.id;

        let pdts = cartData_user.find(data=>
            data.uniqueId == product_id);

        let date = parent.querySelector(".date").value
        
        pdts["dateOfDelivery"] = date;

        localStorage.setItem("cartData", JSON.stringify(cartData));
        location.reload();

    })
})


// order button creation
let orderBtn = document.querySelectorAll(".order");
orderBtn.forEach(function (orderFood) {
    orderFood.addEventListener("click", function () {

        // after checking the move to the order page
        let before_date = moment().add({ days: 7 }).format("YYYY-MM-DD");

        let parent = this.closest(".cart_end");
        let delivery_date = parent.querySelector(".date").value;
        let unique_id = parent.querySelector(".remove").getAttribute("data-id")

        // console.log(unique_id)

        find_cart = cartData.filter(data =>
            data.uniqueId == unique_id)
        
        console.log(find_cart[0]["dateOfDelivery"] )

        if (find_cart[0]["dateOfDelivery"] <= before_date) {
            alert("Delivery date should be at least 8 days from now");
        }
        else {
            location.href = "../profile/Order page.html?cartId=" + unique_id;
        }
    })
})


// orderall button get
let orderallBtn = document.querySelector(".orderall");
orderallBtn.addEventListener("click", orderAll);

function orderAll() {

    let a = true;
    let b = true;

    let before_date = moment().add({ days: 7 }).format("YYYY-MM-DD");

    // let parent = this.closest(".cart_end");
    // let delivery_date = parent.querySelector(".date").value;
    // let unique_id = parent.querySelector(".remove").getAttribute("data-id")

    for (i = 1; i < cartData_user.length; i++) {

        let delivery_date = cartData_user[0]["dateOfDelivery"]

        if (delivery_date !== cartData_user[i]["dateOfDelivery"]) {
            alert("If you orderall all delivery date should be same")
            b = false
        }
        // console.log(b);

        if (b !== false) {

            if (delivery_date <= before_date) {
                alert("Delivery date should not be empty (or) Delivery date should be at least 8 days from now");
                a = false
            }
            // console.log(a);

            if (a !== false) {
                location.href = "../profile/Order page.html?cartStatus=" + false;
            }
        }
    }

}



// remove from cart
let removeBtn = document.querySelectorAll(".remove");

removeBtn.forEach(function (removeCart) {
    removeCart.addEventListener("click", function () {

        const confirmed = confirm("Are you sure, Do you want to remove this menu from the cart?");

        if (confirmed) {

            let cartid = this.dataset.id;
            // console.log(cartid);

            function getIndex(e) {
                return e.uniqueId == cartid;
            }

            let remove_menu = cartData.find(getIndex);

            let index = cartData.indexOf(remove_menu);

            cartData.splice(index, 1);
            localStorage.setItem("cartData", JSON.stringify(cartData))
            alert("Menu is removed from the Cart")
            location.reload();

        }
    })
})
