
let dishData = JSON.parse(localStorage.getItem("dishData")) || [];
let transactionTable = JSON.parse(localStorage.getItem("transactionTable")) || [];

// selecting the plus button and empty div
const addBtn = document.querySelector(".bx-plus")
addBtn.addEventListener("click", addInput)

function addInput() {

    let container = document.getElementById("input_group");

    function add_input() {
        // create div_field
        const div_field = document.createElement("div");
        div_field.setAttribute("class", "field");

        // create a new input element
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = "Enter Dish Name";
        newInput.id = n;
        newInput.name = "dish";
        // newInput.id = "dish" + (n);
        newInput.required = "true";

        let inputPrice = document.createElement("input");
        inputPrice.type = "number";
        inputPrice.placeholder = "Enter Price";
        inputPrice.id = "price" + n;
        inputPrice.required = "true";


        // append html tags depends upon our wish
        container.append(div_field);
        div_field.appendChild(newInput);
        div_field.append(inputPrice);

    }


    let inputCount = document.getElementsByName("dish").length;
    // console.log(inputCount)

    n = ""

    if (dishData.length == 0) {

        n = inputCount + 1;
        // console.log(n)

        add_input()
    }
    else {

        let localDishcount = dishData.length;

        let n = inputCount + localDishcount + 1;
        // console.log(n);

        // create div_field
        const div_field = document.createElement("div");
        div_field.setAttribute("class", "field");

        // create a new input element
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = "Enter Dish Name";
        newInput.id = n;
        newInput.name = "dish";
        // newInput.id = "dish" + (n);
        newInput.required = "true";

        let inputPrice = document.createElement("input");
        inputPrice.type = "number";
        inputPrice.placeholder = "Enter Price";
        inputPrice.id = "price" + n;
        inputPrice.required = "true";


        // append html tags depends upon our wish
        container.append(div_field);
        div_field.appendChild(newInput);
        div_field.append(inputPrice);

    }

}

// new code

// creating select option depends upon the menuData
let menulist = document.querySelector(".menulist")

let menuData = JSON.parse(localStorage.getItem("menuData"));

let categoryData = JSON.parse(localStorage.getItem("categoryData"));

for (i = 0; i < menuData.length; i++) {
    let option = document.createElement("option");
    option.value = menuData[i]["id"];
    option.innerText = menuData[i]["menuName"];

    menulist.append(option);
}

// get the local storage value to the select and option for category name
let showCatergoy = document.querySelector(".show1")
showCatergoy.addEventListener("click", getCatDetails)

function getCatDetails() {
    // creating select option depends upon the categoryData
    let categorylist = document.querySelector(".categorylist");

    for (i = 0; i < categoryData.length; i++) {
        let option = document.createElement("option");
        option.value = categoryData[i]["id"];
        option.innerText = categoryData[i]["categoryName"];

        categorylist.append(option);
    }
}

// new code



// select the submit button and add event
submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", getData);

function getData() {


    let inputCount = document.getElementsByName("dish").length;
    // console.log(inputCount);

    let localDishcount = dishData.length;
    // console.log(localDishcount)

    let n = inputCount + localDishcount;
    // console.log(n);

    let menuType = document.getElementById("menuName").value;
    let categoryType = document.getElementById("categoryName").value;

    // console.log(menuType);
    // console.log(categoryType);

    if (dishData.length == 0 && transactionTable.length == 0) {

        // loop for getting dishes by using id
        for (i = 1; i <= inputCount; i++) {
            dishes = document.getElementById(i).value;
            price = document.getElementById("price" + i).value

            if (dishes !== "") {
                // pushing the all dishes into the dishName []
                dishData.push({ name: dishes, id: i, price: price, status:"true" });
                transactionTable.push({ menuType: menuType, categoryType: categoryType, dish: i, status:"true", })
            }

        }

        localStorage.setItem("dishData", JSON.stringify(dishData));
        localStorage.setItem("transactionTable", JSON.stringify(transactionTable));
        alert("Dish Added Sucessfully ✅");

        location.reload()

    }

    else {

        function check() {

            let inputCount = document.getElementsByName("dish").length;

            for (i = localDishcount + 1; i < n + 1; i++) {

                let localDishcount = dishData.length;
                // console.log(localDishcount);

                // let b = "";
                let a = true;
                // console.log(i)
                dishes = document.getElementById(i).value;
                // console.log(dishes);
                price = document.getElementById("price" + i).value;
                // console.log(price);

                // for (j = 0; j < localDishcount; j++) {

                //     if (dishes == dishData[j]["name"]) {
                //         // console.log(dishes)
                //         b = dishData[j]["name"];
                //         alert(b + " " + " Is Already presented in this Menu");
                //         location.reload()
                //         a = false;
                //         break;
                //     }
                // }

                // new code
                let index = ""
                for (j = 0; j < localDishcount; j++) {
                    // console.log("rajini")

                    if (dishes == dishData[j]["name"]) {
                        // console.log(dishes)
                        b = dishData[j]["name"];
                        // alert(b + " " + " Is Already presented in this Menu");

                        index = j + 1;
                        console.log(index);

                        // filtering Menu
                        function getMenu(e) {
                            return e.menuType === menuType;
                        }
                        findData = transactionTable.filter(getMenu)
                        console.log(findData);


                        //  filtering Category
                        function getCategory(e) {
                            return e.categoryType === categoryType;
                        }
                        findData2 = findData.filter(getCategory)
                        console.log(findData2)


                        for (k = 0; k < findData2.length; k++) {

                            if (index == findData2[k]["dish"]) {

                                alert(dishes + " " + "already presented in the given menu & category as dishId =" + findData2[k]["dish"])
                                a = false;

                            }
                            // else {
                            //     console.log("no dishes")
                            //     a = true;
                            // }

                        }
                        location.reload()

                    }
                }

                // new code
                if (a !== false) {

                    if (dishes !== "") {
                        dishData.push({ name: dishes, id: localDishcount + 1, price: price, status:"true", });
                        transactionTable.push({ menuType: menuType, categoryType: categoryType, dish: i, status:"true", })

                        localStorage.setItem("dishData", JSON.stringify(dishData));
                        localStorage.setItem("transactionTable", JSON.stringify(transactionTable));
                        alert("Dish Added Sucessfully ✅");

                        location.reload()
                    }
                }
            }
        }

        if (check() == true) {
            console.log("hello")
        }
    }
}




























/*
// creating select option depends upon the menuData
let menulist = document.querySelector(".menulist")

let menuData = JSON.parse(localStorage.getItem("menuData"));

for (i = 0; i < menuData.length; i++) {
    let option = document.createElement("option");
    option.value = menuData[i]["id"];
    option.innerText = menuData[i]["menuName"];

    menulist.append(option);

}

// get the local storage value to the select and option for category name
let showCatergoy = document.querySelector(".show1")
showCatergoy.addEventListener("click", getCatDetails)

function getCatDetails() {
    let menuType = document.getElementById("menuName").value;

    function getMenu(e) {
        return e.id === menuType;
    }
    findData = menuData.filter(getMenu)

    // console.log(findData[0]["categoryData"][0])

    let h = findData[0]["categoryData"]

    // console.log(h);

    // creating select option depends upon the categoryData
    let categorylist = document.querySelector(".categorylist");

    for (i = 0; i < h.length; i++) {
        let option = document.createElement("option");
        option.value = h[i]["id"];
        option.innerText = h[i]["categoryName"];

        categorylist.append(option);
    }
}


// selecting the plus button and empty div
const addBtn = document.querySelector(".bx-plus")

// add event for plus button
addBtn.addEventListener("click", addInput)

function addInput() {

    function add_input() {
        // create div_field
        const div_field = document.createElement("div");
        div_field.setAttribute("class", "field");

        // create a new input element
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = "Enter Dish Name";
        newInput.id = n;
        // newInput.id = "dish" + (n);
        newInput.required = "true";

        // append html tags depends upon our wish
        container.append(div_field);
        div_field.appendChild(newInput);

    }


    let container = document.getElementById("input_group");

    let inputCount = document.getElementsByTagName("input").length;

    let menuData = JSON.parse(localStorage.getItem("menuData"))

    let menuType = document.getElementById("menuName").value;
    let categoryType = document.getElementById("categoryName").value;

    // filtering Menu
    function getMenu(e) {
        return e.id === menuType;
    }
    findData = menuData.filter(getMenu)
    // console.log(findData);

    let k = findData[0]["categoryData"]


    //  filtering Category
    function getCategory(e) {
        return e.id === categoryType;
    }
    findData2 = k.filter(getCategory)
    // console.log(findData2)

    let m = findData2[0]["dishData"]

    n = ""

    // if (dishData == null) {

    //     n = inputCount + 1;
    //     // console.log(n)

    //     add_input()
    // }
    // else {

    //     let menuType = document.getElementById("menuName").value;
    //     let categoryType = document.getElementById("categoryName").value;

    //     // filtering Menu
    //     function getMenu(e) {
    //         return e.menuName === menuType;
    //     }
    //     findData = dishData.filter(getMenu)
    //     // console.log(findData);


    //     //  filtering Category
    //     function getCategory(e) {
    //         return e.categoryName === categoryType;
    //     }
    //     findData2 = findData.filter(getCategory)
    //     // console.log(findData2)

    if (m.length == 0) {

        n = inputCount + 1;
        // console.log(n)

        add_input()
    }

    else {
        let localDishcount = m.length;

        let n = inputCount + localDishcount + 1;
        // console.log(n);

        // create div_field
        const div_field = document.createElement("div");
        div_field.setAttribute("class", "field");

        // create a new input element
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = "Enter Dish Name";
        newInput.id = n;
        // newInput.id = "dish" + (n);
        newInput.required = "true";

        // append html tags depends upon our wish
        container.append(div_field);
        div_field.appendChild(newInput);
    }

    // }


}


// select the submit button and add event
submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", getData);

// getting data from input field
function getData() {

    // new code
    let menuType = document.getElementById("menuName").value;
    let categoryType = document.getElementById("categoryName").value;

    let inputCount = document.getElementsByTagName("input").length;

    // let dishData = JSON.parse(localStorage.getItem("dishData")) || [];
    let dishes = "";

    // filtering Menu
    function getMenu(e) {
        return e.id === menuType;
    }
    findData = menuData.filter(getMenu)
    // console.log(findData);

    let k = findData[0]["categoryData"]


    //  filtering Category
    function getCategory(e) {
        return e.id === categoryType;
    }
    findData2 = k.filter(getCategory)

    let m = findData2[0]["dishData"]


    if (m.length == 0) {

        // loop for getting dishes by using id
        for (i = 1; i <= inputCount; i++) {

            dishes = document.getElementById(i).value;
            // pushing the all dishes into the dishName []
            m.push({ name: dishes, id: i });
        }

        localStorage.setItem("menuData", JSON.stringify(menuData));
        alert("Dish Added Sucessfully ✅");

        // after store data, reset form
        location.reload()

    }

    else if (m.length !== 0) {

        let m = findData2[0]["dishData"]

        let localDishcount = m.length;
        // console.log(localDishcount)

        let n = inputCount + localDishcount;
        // console.log(n)

        function check() {
            for (i = localDishcount + 1; i < n + inputCount; i++) {

                let localDishcount = m.length;
                // console.log(localDishcount);

                let b = "";
                let a = true;
                // console.log(i)
                dishes = document.getElementById(i).value;

                for (j = 0; j < localDishcount; j++) {

                    if (dishes == m[j]["name"]) {
                        // console.log(dishes)
                        b = m[j]["name"];
                        alert(b + " " + " Is Already presented in this Menu");
                        location.reload()
                        a = false;
                        break;
                    }

                }

                if (a !== false) {

                    m.push({ name: dishes, id: localDishcount + 1 });

                    localStorage.setItem("menuData", JSON.stringify(menuData));
                    alert("Dish Added Sucessfully ✅");

                    location.reload()

                }
            }
        }

        if (check() == true) {
            console.log("rajini")
        }
    }

}
*/


















// // old code with menu and category type
// // add dish data
// // selecting the plus button and empty div
// const addBtn = document.querySelector(".bx-plus")
// // add event for plus button
// addBtn.addEventListener("click", addInput)
// function addInput() {
//     function add_input() {
//         // create div_field
//         const div_field = document.createElement("div");
//         div_field.setAttribute("class", "field");
//         // create a new input element
//         let newInput = document.createElement("input");
//         newInput.type = "text";
//         newInput.placeholder = "Enter Dish Name";
//         newInput.id = n;
//         // newInput.id = "dish" + (n);
//         newInput.required = "true";
//         // append html tags depends upon our wish
//         container.append(div_field);
//         div_field.appendChild(newInput);
//     }
//     let container = document.getElementById("input_group");
//     let inputCount = document.getElementsByTagName("input").length;
//     let dishData = JSON.parse(localStorage.getItem("dishData"))
//     n = ""
//     if (dishData == null) {
//         n = inputCount + 1;
//         // console.log(n)
//         add_input()
//     }
//     else {
//         let menuType = document.getElementById("menuName").value;
//         let categoryType = document.getElementById("categoryName").value;
//         // filtering Menu
//         function getMenu(e) {
//             return e.menuName === menuType;
//         }
//         findData = dishData.filter(getMenu)
//         // console.log(findData);
//         //  filtering Category
//         function getCategory(e) {
//             return e.categoryName === categoryType;
//         }
//         findData2 = findData.filter(getCategory)
//         // console.log(findData2)
//         if (findData2.length == 0) {
//             n = inputCount + 1;
//             // console.log(n)
//             add_input()
//         }
//         else {
//             let localDishcount = findData2[0]["dishName"].length;
//             let n = inputCount + localDishcount + 1;
//             // console.log(n);
//             // create div_field
//             const div_field = document.createElement("div");
//             div_field.setAttribute("class", "field");
//             // create a new input element
//             let newInput = document.createElement("input");
//             newInput.type = "text";
//             newInput.placeholder = "Enter Dish Name";
//             newInput.id = n;
//             // newInput.id = "dish" + (n);
//             newInput.required = "true";
//             // append html tags depends upon our wish
//             container.append(div_field);
//             div_field.appendChild(newInput);
//         }
//     }
// }
// // create delete button
// // const btn = document.createElement("i");
// // btn.className = "bx bx-x";
// // btn.addEventListener("click", removeInput);
// // div_field.appendChild(btn);
// // input remove event
// // function removeInput() {
// //     this.parentElement.remove()
// // }
// // select the submit button and add event
// submitBtn = document.querySelector("#submit");
// submitBtn.addEventListener("click", getData);
// // getting data from input field
// function getData() {
//     // new code
//     let menuType = document.getElementById("menuName").value;
//     let categoryType = document.getElementById("categoryName").value;
//     let inputCount = document.getElementsByTagName("input").length;
//     let dishData = JSON.parse(localStorage.getItem("dishData")) || [];
//     let dishName = [];
//     let dishes = "";
//     // console.log(dishData);
//     // filtering Menu
//     function getMenu(e) {
//         return e.menuName === menuType;
//     }
//     findData = dishData.filter(getMenu)
//     // console.log(findData);
//     //  filtering Category
//     function getCategory(e) {
//         return e.categoryName === categoryType;
//     }
//     findData2 = findData.filter(getCategory)
//     // console.log(findData2)
//     if (findData2.length == 0) {
//         // loop for getting dishes by using id
//         for (i = 1; i <= inputCount; i++) {
//             dishes = document.getElementById(i).value;
//             // pushing the all dishes into the dishName []
//             dishName.push({ name: dishes, id: i });
//         }
//         // let my_uuid = uuidv4();
//         let dishData = JSON.parse(localStorage.getItem("dishData")) || [];
//         dishData.push({ "menuName": menuType, "categoryName": categoryType, "dishName": dishName, });
//         localStorage.setItem("dishData", JSON.stringify(dishData));
//         // localStorage.setItem("unique", my_uuid);
//         // after store data, reset form
//         location.reload()
//         // document.getElementById("dishes").focus();
//         alert("Dish added Sucessfully :white_check_mark:");
//     }
//     else if (menuType == findData2[0]["menuName"] && categoryType == findData2[0]["categoryName"]) {
//         let dishName = findData2[0]["dishName"];
//         let localDishcount = dishName.length;
//         // console.log(localDishcount)
//         let n = inputCount + localDishcount;
//         // console.log(n)
//         // for (i = localDishcount + 1; i <= n; i++) {
//         //     let dishes = document.getElementById(i).value;
//         //     // pushing the all dishes into the dishName []
//         //     // dishName.push({ name: dishes, id: i });
//         // }
//         function check() {
//             for (i = localDishcount + 1; i < n + inputCount; i++) {
//             let localDishcount = dishName.length;
//             console.log(localDishcount);
//                 let b = "";
//                 let a = true;
//                 console.log(i)
//                 dishes = document.getElementById(i).value;
//                 for (j = 0; j < localDishcount ; j++) {
//                     // console.log(dishes)
//                     // console.log(j);
//                     if (dishes == findData2[0]["dishName"][j]["name"]) {
//                         // console.log(dishes)
//                         b = findData2[0]["dishName"][j]["name"];
//                         alert(b + j +" Already presented in this Menu");
//                         location.reload()
//                         a = false;
//                         break;
//                     }
//                 }
//                 if(a !== false){
//                     alert("Dish added Sucessfully :white_check_mark:");
//                     dishName.push({ name: dishes, id: localDishcount + 1 });
//                     localStorage.setItem("dishData", JSON.stringify(dishData));
//                     location.reload()
//                     // console.log(dishName)
//                 }
//                 // for (j = 0; j < localDishcount; j++) {
//                     // if (dishes !== findData2[0]["dishName"][j]["name"]){
//                         // console.log(dishes)
//                     // dishName.push({ name: dishes, id: i });
//                         // localStorage.setItem("dishData", JSON.stringify(dishData));
//                         // alert("Dish added Sucessfully :white_check_mark:");
//                         // location.reload()
//                     // }
//                 // }
//             }
//         }
//         if (check()== true) {
//             console.log("rajini")
//         }
//     }
// }
