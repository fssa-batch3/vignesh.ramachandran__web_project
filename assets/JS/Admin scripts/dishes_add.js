const dishData = JSON.parse(localStorage.getItem("dishData")) || [];
const transactionTable =
  JSON.parse(localStorage.getItem("transactionTable")) || [];

// new code

// creating select option depends upon the menuData
const menulist = document.querySelector(".menulist");

// let menuData = JSON.parse(localStorage.getItem("menuData"));
const categoryData = JSON.parse(localStorage.getItem("categoryData"));

for (let i = 0; i < menuData.length; i++) {
  const option = document.createElement("option");
  option.value = menuData[i].id;
  option.innerText = menuData[i].menuName;

  menulist.append(option);
}

// get the local storage value to the select and option for category name
const showCatergoy = document.querySelector(".show1");
showCatergoy.addEventListener("click", getCatDetails);

function getCatDetails() {
  const menuType = document.getElementById("menuName").value;
  const menu_option = document.querySelector("#menuName");

  if (menuType !== "") {
    const findData = categoryData.filter((data) => data.menuType === menuType);

    // console.log(findData)

    // creating select option depends upon the categoryData
    const categorylist = document.querySelector(".categorylist");

    for (let i = 0; i < findData.length; i++) {
      const option = document.createElement("option");
      option.value = findData[i].id;
      option.innerText = findData[i].categoryName;

      categorylist.append(option);
    }

    showCatergoy.setAttribute("style", "display:none");
    menu_option.setAttribute("disabled", "true");
  } else {
    alert("Select the Menu");
  }
}

// selecting the plus button and empty div
const addBtn = document.querySelector(".bx-plus");
addBtn.addEventListener("click", addInput);

function addInput() {
  const container = document.getElementById("input_group");

  const menuType = document.getElementById("menuName").value;
  const categoryType = document.getElementById("categoryName").value;

  // console.log(menuType);
  // console.log(categoryType)

  function add_input() {
    const category_option = document.querySelector("#categoryName");

    if (menuType !== "" && categoryType !== "") {
      // create div_field
      const div_field = document.createElement("div");
      div_field.setAttribute("class", "field");

      // create a new input element
      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.placeholder = "Enter Dish Name";
      newInput.id = n;
      newInput.name = "dish";
      newInput.pattern = "[A-Za-z]+ [A-Za-z]+";
      // newInput.id = "dish" + (n);
      newInput.required = "true";

      const span = document.createElement("span");
      span.innerHTML = "*Enter the Dish name and quantity. Eg: SAMBAR VADA (1)";

      // let input_qty = document.createElement("input");
      // input_qty.type = "number";
      // input_qty.placeholder = "Enter Quantity";
      // input_qty.className = "input_qty"
      // input_qty.id = "qty" + n;
      // input_qty.pattern = "[0-9]{1,2}";
      // input_qty.min =
      // input_qty.required = "true";

      const inputPrice = document.createElement("input");
      inputPrice.type = "number";
      inputPrice.placeholder = "Enter Price";
      inputPrice.id = `price${n}`;
      inputPrice.pattern = "[0-9]{1,3}";
      inputPrice.min = "0";
      inputPrice.max = "150";
      inputPrice.required = "true";

      // append html tags depends upon our wish
      container.append(div_field);
      div_field.appendChild(newInput);
      div_field.append(inputPrice);
      div_field.append(span);
      // div_field.append(input_qty);

      category_option.setAttribute("disabled", "true");
    } else {
      alert("Select Menu and Category type");
    }
  }

  const inputCount = document.getElementsByName("dish").length;
  // console.log(inputCount)

  let n = "";

  if (dishData.length === 0) {
    n = inputCount + 1;
    // console.log(n)

    add_input();
  } else {
    const category_option = document.querySelector("#categoryName");

    const localDishcount = dishData.length;

    n = inputCount + localDishcount + 1;
    // console.log(n);

    if (menuType !== "" && categoryType !== "") {
      // create div_field
      const div_field = document.createElement("div");
      div_field.setAttribute("class", "field");

      // create a new input element
      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.placeholder = "Enter Dish Name";
      newInput.id = n;
      newInput.name = "dish";
      // newInput.pattern = "[A-Z]+ [A-Z]+"
      // newInput.id = "dish" + (n);
      newInput.required = "true";

      const span = document.createElement("span");
      span.innerHTML = "*Enter the Dish name and quantity. Eg: SAMBAR VADA (1)";

      // let input_qty = document.createElement("input");
      // input_qty.type = "number";
      // input_qty.placeholder = "Enter Quantity";
      // input_qty.className = "input_qty"
      // input_qty.id = "qty" + n;
      // input_qty.pattern = "[0-9]{1,2}";
      // input_qty.required = "true";

      const inputPrice = document.createElement("input");
      inputPrice.type = "number";
      inputPrice.placeholder = "Enter Price";
      inputPrice.id = `price${n}`;
      inputPrice.pattern = "[0-9]{1,3}";
      inputPrice.min = "0";
      inputPrice.max = "150";
      inputPrice.required = "true";

      // append html tags depends upon our wish
      container.append(div_field);
      div_field.appendChild(newInput);
      div_field.append(inputPrice);
      div_field.append(span);
      // div_field.append(input_qty);

      category_option.setAttribute("disabled", "true");
    } else {
      alert("Select Menu and Category type");
    }
  }
}

// new code

// select the submit button and add event
// submitBtn = document.querySelector("#submit");
// submitBtn.addEventListener("click", getData);

function getData(e) {
  const inputCount = document.getElementsByName("dish").length;
  // console.log(inputCount);

  const localDishcount = dishData.length;
  // console.log(localDishcount)

  const n = inputCount + localDishcount;
  // console.log(n);

  const menuType = document.getElementById("menuName").value;
  const categoryType = document.getElementById("categoryName").value;

  // console.log(menuType);
  // console.log(categoryType);

  if (dishData.length === 0 && transactionTable.length === 0) {
    // loop for getting dishes by using id
    for (let i = 1; i <= inputCount; i++) {
      const dishes = document.getElementById(i).value;
      const price = document.getElementById(`price${i}`).value;

      if (dishes.trim === "") {
        alert("Please enter the Dish name");
      } else {
        // pushing the all dishes into the dishName []
        dishData.push({ name: dishes, id: i, price, status: "true" });
        transactionTable.push({
          menuType,
          categoryType,
          dish: i,
          status: "true",
        });
      }
    }

    localStorage.setItem("dishData", JSON.stringify(dishData));
    localStorage.setItem("transactionTable", JSON.stringify(transactionTable));
    alert("Dish Added Sucessfully ✅");

    window.location.reload();
  } else {
    function check() {
      // let inputCount = document.getElementsByName("dish").length;

      for (let i = localDishcount + 1; i < n + 1; i++) {
        const localDishcount = dishData.length;
        // console.log(localDishcount);

        // let b = "";
        let a = true;
        // console.log(i)
        dishes = document.getElementById(i).value;
        // console.log(dishes);
        if (dishes.trim() === "") {
          alert("Please enter the Dish name");
        } else {
          price = document.getElementById(`price${i}`).value;
          // console.log(price);

          // new code
          let index = "";
          for (j = 0; j < localDishcount; j++) {
            // console.log("rajini")

            if (
              dishes.replace(/\(\d+\)/, "").toLowerCase() ==
              dishData[j].name.replace(/\(\d+\)/, "").toLowerCase()
            ) {
              index = j + 1;
              // console.log(index);

              // filtering Menu
              function getMenu(e) {
                return e.menuType === menuType;
              }
              findData = transactionTable.filter(getMenu);
              // console.log(findData);

              //  filtering Category
              function getCategory(e) {
                return e.categoryType === categoryType;
              }
              findData2 = findData.filter(getCategory);
              // console.log(findData2)

              for (k = 0; k < findData2.length; k++) {
                if (index == findData2[k].dish) {
                  alert(
                    `${dishes} ` +
                      `already presented in the given menu & category as dishId =${findData2[k].dish}`
                  );
                  a = false;
                }
                // else {
                //     console.log("no dishes")
                //     a = true;
                // }
              }
              location.reload();
            }
          }

          // new code
          if (a !== false) {
            if (dishes.trim() === "") {
              alert("Please Enter the Dish name");
            } else {
              dishData.push({
                name: dishes,
                id: localDishcount + 1,
                price,
                status: "true",
              });
              transactionTable.push({
                menuType,
                categoryType,
                dish: i,
                status: "true",
              });

              // console.log(dishData);
              // console.log(transactionTable);

              localStorage.setItem("dishData", JSON.stringify(dishData));
              localStorage.setItem(
                "transactionTable",
                JSON.stringify(transactionTable)
              );
              alert("Dish Added Sucessfully ✅");

              location.reload();
            }
          }
        }
      }
    }

    if (check() === true) {
      console.log("hello");
    }
  }

  e.preventDefault();
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
