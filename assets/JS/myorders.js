const orderData = JSON.parse(localStorage.getItem("orderData"));
const newMenuData = JSON.parse(localStorage.getItem("menuData"));
const categoryData = JSON.parse(localStorage.getItem("categoryData"));
const dishData = JSON.parse(localStorage.getItem("dishData"));
const user_unique = JSON.parse(localStorage.getItem("user_unique"));

let orderData_user = orderData.filter((data) => data.user_id === user_unique);

// console.log(orderData_user);

function view_orders() {
  const m = moment().format("YYYY-MM-DD");

  for (let i = 0; i < orderData_user.length; i++) {
    const count = orderData_user[i].ordered_product.length;
    // console.log(count)

    for (let j = 0; j < count; j++) {
      const { menu_id } = orderData_user[i].ordered_product[j];
      // console.log(menu_id)

      // for getting menu name from url
      const menu_name = newMenuData.find((data) => data.id === menu_id);
      // console.log(menu_name)

      const { category_id } = orderData_user[i].ordered_product[j];

      // for getting category name from url
      const category_name = categoryData.find(
        (data) => data.id === category_id
      );
      // console.log(category_name)

      // <div class="my-orders_list">
      const div_my_orders_list = document.createElement("div");
      div_my_orders_list.setAttribute("class", "my-orders_list");

      const div_head_order = document.createElement("div");
      div_head_order.setAttribute("class", "head_order");
      div_my_orders_list.append(div_head_order);

      const p_orderId = document.createElement("p");
      p_orderId.setAttribute("class", "order_id");
      p_orderId.innerText = `Order Id : ${orderData_user[i].order_id}`;
      div_head_order.append(p_orderId);

      const p_order_status = document.createElement("p");
      p_order_status.setAttribute("id", "order_status");

      if (orderData_user[i].orderStatus === "Not Delivered") {
        p_order_status.innerText = orderData_user[i].orderStatus;
        p_order_status.setAttribute("style", "color:var(--text-color)");
      }
      if (orderData_user[i].orderStatus === "Cancelled") {
        p_order_status.innerText = orderData_user[i].orderStatus;
        p_order_status.setAttribute("style", "color:var(--second-color)");
      }
      if (orderData_user[i].orderStatus === "Delivered") {
        p_order_status.innerText = orderData_user[i].orderStatus;
        p_order_status.setAttribute("style", "color:var(--thickgreen-color)");
      }

      div_head_order.append(p_order_status);

      // <div class="my_order_text">
      const div_my_order_text = document.createElement("div");
      div_my_order_text.setAttribute("class", "my_order_text");
      div_my_orders_list.append(div_my_order_text);

      const div_subject = document.createElement("div");
      div_subject.setAttribute("class", "subject");
      div_my_order_text.append(div_subject);

      // <h2>Hightea</h2>
      const h2_name = document.createElement("h2");
      h2_name.innerText = `${category_name.categoryName} ${menu_name.menuName}`;
      div_subject.append(h2_name);

      const button = document.createElement("button");
      button.setAttribute("class", "btn view");
      button.setAttribute("type", "button");
      button.setAttribute(
        "value",
        orderData_user[i].ordered_product[j].dishData
      );
      button.innerText = "View Dishes";
      div_subject.append(button);

      // button_cancel = document.createElement("button");
      // button_cancel.setAttribute("class", "btn cancel");
      // button_cancel.innerText = "Cancel Order";
      // button_cancel.setAttribute("value", orderData_user[i]["order_id"])
      // div_subject.append(button_cancel);

      const reviewDetails =
        JSON.parse(localStorage.getItem("reviewDetails")) || [];

      if (orderData_user[i].orderStatus === "Delivered") {
        let a = true;
        for (let d = 0; d < reviewDetails.length; d++) {
          if (orderData_user[i].order_id === reviewDetails[d].order_id) {
            // console.log(orderData_user[i].ordered_product[j].menu_id)
            // console.log(reviewDetails[d].menu_id)
            if (
              orderData_user[i].ordered_product[j].menu_id ===
                reviewDetails[d].menu_id &&
              orderData_user[i].ordered_product[j].category_id ===
                reviewDetails[d].category_id
            ) {
              const rev_thanks = document.createElement("p");
              rev_thanks.setAttribute("class", "rev_thanks");
              rev_thanks.innerText = "Thanks for Rating..";
              div_subject.append(rev_thanks);
              a = false;
            }
          }
        }

        if (a === true) {
          const button_review = document.createElement("button");
          button_review.setAttribute("type", "button");
          button_review.setAttribute("class", "btnReview");
          button_review.innerText = "Give Review";
          div_subject.append(button_review);
        }

        // const div_container = document.createElement("div");
        // div_container.setAttribute("class", "container");

        // const div_post = document.createElement("div");
        // div_post.setAttribute("class", "post");
        // div_container.append(div_post);

        // const div_text = document.createElement("div");
        // div_text.setAttribute("class", "text");
        // div_text.innerText = "Thanks for rating us!";
        // div_post.append(div_text);

        // const div_edit = document.createElement("div");
        // div_edit.setAttribute("class", "edit");
        // div_edit.innerText = "EDIT";
        // div_post.append(div_edit);

        // const div_star = document.createElement("div");
        // div_star.setAttribute("class", "star-widget");
        // div_container.append(div_star);

        // for (let s = 1; s < 6; s++) {
        //   const label_star = document.createElement("label");
        //   label_star.setAttribute("for", `rate-${s}`);
        //   label_star.setAttribute("class", "fa fa-star");
        //   div_star.prepend(label_star);

        //   const input_radio = document.createElement("input");
        //   input_radio.type = "radio";
        //   input_radio.name = "rate";
        //   input_radio.id = `rate-${s}`;
        //   div_star.prepend(input_radio);
        // }
        // div_subject.append(div_container);

        // const form = document.createElement("form");
        // form.setAttribute("action", "#");
        // div_star.append(form);

        // const heading_rating = document.createElement("h2");
        // heading_rating.setAttribute("id", "header");
        // form.append(heading_rating);

        // const div_review = document.createElement("div");
        // div_review.setAttribute("class", "textarea");
        // form.append(div_review);

        // const textarea = document.createElement("textarea");
        // textarea.setAttribute("cols", "30");
        // textarea.setAttribute("placeholder", "Describe your experience..");
        // div_review.append(textarea);

        // const div_btn = document.createElement("div");
        // div_btn.setAttribute("class", "btn_post");
        // form.append(div_btn);

        // const button_submit = document.createElement("button");
        // button_submit.setAttribute("type", "submit");
        // button_submit.innerText = "Post";
        // div_btn.append(button_submit);
      }
      if (orderData_user[i].orderStatus === "Not Delivered") {
        const button_cancel = document.createElement("button");
        button_cancel.setAttribute("class", "btn cancel");
        button_cancel.innerText = "Cancel Order";
        button_cancel.setAttribute("value", orderData_user[i].order_id);
        div_subject.append(button_cancel);

        // one day before delivery cancel button will be disappeard
        const getDate = orderData_user[i].dateOfDelivery;

        const date = moment(getDate);
        date.subtract(1, "days");
        const one_day_before = date.format("YYYY-MM-DD");
        // console.log(one_day_before)

        if (one_day_before === m) {
          button_cancel.setAttribute("style", "display:none");

          const arriving = document.createElement("p");
          arriving.setAttribute("class", "arr_status");
          arriving.innerText = "Arriving Tomorrow";
          div_subject.append(arriving);
        }
      }

      if (orderData_user[i].orderStatus === "Cancelled") {
        const p_reason = document.createElement("p");
        p_reason.setAttribute("class", "reason");
        p_reason.innerText = orderData_user[i].cancel_reason;
        p_reason.setAttribute("style", "display:block");
        div_subject.append(p_reason);

        const span_reason = document.createElement("span");
        span_reason.innerText = "Cancel Reason : ";
        p_reason.prepend(span_reason);
      }

      const div_field = document.createElement("div");
      div_field.setAttribute("class", "field");
      div_my_order_text.append(div_field);

      const div_1 = document.createElement("div");
      div_field.append(div_1);

      // <label>Date:<p>25.12.2022</p></label>
      const label_1 = document.createElement("label");
      label_1.innerText = "Delivery Date:";
      div_1.append(label_1);

      const input_1 = document.createElement("input");
      input_1.setAttribute("type", "date");
      input_1.setAttribute("value", orderData_user[i].dateOfDelivery);
      input_1.setAttribute("readOnly", "true");
      div_1.append(input_1);

      const div_2 = document.createElement("div");
      div_field.append(div_2);

      // <label>No.Of.Guest: 39</label>
      const label_2 = document.createElement("label");
      label_2.innerText = "No.of.Guest:";
      div_2.append(label_2);

      const input_2 = document.createElement("input");
      input_2.setAttribute("type", "number");
      input_2.setAttribute(
        "value",
        orderData_user[i].ordered_product[j].no_of_guest
      );
      input_2.setAttribute("readOnly", "true");
      div_2.append(input_2);

      const div_3 = document.createElement("div");
      div_field.append(div_3);

      // <label>Status: <p>Delivered</p> </label>
      const label_3 = document.createElement("label");
      label_3.innerText = "Price:";
      div_3.append(label_3);

      const input_3 = document.createElement("input");
      input_3.setAttribute("type", "number");
      input_3.setAttribute("value", orderData_user[i].ordered_product[j].price);
      input_3.setAttribute("readOnly", "true");
      div_3.append(input_3);

      const div_dropdown = document.createElement("div");
      div_dropdown.setAttribute("class", "dropdown_menu-type-content animate");
      div_dropdown.setAttribute("id", "show");
      div_my_order_text.append(div_dropdown);

      // <i class='bx bx-x-circle'></i>

      const icon = document.createElement("i");
      icon.setAttribute("class", "bx bx-x-circle");
      icon.setAttribute("id", "closeDish");
      div_dropdown.append(icon);

      const ul_dishes = document.createElement("ul");
      ul_dishes.setAttribute("class", "dishes");
      div_dropdown.append(ul_dishes);

      const find_dish_data = orderData_user[i].ordered_product[j].dishData;
      // console.log(find_dish_data);

      const finddish = dishData.filter((product) =>
        find_dish_data.some((find) => find.id === product.id)
      );

      // console.log(finddish);
      for (let k = 0; k < finddish.length; k++) {
        const li = document.createElement("li");
        li.innerText = finddish[k].name;
        ul_dishes.append(li);
      }

      document.querySelector("div.orders").prepend(div_my_orders_list);
    }
  }

  // view dish
  const viewBtn = document.querySelectorAll(".view");
  viewBtn.forEach((showDishes) => {
    showDishes.addEventListener("click", function empty() {
      // console.log("rajini")
      const parent = this.closest(".my-orders_list");

      const div_dish = parent.querySelector("#show");
      div_dish.setAttribute("style", "display:block");

      const div_back_1 = parent.querySelector(".my_order_text div");
      div_back_1.style.opacity = "0.5";

      const div_back = parent.querySelector(".field");
      div_back.style.opacity = "0.2";
    });
  });

  // close dish
  const closeBtn = document.querySelectorAll("#closeDish");
  closeBtn.forEach((close_dish) => {
    close_dish.addEventListener("click", function empty() {
      const parent = this.closest(".my-orders_list");
      const div_dish = parent.querySelector(".dropdown_menu-type-content");
      div_dish.removeAttribute("style");

      const div_back_1 = parent.querySelector(".my_order_text div");
      div_back_1.removeAttribute("style");

      const div_back = parent.querySelector(".field");
      div_back.removeAttribute("style");
    });
  });

  // cancel order
  const cancelBtn = document.querySelectorAll(".cancel");
  cancelBtn.forEach((cancelOrder) => {
    cancelOrder.addEventListener("click", function empty() {
      const reason = prompt("Enter the reason", "");
      if (reason == null || reason === "") {
        alert("Enter the reason");
      } else {
        // console.log(reason);
        const parent = this.closest(".my_order_text");
        const user_id = parent.querySelector(".cancel");

        const findData = orderData.filter(
          (data) => data.order_id === user_id.value
        );
        // console.log(findData)

        findData[0].orderStatus = "Cancelled";
        findData[0].cancel_reason = reason;
        // console.log(findData[0]);

        localStorage.setItem("orderData", JSON.stringify(orderData));
        alert("Order cancelled Sucessfully");
        // user_id.setAttribute("style", "display:none")
        window.location.reload();

        const indicate_status = parent.querySelector("#order_status");
        indicate_status.setAttribute("style", "color:red");
      }
    });
  });

  // const m = moment().format("YYYY-MM-DD");
  // console.log(m)

  const find_notDelivered_data = orderData.filter(
    (data) => data.orderStatus === "Not Delivered"
  );
  // console.log(find_notDelivered_data);

  for (let i = 0; i < find_notDelivered_data.length; i++) {
    if (find_notDelivered_data[i].dateOfDelivery <= m) {
      find_notDelivered_data[i].orderStatus = "Delivered";
      localStorage.setItem("orderData", JSON.stringify(orderData));
    }
  }

  // review button
  const reviewBtn = document.querySelectorAll(".btnReview");
  reviewBtn.forEach((reviewPage) => {
    reviewPage.addEventListener("click", function nextpage() {
      const parent = this.closest(".my-orders_list");
      // console.log(parent);
      const nxt_order_id = parent
        .querySelector(".order_id")
        .innerText.replace("Order Id :", "")
        .trim();

      const menuCategory = `${parent.querySelector("h2").innerText}`;

      const namesMenuCate = menuCategory.split(" ");

      const find_menuId = newMenuData.filter(
        (data) => data.menuName === namesMenuCate[1]
      );
      // console.log(find_menuId[0].id);

      const find_categoryId = categoryData.filter(
        (data) => data.categoryName === namesMenuCate[0]
      );
      // console.log(find_categoryId[0].id);

      window.location.href = `./review.html?orderId=${nxt_order_id}&menuId=${find_menuId[0].id}&categoryId=${find_categoryId[0].id}`;
    });
  });
}

view_orders();
// console.log(orderData_user)

const statusBtn = document.querySelectorAll(".btn_toggle");
statusBtn.forEach((showOrders) => {
  showOrders.addEventListener("click", function empty() {
    orderData_user = orderData.filter((data) => data.user_id === user_unique);

    const div_for_append = document.querySelector("div.orders");

    div_for_append.innerText = "";

    const parent = this.innerText;
    // console.log(parent);

    orderData_user = orderData_user.filter(
      (data) => data.orderStatus === `${parent}`
    );

    view_orders();
  });
});
