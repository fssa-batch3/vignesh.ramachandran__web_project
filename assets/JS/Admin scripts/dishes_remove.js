
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
    showCatergoy.setAttribute("style", "display:none");

}



// getting data from localstorage
// let menuData = JSON.parse(localStorage.getItem("menuData"));
//console.log(dishData);


const show = document.querySelector(".show2");
show.addEventListener("click", showDishes);

// show filtered data
function showDishes(e) {
    let menuType = document.getElementById("menuName").value;
    let categoryType = document.getElementById("categoryName").value;

    let container = document.querySelector("#input_group");

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

    // let n = findData2[0]["dishName"].length;
    // console.log(n);

    for (i = 0; i < m.length; i++) {

        const div_field = document.createElement("div");
        div_field.setAttribute("class", "field");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.class = "checkbox";
        checkbox.value = m[i]["name"];

        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = "dish" + (i);
        newInput.value = m[i]["name"];

        container.append(div_field)
        div_field.append(checkbox);
        div_field.append(newInput);
    }
    show.setAttribute("style", "display:none");

}


// delete dish
let deleteBtn = document.querySelectorAll(".remove");
// let checkbox = ""

deleteBtn.forEach(function (deleteDish) {
    deleteDish.addEventListener("click", function () {

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

        checkbox = document.querySelector('input[type=checkbox]:checked').value;
        // console.log(checkbox);

        for (i = 0; i < m.length; i++) {

            if (m[i].name == checkbox) {
                m.splice(i, 1)
                localStorage.setItem("menuData", JSON.stringify(menuData));
                alert("Dish Removed Sucessfully")
            }
        }
        location.reload()

    })
})



let saveBtn = document.querySelectorAll(".save")
// saveBtn.addEventListener("click", saveDish)

saveBtn.forEach(function (saveDish) {
    saveDish.addEventListener("click", function () {
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

        checkbox = document.querySelector('input[type=checkbox]:checked').value;
        // console.log(checkbox);

        let m = findData2[0]["dishData"]

        let Dish_index = ""

        for (i = 0; i < m.length; i++) {
            if (m[i]["name"] == checkbox) {
                Dish_index = i;
            }
        }
        // console.log(Dish_index)

        let y = "dish" + Dish_index
        // console.log(y)

        let up_dish = document.getElementById(y).value
        // console.log(up_dish);   

        m[Dish_index]["name"] = up_dish

        localStorage.setItem("menuData", JSON.stringify(menuData));
        alert("Dish Renamed Sucessfully ✅")
        location.reload()

    })
})



