
orderData = JSON.parse(localStorage.getItem("orderData"));
menuData = JSON.parse(localStorage.getItem("menuData"));
categoryData = JSON.parse(localStorage.getItem("categoryData"));
dishData = JSON.parse(localStorage.getItem("dishData"));
user_unique = JSON.parse(localStorage.getItem("user_unique"))


{/* <div class="my-orders_list">

    <div class="my_order_text">
        <div>
            <h2>VIP Hightea</h2>
            <button type="button" class="btn view">View Dishes</button>
        </div>

        <div class="field">
            <div>
                <label for="">Delivery Date:</label>
                <input type="date" value="25.12.2022">
            </div>
            <div>
                <label for="">No.of.Guest:</label>
                <input type="number" value="39">
            </div>
            <div>
                <label for="">Price:</label>
                <input type="number" value="1500">
            </div>
            <div>
                <label for="">Order Status</label>
                <input type="text" value="Delivered">
            </div>
        </div>
    </div>

    <div class="dropdown_menu-type-content animate" id="show">
        <ul class="dishes">
            <li> PUDDINGS</li>
            <li> COFFEE</li>
            <li> TEA</li>
            <li> LASSI</li>
            <li> TUN TUN LADDU</li>
            <li> SPECIAL SAMOSA</li>
            <li> VEGETARIAN SANDWICH</li>
            <li> VADA WITH CHUTNY</li>
            <li> CREAM CAKE</li>
            <li> FRESH JUICE</li>
            <li> PUFF</li>
            <li> BHEL PURI (OR) CUTLET</li>
        </ul>
    </div>
</div> */}



let orderData_user = orderData.filter(data=>
        data.user_id == user_unique);

console.log(orderData_user);




for (let i = 0; i < orderData_user.length; i++) {
    let count = orderData_user[i]["ordered_product"].length
    // console.log(count)

    for (let j = 0; j < count; j++) {

        let menu_id = orderData_user[i]["ordered_product"][j]["menu_id"]
        // console.log(menu_id)

        // for getting menu name from url
        let menu_name = menuData.find(data =>
            data.id === menu_id);
        // console.log(menu_name)

        let category_id = orderData_user[i]["ordered_product"][j]["category_id"]

        // for getting category name from url
        let category_name = categoryData.find(data =>
            data.id === category_id);
        // console.log(category_name)


        // <div class="my-orders_list">
        div_my_orders_list = document.createElement("div");
        div_my_orders_list.setAttribute("class", "my-orders_list");

        div_header = document.createElement("div");
        div_header.setAttribute("class", "header")
        div_my_orders_list.append(div_header);

        p_orderId = document.createElement("p");
        p_orderId.setAttribute("class", "order_id");
        p_orderId.innerText = "Order Id:" + " " + orderData_user[i]["order_id"]
        div_header.append(p_orderId);

        p_order_status = document.createElement("p");
        p_order_status.setAttribute("id", "order_status");

        if (orderData_user[i]["orderStatus"] == "Not Delivered") {
            p_order_status.innerText = orderData_user[i]["orderStatus"];
            p_order_status.setAttribute("style", "color:var(--text-color)");
        }
        if(orderData_user[i]["orderStatus"]== "Cancelled"){
            p_order_status.innerText = orderData_user[i]["orderStatus"];
            p_order_status.setAttribute("style", "color:var(--second-color)");
        }
        if(orderData_user[i]["orderStatus"]== "Delivered"){
            p_order_status.innerText = orderData_user[i]["orderStatus"];
            p_order_status.setAttribute("style", "color:var(--thickgreen-color)");
        }
        
        div_header.append(p_order_status);

        // <div class="my_order_text"> 
        div_my_order_text = document.createElement("div");
        div_my_order_text.setAttribute("class", "my_order_text");
        div_my_orders_list.append(div_my_order_text);

        div_subject = document.createElement("div");
        div_subject.setAttribute("class", "subject")
        div_my_order_text.append(div_subject);

        // <h2>Hightea</h2>
        h2_name = document.createElement("h2");
        h2_name.innerText = category_name["categoryName"] + " " + menu_name["menuName"];
        div_subject.append(h2_name);

        button = document.createElement("button");
        button.setAttribute("class", "btn view");
        button.setAttribute("type", "button");
        button.setAttribute("value", orderData_user[i]["ordered_product"][j]["dishData"])
        button.innerText = "View Dishes";
        div_subject.append(button);


        if (orderData_user[i]["orderStatus"] == "Cancelled" || orderData_user[i]["orderStatus"] == "Delivered") {
            button_cancel = document.createElement("button");
            button_cancel.setAttribute("class", "btn cancel");
            button_cancel.innerText = "Cancel Order";
            button_cancel.setAttribute("value", orderData_user[i]["order_id"])
            button_cancel.setAttribute("style", "display:none")
            div_subject.append(button_cancel);
        }
        else {
            button_cancel = document.createElement("button");
            button_cancel.setAttribute("class", "btn cancel");
            button_cancel.innerText = "Cancel Order";
            button_cancel.setAttribute("value", orderData_user[i]["order_id"])
            div_subject.append(button_cancel);
        }


        div_field = document.createElement("div");
        div_field.setAttribute("class", "field");
        div_my_order_text.append(div_field);

        div_1 = document.createElement("div");
        div_field.append(div_1);

        // <label>Date:<p>25.12.2022</p></label>
        label_1 = document.createElement("label");
        label_1.innerText = "Delivery Date:";
        div_1.append(label_1);

        input_1 = document.createElement("input");
        input_1.setAttribute("type", "date")
        input_1.setAttribute("value", orderData_user[i]["dateOfDelivery"])
        input_1.setAttribute("readOnly", "true");
        div_1.append(input_1);

        div_2 = document.createElement("div");
        div_field.append(div_2);

        // <label>No.Of.Guest: 39</label>
        label_2 = document.createElement("label");
        label_2.innerText = "No.of.Guest:";
        div_2.append(label_2);

        input_2 = document.createElement("input");
        input_2.setAttribute("type", "number");
        input_2.setAttribute("value", orderData_user[i]["ordered_product"][j]["no_of_guest"]);
        input_2.setAttribute("readOnly", "true");
        div_2.append(input_2);

        div_3 = document.createElement("div");
        div_field.append(div_3);

        // <label>Status: <p>Delivered</p> </label>
        label_3 = document.createElement("label");
        label_3.innerText = "Price:";
        div_3.append(label_3);

        input_3 = document.createElement("input");
        input_3.setAttribute("type", "number");
        input_3.setAttribute("value", orderData_user[i]["ordered_product"][j]["price"]);
        input_3.setAttribute("readOnly", "true");
        div_3.append(input_3);

        div_dropdown = document.createElement("div");
        div_dropdown.setAttribute("class", "dropdown_menu-type-content animate");
        div_dropdown.setAttribute("id", "show");
        div_my_order_text.append(div_dropdown);

        // <i class='bx bx-x-circle'></i>

        icon = document.createElement("i");
        icon.setAttribute("class", "bx bx-x-circle")
        icon.setAttribute("id", "closeDish");
        div_dropdown.append(icon)

        ul_dishes = document.createElement("ul");
        ul_dishes.setAttribute("class", "dishes");
        div_dropdown.append(ul_dishes);

        let find_dish_data = orderData_user[i]["ordered_product"][j]["dishData"]
        // console.log(find_dish_data);

        let finddish = dishData.filter(product =>
            find_dish_data.some(find => find.id === product.id));

        // console.log(finddish);
        for (let k = 0; k < finddish.length; k++) {
            li = document.createElement("li");
            li.innerText = finddish[k]["name"];
            ul_dishes.append(li);
        }

        document.querySelector("section.my-orders").append(div_my_orders_list);

    }
}


// view dish
let viewBtn = document.querySelectorAll(".view");
viewBtn.forEach(function (showDishes) {
    showDishes.addEventListener("click", function () {

        parent = this.closest(".my-orders_list")

        let div_dish = parent.querySelector("#show")
        div_dish.setAttribute("style", "display:block");

        let div_back_1 = parent.querySelector(".my_order_text div")
        div_back_1.style.opacity = "0.5";


        let div_back = parent.querySelector(".field");
        div_back.style.opacity = "0.2";

    })
})


// close dish
let closeBtn = document.querySelectorAll("#closeDish");
closeBtn.forEach(function (close_dish) {
    close_dish.addEventListener("click", function () {

        parent = this.closest(".my-orders_list");
        let div_dish = parent.querySelector(".dropdown_menu-type-content")
        div_dish.removeAttribute("style")

        let div_back_1 = parent.querySelector(".my_order_text div")
        div_back_1.removeAttribute("style")

        let div_back = parent.querySelector(".field");
        div_back.removeAttribute("style")

    })
})



// cancel order
let cancelBtn = document.querySelectorAll(".cancel");
cancelBtn.forEach(function (cancelOrder) {
    cancelOrder.addEventListener("click", function () {

        parent = this.closest(".my_order_text");
        user_id = parent.querySelector(".cancel");

        findData = orderData.filter(data =>
            data.order_id == user_id.value);
        // console.log(findData)

        findData[0]["orderStatus"] = "Cancelled";

        localStorage.setItem("orderData", JSON.stringify(orderData));
        alert("Ordered cancelled Sucessfully")
        user_id.setAttribute("style", "display:none")
        location.reload();

        let indicate_status = parent.querySelector("#order_status")
        indicate_status.setAttribute("style", "color:red");

    })
})


let m = moment().format("YYYY-MM-DD");
console.log(m)

let find_notDelivered_data = orderData.filter(data=>
    data.orderStatus == "Not Delivered")
console.log(find_notDelivered_data);


for(i=0; i<find_notDelivered_data.length; i++){
    if(orderData[i]["dateOfDelivery"] <= m){
        orderData[i]["orderStatus"] = "Delivered"
        localStorage.setItem("orderData", JSON.stringify(orderData));
    }
}
