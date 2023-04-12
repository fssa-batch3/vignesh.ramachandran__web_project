
// // creating select option depends upon the menuData
let menulist = document.querySelector(".menulist")

// let menuData = JSON.parse(localStorage.getItem("menuData"));
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
    let menuType = document.getElementById("menuName").value;

    if(menuType !== ""){

        function getMenu(e) {
            return e.menuType === menuType;
        }
        findData = categoryData.filter(getMenu)

        // creating select option depends upon the categoryData
        let categorylist = document.querySelector(".categorylist");

        for (i = 0; i < findData.length; i++) {
            let option = document.createElement("option");
            option.value = findData[i]["id"];
            option.innerText = findData[i]["categoryName"];

            categorylist.append(option);
        }

        showCatergoy.setAttribute("style", "display:none");
        
    }
    else{
        alert("Select Menu type")
    }

}


// show the details of the category
let showDetails = document.querySelector(".show2")
showDetails.addEventListener("click", showCatDetails);

function showCatDetails() {
    let menuType = document.getElementById("menuName").value;
    let categoryType = document.getElementById("categoryName").value;

    if(menuType == ""){
        alert("Select Menu type")
    }

    else if(menuType !== "" && categoryType !== ""){

        // filtering menu
        function getMenu(e) {
            return e.menuType === menuType;
        }
        findData = categoryData.filter(getMenu)
        // // console.log(findData[0]);


        // let k = findData[0]["categoryData"]
        // console.log(k)

        // filtering category
        function getCategory(e) {
            return e.id == categoryType;
        }
        findData2 = findData.filter(getCategory);

        // console.log(findData2[0]["categoryName"]);

        // let yes = document.getElementById("categoryNameGet").value
        let categoryName = document.getElementById("categoryNameGet")
        let categoryStatus = document.getElementById("categoryStatusGet")
        let categoryImage = document.getElementById("categoryImageGet")
        // let categoryPrice = document.getElementById("categoryPriceGet")

        categoryName.value = findData2[0]["categoryName"]
        categoryStatus.value = findData2[0]["status"]
        categoryImage.value = findData2[0]["categoryImage"]
        // categoryPrice.value = categoryData[0]["categoryPrice"]

        showDetails.setAttribute("style", "display:none");
    }

    else{
        alert("Click the Show category button (or) Select Category type")
    }


}


// save edited (updated) details
let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", saveData);

function saveData() {
    let upStatus = document.getElementById("categoryStatusGet").value;
    let upImage = document.getElementById("categoryImageGet").value;
    // let upPrice = document.getElementById("categoryPriceGet").value;

    findData2[0]["status"] = upStatus;
    findData2[0]["categoryImage"] = upImage;
    // findData2[0]["categoryPrice"] = upPrice;

    // console.log(findData2[0])

    localStorage.setItem("categoryData", JSON.stringify(categoryData));
    alert("Category Details updated Sucessfully ✅")
    location.reload()
}


// // delete the category from the menuData
// let deleteBtn = document.querySelector(".delete");
// deleteBtn.addEventListener("click", removeCategory);

// function removeCategory() {
//     // let menuType = document.getElementById("menuName").value;
//     let categoryType = document.getElementById("categoryName").value;

//     // // filtering menu
//     // function getMenu(e) {
//     //     return e.id === menuType;
//     // }
//     // findData = menuData.filter(getMenu)


//     // let k = findData[0]["categoryData"]
//     // // console.log(k)

//     // filtering category
//     function getCategory(e) {
//         return e.id == categoryType;
//     }
//     findData = categoryData.filter(getCategory);
//     // console.log(findData2[0]["categoryName"]);


//     // here finding the index of findData from menuData and delete
//     for (i = 0; i < categoryData.length; i++) {

//         if (findData[0]["categoryName"] == categoryData[i]["categoryName"]) {

//             categoryData.splice(i, 1)
//             localStorage.setItem("categoryData", JSON.stringify(categoryData));
//             alert("Category Deleted Sucessfully ✅")
//             location.reload()
//         }
//     }
// }







