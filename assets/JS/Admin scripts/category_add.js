

// // saving only the category name, id, image and price
// let categoryData = JSON.parse(localStorage.getItem("categoryData")) || [];

// let submitBtn = document.querySelector(".btn_submit");
// submitBtn.addEventListener("click", getData);

// function getData() {

//     let categoryType = document.getElementById("categoryName").value;
//     // let categoryImage = document.getElementById("categoryImage").value;
//     // let categoryPrice = document.getElementById("categoryPrice").value;

//     // filtering category
//     function getCategory(e) {
//         return e.categoryName == categoryType;
//     }

//     findData = categoryData.filter(getCategory);



//     // if there in no data in category []
//     if (categoryData.length == 0) {

//         for (i = 1; i <= 1; i++) {
//             categoryData.push({ "categoryName": categoryType, "id": i + "", status:"true"})
//         }

//         alert("Category added sucessfully ✅");

//         localStorage.setItem("categoryData", JSON.stringify(categoryData));

//     }

//     // if entered category is equal to findData
//     else if (findData.length !== 0) {

//         alert(findData[0]["categoryName"] + " " + "is already in Database");

//     }


//     else {
//         let m = categoryData.length

//         // for (i = m + 1; i <= m + 1; i++) {

//             categoryData.push({ "categoryName": categoryType, "id": m+1 + "",status:"true"})

//             alert("Category added sucessfully ✅")
//             localStorage.setItem("categoryData", JSON.stringify(categoryData));

//             location.reload();
//         // }
//     }
// }
















// with menu name -2

let menulist = document.querySelector(".menulist")

// let menuData = JSON.parse(localStorage.getItem("menuData"));
let categoryData = JSON.parse(localStorage.getItem("categoryData")) || [];

for (let i = 0; i < menuData.length; i++) {
    let option = document.createElement("option");
    option.value = menuData[i]["id"];
    option.innerText = menuData[i]["menuName"];

    menulist.append(option);

}

let submitBtn = document.querySelector(".btn_submit");
submitBtn.addEventListener("click", getData);

function getData() {

    let menuType = document.getElementById("menuName").value;
    let categoryType = document.getElementById("categoryName").value;
    let categoryImage = document.getElementById("categoryImage").value;
    // let categoryPrice = document.getElementById("categoryPrice").value;


    // filtering menu
    function getMenu(e) {
        return e.menuType === menuType;
    }
    findData = categoryData.filter(getMenu)
    console.log(findData[0])


    if (findData.length == 0) {

        for (i = 1; i <= 1; i++) {
            categoryData.push({ "menuType": menuType, "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage,status:"true" })
        }
        alert("Category added sucessfully ✅");

        localStorage.setItem("categoryData", JSON.stringify(categoryData));

    }

    else if (findData.length !== 0) {

        // filtering category
        function getCategory(e) {
            return e.categoryName == categoryType;
        }

        findData2 = findData.filter(getCategory);
        console.log(findData2);

        if (findData2.length !== 0) {
            alert(findData2[0]["categoryName"] + " " + "for this menu" + " " + "is already in Database");
        }

        else if (findData2.length == 0) {

            let m = findData.length

            for (i = m + 1; i <= m + 1; i++) {

                categoryData.push({ "menuType": menuType, "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, status:"true" })
                // console.log(findData2)
                alert("Category added sucessfully ✅")

                localStorage.setItem("categoryData", JSON.stringify(categoryData));

            }
            location.reload();

        }

    }

}





















// with proper menu id and cateogry details -3

// let menulist = document.querySelector(".menulist")

// let dishData = [];

// // let menuType = document.getElementById("menuName").value;

// // creating select option depends upon the menuData
// let menuData = JSON.parse(localStorage.getItem("menuData"));

// for (let i = 0; i < menuData.length; i++) {
//     let option = document.createElement("option");
//     option.value = menuData[i]["id"];
//     option.innerText = menuData[i]["menuName"];

//     menulist.append(option);

// }

// let submitBtn = document.querySelector(".btn_submit");
// submitBtn.addEventListener("click", getData);

// function getData() {
//     let menuData = JSON.parse(localStorage.getItem("menuData"));

//     let menuType = document.getElementById("menuName").value;
//     let categoryType = document.getElementById("categoryName").value;
//     let categoryImage = document.getElementById("categoryImage").value;
//     let categoryPrice = document.getElementById("categoryPrice").value;

//     // let categoryData = [];

//     // filtering menu
//     function getMenu(e) {
//         return e.id === menuType;
//     }
//     findData = menuData.filter(getMenu)
//     // console.log(findData[0])

//     let k = findData[0]["categoryData"]
//     // console.log(k[0])

//     // filtering category
//     function getCategory(e) {
//         return e.categoryName == categoryType;
//     }

//     findData2 = k.filter(getCategory);
//     // console.log(findData2[0]);



//     if (findData[0]["id"] == 5) {

//         if (k.length == 0) {

//             for (i = 1; i <= 1; i++) {
//                 k.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "dishData": dishData })
//             }
//             console.log(k[0]);

//             alert("Category added sucessfully ✅");

//             localStorage.setItem("menuData", JSON.stringify(menuData));

//         }

//         // exercise code
//         else if (findData2.length == 0) {

//             let m = k.length

//             for (i = m + 1; i <= m + 1; i++) {

//                 k.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "dishData": dishData })

//                 alert("Category added sucessfully ✅")
//                 localStorage.setItem("menuData", JSON.stringify(menuData));

//                 location.reload();
//             }
//         }


//         else if (findData2[0]["categoryName"] == categoryType) {

//             alert(findData2[0]["categoryName"] + " " + "is already in Database")

//         }

//     }


//     else {

//         if (k.length == 0) {

//             for (i = 1; i <= 1; i++) {
//                 k.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "categoryPrice": categoryPrice, "dishData": dishData })
//                 // console.log(k[0]);

//                 localStorage.setItem("menuData", JSON.stringify(menuData));
//                 alert("Category added sucessfully ✅")

//                 location.reload();

//             }
//         }

//         // exercise code
//         else if (findData2.length == 0) {

//             let m = k.length

//             for (i = m + 1; i <= m + 1; i++) {

//                 k.push({ "categoryName": categoryType, "id": i + "", "categoryImage": categoryImage, "dishData": dishData })
//                 // console.log(k[2])

//                 alert("Category added sucessfully ✅")
//                 localStorage.setItem("menuData", JSON.stringify(menuData));

//                 location.reload();
//             }
//         }

//         else if (findData2[0]["categoryName"] == categoryType) {

//             alert(findData2[0]["categoryName"] + " " + "is already in Database")
//         }

//     }

// }
