// // selecting the plus button and empty div
// const addBtn = document.querySelector(".bx-plus")
// // const div_input = document.querySelector(".input_group");

// // add event for plus button
// addBtn.addEventListener("click", addInput)

// // input add event
// function addInput() {

//     function add_input() {
//         const div_field = document.createElement("div");
//         div_field.setAttribute("class", "field");

//         const name = document.createElement("input");
//         name.type = "text";
//         name.placeholder = "Enter Category Name";
//         name.id = "cat" + n;

//         const image = document.createElement("input");
//         image.type = "file";
//         image.id = n;

//         const price = document.createElement("input");
//         price.type = "number";
//         price.placeholder = "Enter Price";
//         price.id = n;

//         // const btn = document.createElement("i");
//         // btn.className = "bx bx-x";
//         // btn.addEventListener("click", removeInput);

//         container.append(div_field);
//         div_field.append(name);
//         div_field.append(image);
//         div_field.append(price);
//         div_field.append(btn);
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
//         let categoryType = document.getElementById("cat1").value;

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
//         findData2 = findData.find(getCategory)
//         // console.log(findData2)

//         if (findData.length == 0) {

//             n = inputCount + 1;
//             // console.log(n)

//             add_input()
//         }

//         else {
//             let localDishcount = findData[0]["categoryName"].length;

//             let n = inputCount + localDishcount + 1;
//             // console.log(n);

//             add_input()

//         }

//     }
// }

// // input remove event
// // function removeInput() {
// //     this.parentElement.remove()

// // }


let menulist = document.querySelector(".menulist")

let dishData = [];

// let menuType = document.getElementById("menuName").value;

// creating select option depends upon the menuData
let menuData = JSON.parse(localStorage.getItem("menuData"));

for (let i = 0; i < menuData.length; i++) {
    let option = document.createElement("option");
    option.value = menuData[i]["id"];
    option.innerText = menuData[i]["menuName"];

    menulist.append(option);

}

let submitBtn = document.querySelector(".btn_submit");
submitBtn.addEventListener("click", getData);

function getData() {
    let menuData = JSON.parse(localStorage.getItem("menuData"));

    let menuType = document.getElementById("menuName").value;
    let categoryType = document.getElementById("categoryName").value;
    let categoryImage = document.getElementById("categoryImage").value;
    let categoryPrice = document.getElementById("categoryPrice").value;

    // let categoryData = [];

    // filtering menu
    function getMenu(e) {
        return e.id === menuType;
    }
    findData = menuData.filter(getMenu)
    // console.log(findData[0])

    let k = findData[0]["categoryData"]
    // console.log(k[0])

    // filtering category
    function getCategory(e) {
        return e.categoryName == categoryType;
    }

    findData2 = k.filter(getCategory);
    // console.log(findData2[0]);



    if (findData[0]["id"] == 5) {

        if (k.length == 0) {

            for (i = 1; i <= 1; i++) {
                k.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "dishData": dishData })
            }
            console.log(k[0]);

            alert("Category added sucessfully ✅");

            localStorage.setItem("menuData", JSON.stringify(menuData));

        }

        // exercise code
        else if (findData2.length == 0) {

            let m = k.length

            for (i = m + 1; i <= m + 1; i++) {

                k.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "dishData": dishData })

                alert("Category added sucessfully ✅")
                localStorage.setItem("menuData", JSON.stringify(menuData));

                location.reload();
            }
        }

        // exercise code

        // else if (findData2.length == 0) {

        //     for (i = k.length + 1; i <= k.length + 1; i++) {

        //         k.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "dishData": dishData })
        //         console.log(k);

        //         localStorage.setItem("menuData", JSON.stringify(menuData));
        //         alert("Category added sucessfully ✅")

        //         location.reload();
        //         break;  

        //     }
        // }

        else if (findData2[0]["categoryName"] == categoryType) {

            alert(findData2[0]["categoryName"] + " " + "is already in Database")

        }

    }


    else {

        if (k.length == 0) {

            for (i = 1; i <= 1; i++) {
                k.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "categoryPrice": categoryPrice, "dishData": dishData })
                // console.log(k[0]);

                localStorage.setItem("menuData", JSON.stringify(menuData));
                alert("Category added sucessfully ✅")

                location.reload();

            }
        }

        // exercise code
        else if (findData2.length == 0) {

            let m = k.length

            for (i = m + 1; i <= m + 1; i++) {

                k.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "dishData": dishData })
                // console.log(k[2])

                alert("Category added sucessfully ✅")
                localStorage.setItem("menuData", JSON.stringify(menuData));

                location.reload();
            }
        }

        // exercise code

        // else if (findData2.length == 0) {

        //     let k = findData[0]["categoryData"]
        //     console.log(k.length)

        //     for (i = k.length + 1; i <= k.length + 1; i++) {

        //         k.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "categoryPrice": categoryPrice, "dishData": dishData })

        //         localStorage.setItem("menuData", JSON.stringify(menuData));
        //         alert("Category added sucessfully ✅")

        //         location.reload();
        //         break;

        //     }
        // }

        else if (findData2[0]["categoryName"] == categoryType) {

            alert(findData2[0]["categoryName"] + " " + "is already in Database")
        }

    }

}


    // else if (m.length == 0) {

    //     let m = findData[0]["categoryData"]

    //     for (i = 1; i <= m.length + 1; i++) {
    //         m.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "categoryPrice": categoryPrice })
    //         alert("Category added sucessfully")

    //         // localStorage.setItem("menuData", JSON.stringify(menuData));

    //         console.log(m[0])
    //         console.log(findData[0])
    //         location.reload();

    //         break;

    //     }

    // }