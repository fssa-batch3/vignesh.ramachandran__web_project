

trasactionTable = JSON.parse(localStorage.getItem("transactionTable"));


let addtoCartBtn = document.querySelector(".add_to_cart");
addtoCartBtn.addEventListener("click", addtoCart);

function addtoCart() {

    // for getting menu id from url
    const menuId = new URLSearchParams(window.location.search).get("menu")

    let menuDetails = transactionTable.filter(data =>
        data.menuType === menuId)

    console.log(menuDetails)

    // for getting menu name from url

    let menu_name = menuData.find(data =>
        data.id === menuId);

    console.log(menu_name["menuName"]);

    // for getting category id from url
    const categoryId = new URLSearchParams(window.location.search).get("category");

    let categoryDetails = menuDetails.filter(data =>
        data.categoryType === categoryId)

    console.log(categoryDetails)

    // for getting category name from url
    let category_name = categoryData.find(data =>
        data.id === categoryId);

    console.log(category_name["categoryName"]);

    // filtering the dish from the dishData using menu id and category id from the transactionTable
    let findData = dishData.filter(product =>
        categoryDetails.some(find => find.dish === product.id))


    cartData = JSON.parse(localStorage.getItem("cartData")) || [];

    let m_name = menu_name["menuName"];
    let c_name = category_name["categoryName"];
    let uuid = uuidv4();


    if (cartData.length == 0) {
        let cost = 0
        for (let i = 0; i < findData.length; i++) {
            cost += parseInt(findData[i]["price"])
        }
        console.log(cost)
        cartData.push({ menuName: m_name, categoryName: c_name, uniqueId: uuid, totalCost: cost, dishData: findData })
        // console.log(cartData[0])
        alert("Menu added into the Cart ✅")
        localStorage.setItem("cartData", JSON.stringify(cartData));
    }

    else if (cartData !== 0) {

        let a = true;
        for (i = 0; i < cartData.length; i++) {

            if (m_name == cartData[i]["menuName"] && c_name == cartData[i]["categoryName"]) {
                alert("This menu already in the cart ‼")
                a = false;
            }
        }
        if (a !== false) {
            let cost = 0
            for (let i = 0; i < findData.length; i++) {
                cost += parseInt(findData[i]["price"])
            }
            console.log(cost)

            alert("Menu added into the Cart ✅")
            cartData.push({ menuName: m_name, categoryName: c_name, uniqueId: uuid,totalCost: cost, dishData: findData })
            localStorage.setItem("cartData", JSON.stringify(cartData));

        }

    }





    // let menu_id = menuDetails["id"];
    // let category_id = categoryDetails["id"];

    // console.log(menu_id);
    // console.log(category_id);



    // 2nd method to get (filtering the dish from the dishData using menu id and category id from the transactionTable)

    // // filtering Menu
    // function getMenu(e) {
    //     return e.menuType === menuId;
    // }
    // findData = transactionTable.filter(getMenu)
    // // console.log(findData);


    // //  filtering Category
    // function getCategory(e) {
    //     return e.categoryType === categoryId;
    // }
    // findData2 = findData.filter(getCategory)
    // // console.log(findData2)

    // // comparing the dish id from the findData2 to id from the dishData
    // let findData3 = dishData.filter(product =>
    //     findData2.some(find => find.dish === product.id))

    // console.log(findData3);









}