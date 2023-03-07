
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

    // start from here 


    if (m.length == 0) {

        // loop for getting dishes by using id
        for (i = 1; i <= inputCount; i++) {

            dishes = document.getElementById(i).value;
            // pushing the all dishes into the dishName []
            m.push({ name: dishes, id: i });
        }
        // console.log(m[0])


        // let my_uuid = uuidv4();

        localStorage.setItem("menuData", JSON.stringify(menuData));
        alert("Dish Added Sucessfully ✅");


        // localStorage.setItem("unique", my_uuid);

        // after store data, reset form
        location.reload()
        // document.getElementById("dishes").focus();

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


                // for (j = 0; j < localDishcount; j++) {
                // if (dishes !== findData2[0]["dishName"][j]["name"]){
                // console.log(dishes)
                // dishName.push({ name: dishes, id: i });
                // localStorage.setItem("dishData", JSON.stringify(dishData));

                // alert("Dish added Sucessfully ✅");
                // location.reload()
                // }

                // }



                // for (j = 0; j < localDishcount; j++) {

                //     if (dishes !== findData2[0]["dishName"][j]["name"]) {


                //     }
                //     dishName.push({ name: dishes, id: i });
                //     localStorage.setItem("dishData", JSON.stringify(dishData));
                //     alert("Dish added Sucessfully ✅");
                //     location.reload()
                //     break;
                // }
