
const cartId = new URLSearchParams(window.location.search).get("cartId");
const orderStatus = new URLSearchParams(window.location.search).get("orderStatus");

let cartData = JSON.parse(localStorage.getItem("cartData"));
let userData = JSON.parse(localStorage.getItem("userData"));
// let menuData = JSON.parse(localStorage.getItem("menuData"));
let categoryData = JSON.parse(localStorage.getItem("categoryData"));
let dishData = JSON.parse(localStorage.getItem("dishData"));


// get data from userData
document.getElementById("name").value = userData[0]["name"]
document.getElementById("email").value = userData[0]["email"]
document.getElementById("phone_number").value = userData[0]["phone_number"]



if (cartId) {

    let cartdetails = cartData.filter(data =>
        data.uniqueId === cartId)


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
    let totalCost = 0;

    for (let i = 0; i < cartdetails.length; i++) {

        div_seperation = document.createElement("div");
        div_seperation.setAttribute("class", "seperation");

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
        input_1.value = cartdetails[i]["noOfGuest"];
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
        input_2.value = cartdetails[i]["totalCost"] * cartdetails[i]["noOfGuest"];
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
        input_3.value = cartdetails[i]["dateOfDelivery"];
        div_3.append(input_3);

        ensure = document.createElement("p");
        ensure.setAttribute("class", "ensure");
        ensure.innerText = "*Please check the Delivery date and No.of.guest. If you want to edit go to My cart"
        div_seperation.append(ensure)

        document.querySelector(".order_details").append(div_seperation);

        totalCost += cartData[i]["totalCost"] * cartData[i]["noOfGuest"]

    }

    div_last = document.createElement("div");
    div_last.setAttribute("class", "last")

    label_last = document.createElement("label");
    label_last.innerText = "Total Cost"
    div_last.append(label_last);

    input_last = document.createElement("input");
    input_last.setAttribute("type", "number");
    input_last.setAttribute("id", "totalcost");
    input_last.setAttribute("readonly", "true");
    input_last.value = totalCost;
    div_last.append(input_last);

    document.querySelector(".order_details").append(div_last);

}


else {
    // let cartdetails = cartData.filter(data =>
    //     data.orderStatus == orderStatus)

    // console.log(cartdetails);

    // let menuId = cartdetails[0]["menu_id"];

    // // for getting menu name from url
    // let menu_name = menuData.find(data =>
    //     data.id === menuId);
    // console.log(menu_name)


    // let categoryId = cartdetails[0]["category_id"];

    // // for getting category name from url
    // let category_name = categoryData.find(data =>
    //     data.id === categoryId);
    // console.log(category_name);

    // let n = cartdetails[0]["dishData"]
    // // let z = cartdetails.length


    // let finddish = dishData.filter(product =>
    //     n.some(find => find.id === product.id));
    // // console.log(finddish)

    // let userId = userData[0]["email"];
    // // console.log(userId)

    let totalCost = 0;

    for (let i = 0; i < cartData.length; i++) {

        div_seperation = document.createElement("div");
        div_seperation.setAttribute("class", "seperation");


        let menuId = cartData[i]["menu_id"];

        // for getting menu name from url
        let menu_name = menuData.find(data =>
            data.id === menuId);

        let categoryId = cartData[i]["category_id"];

        // for getting category name from url
        let category_name = categoryData.find(data =>
            data.id === categoryId);

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
        input_1.value = cartData[i]["noOfGuest"];
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
        input_2.setAttribute("id", "price" + i);
        input_2.setAttribute("readonly", "true")
        input_2.value = cartData[i]["totalCost"] * cartData[i]["noOfGuest"];
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
        input_3.value = cartData[i]["dateOfDelivery"];
        div_3.append(input_3);

        ensure = document.createElement("p");
        ensure.setAttribute("class", "ensure");
        ensure.innerText = "*Please check the Delivery date and No.of.guest. If you want to edit go to My cart"
        div_seperation.append(ensure)

        document.querySelector(".order_details").append(div_seperation);

        totalCost += cartData[i]["totalCost"] * cartData[i]["noOfGuest"]

    }

    div_last = document.createElement("div");
    div_last.setAttribute("class", "last")

    label_last = document.createElement("label");
    label_last.innerText = "Total Cost"
    div_last.append(label_last);

    input_last = document.createElement("input");
    input_last.setAttribute("type", "number");
    input_last.setAttribute("id", "totalcost");
    input_last.setAttribute("readonly", "true");
    input_last.value = totalCost;
    div_last.append(input_last);

    document.querySelector(".order_details").append(div_last);

}


// order button has onsubmit function
const placeOrder = e => {
    e.preventDefault()

    let orderData = JSON.parse(localStorage.getItem("orderData")) || [];

    let findData = ""

    if (cartId) {
        findData = cartData.filter(data =>
            data.uniqueId == cartId);
        console.log(findData)
    }

    else {
        findData = cartData
    }

    let ordered_product = [];
    let totalCost = 0

    // orderData []
    let order_id = findData[0]["uniqueId"];
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone_number = document.getElementById("phone_number").value;
    let address = document.getElementById("address").value;

    let menu_id = "";
    let category_id = "";
    let dish = "";
    let no_of_guest = "";
    let price = "";
    let dateOfDelivery = "";

    for (let i = 0; i < findData.length; i++) {

        // ordered_product []
        menu_id = findData[i]["menu_id"];
        category_id = findData[i]["category_id"];
        dish = findData[i]["dishData"];
        no_of_guest = findData[i]["noOfGuest"];
        price = findData[i]["totalCost"] * findData[i]["noOfGuest"];
        dateOfDelivery = findData[0]["dateOfDelivery"];

        totalCost += findData[i]["totalCost"] * findData[i]["noOfGuest"];

        ordered_product.push({ menu_id: menu_id, category_id: category_id, dishData: dish, no_of_guest: no_of_guest, price: price, })
    }

    let delivery_date = document.getElementById("delivery_date").value;
    let order_date = moment().format("DD/MM/YYYY hh:mm:ssA");

    let before_date = moment().add({ days: 7 }).format("YYYY-MM-DD");

    if (delivery_date >= before_date) {

        orderData.push({
            order_id: order_id, name: name, user_id: email, phone_number: phone_number, address: address, dateOfDelivery: dateOfDelivery,
            order_date: order_date, ordered_product: ordered_product, totalCost: totalCost, orderStatus: "Not Delivered"
        })

        alert("Order Placed Sucessfully");
        localStorage.setItem("orderData", JSON.stringify(orderData));

        if (cartId) {
            for (j = 0; j < cartData.length; j++) {
                if (findData[0]["uniqueId"] == cartData[j]["uniqueId"]) {
                    cartData.splice(j, 1);
                    localStorage.setItem("cartData", JSON.stringify(cartData))
                    location.reload();
                }
            }
        }
        else{
            cartData.splice(0, cartData.length);
            localStorage.setItem("cartData", JSON.stringify(cartData))
            location.reload();
        }
        window.location.href = "./my orders.html";
    }
    
    else {
        alert("Please check the Delivery date.")
    }
}


