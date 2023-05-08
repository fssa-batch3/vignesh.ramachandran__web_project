// const transactionTable = JSON.parse(localStorage.getItem("transactionTable"));
// const dishData = JSON.parse(localStorage.getItem("dishData"));
// const userData = JSON.parse(localStorage.getItem("userData"));
const user_unique = JSON.parse(localStorage.getItem("user_unique"));
// console.log(user_unique);
const addtoCartBtn = document.querySelector(".add_to_cart");
function addtoCart() {
  if (user_unique == null) {
    alert("Please Login");
  } else {
    // for getting menu id from url
    const menuId = new URLSearchParams(window.location.search).get("menu");
    // console.log(menuId);

    const menuDetails = transactionTable.filter(
      (data) => data.menuType === menuId
    );

    // console.log(menuDetails)

    // for getting menu name from url

    // const menu_name = menuData.find((data) => data.id === menuId);

    // console.log(menu_name["menuName"]);

    // for getting category id from url
    const categoryId = new URLSearchParams(window.location.search).get(
      "category"
    );

    const categoryDetails = menuDetails.filter(
      (data) => data.categoryType === categoryId
    );

    // console.log(categoryDetails);

    // for getting category name from url
    // let category_name = categoryData.find((data) => data.id === categoryId);

    // console.log(category_name["categoryName"]);

    // filtering the dish from the dishData using menu id and category id from the transactionTable
    const findData = dishData.filter((product) =>
      categoryDetails.some((find) => find.dish === product.id)
    );

    // console.log(findData);
    const dishDataTrue = findData.filter((data) => data.status === "true");

    // function getStatus(e) {
    //   return e.status === "true";
    // }
    // dishDataTrue = findData.filter(getStatus);

    const dishes_id = [];

    for (let i = 0; i < dishDataTrue.length; i++) {
      const value = dishDataTrue[i].id;
      dishes_id.push({ id: value });
    }

    // console.log(dishes_id);

    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

    const find_user = cartData.filter((data) => data.user_id === user_unique);

    // console.log(find_user[0]["menu_id"])

    // let m_name = menu_name["menuName"];
    // let c_name = category_name["categoryName"];
    const no_of_guest = 1;
    const date_of_delivery = "";
    const uuid = uuidv4();

    if (find_user.length === 0) {
      let cost = 0;
      for (let i = 0; i < dishDataTrue.length; i++) {
        cost += parseInt(dishDataTrue[i].price);
      }
      // console.log(cost)
      cartData.push({
        user_id: user_unique,
        menu_id: menuId,
        category_id: categoryId,
        uniqueId: uuid,
        totalCost: cost,
        noOfGuest: no_of_guest,
        dateOfDelivery: date_of_delivery,
        dishData: dishes_id,
        cartStatus: "false",
      });
      // console.log(cartData[0])
      alert("Menu added into the Cart ✅");
      localStorage.setItem("cartData", JSON.stringify(cartData));
      window.location.reload();
    } else if (find_user.length !== 0) {
      let a = true;
      for (let i = 0; i < find_user.length; i++) {
        if (
          menuId === find_user[i].menu_id &&
          categoryId === find_user[i].category_id
        ) {
          alert("This menu already in the cart ‼");
          a = false;
        }
      }
      if (a !== false) {
        let cost = 0;
        for (let i = 0; i < dishDataTrue.length; i++) {
          cost += parseInt(dishDataTrue[i].price);
        }

        alert("Menu added into the Cart ✅");
        cartData.push({
          user_id: user_unique,
          menu_id: menuId,
          category_id: categoryId,
          uniqueId: uuid,
          totalCost: cost,
          noOfGuest: no_of_guest,
          dateOfDelivery: date_of_delivery,
          dishData: dishes_id,
          cartStatus: "false",
        });
        localStorage.setItem("cartData", JSON.stringify(cartData));
        window.location.reload();
      }
    }
  }
}

addtoCartBtn.addEventListener("click", addtoCart);
