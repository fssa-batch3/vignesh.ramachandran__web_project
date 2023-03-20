
orderData = JSON.parse(localStorage.getItem("orderData"));

{/* <div class="my-orders_list">

<div class="my_order_text">
    <h2>Hightea</h2>
    <label>Date:<p>25.12.2022</p></label>
    <label>No.Of.Guest: 39</label>
    <label>Status: <p>Delivered</p> </label>
</div>

<div class="dropdown_menu-type">
    <div class="menu-heading">
        <h3><span>SR</span>'s VIP Hightea</h3>
        <i class='bx bx-chevron-up'></i>
    </div>

    <div class="dropdown_menu-type-content">
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
</div>
</div> */}

// // <div class="my-orders_list">
// div_my_orders_list = document.createElement("div");
// div_my_orders_list.setAttribute("class", "my-orders_list");

// // <div class="my_order_text"> 
// div_my_order_text = document.createElement("div");
// div_my_order_text.setAttribute("class", "my_order_text");
// div_my_orders_list.append(div_my_order_text);

// // <h2>Hightea</h2>
// h2_name = document.createElement("h2");
// h2_name.innerText = "Hightea";
// div_my_order_text.append(h2_name);

// div = document.createElement("div");
// div_my_order_text.append(div);

// // <label>Date:<p>25.12.2022</p></label>
// label_1 = document.createElement("label");
// label_1.innerText = "Delivery Date:";
// div.append(label_1);

// p_1 = document.createElement("p");
// p_1.innerText = "25-12-2022";
// label_1.append(p_1);

// // <label>No.Of.Guest: 39</label>
// label_2 = document.createElement("label");
// label_2.innerText = "No.of.Guest:";
// div.append(label_2);

// p_2 = document.createElement("p");
// p_2.innerText = "9";
// label_2.append(p_2);

// // <label>Status: <p>Delivered</p> </label>
// label_3 = document.createElement("label");
// label_3.innerText = "Status:";
// div.append(label_3);

// p_3 = document.createElement("p");
// p_3.innerText = "Delivered";
// label_3.append(p_3);









// document.querySelector("section.my-orders").append(div_my_orders_list);





let viewBtn = document.querySelectorAll(".view");
viewBtn.forEach(function (showDishes){
    showDishes.addEventListener("click", function(){

        let div_dish = document.querySelector("#show")
        div_dish.setAttribute("style", "display:block");


    })
})