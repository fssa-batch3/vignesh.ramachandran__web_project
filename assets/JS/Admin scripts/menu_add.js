// const addBtn = document.querySelector(".bx-plus");
// const div_input = document.querySelector(".input_group");
// const div_input2 = document.querySelector(".input_group2")

// addBtn.addEventListener("click", addInput);

// function addInput() {

//     const div_field = document.createElement("div");
//     div_field.className = "field";

//     const name = document.createElement("input");
//     name.type = "text";
//     name.id = "name";
//     name.placeholder = "Enter Menu Name";

//     const image = document.createElement("input");
//     image.type = "file";
//     image.id = "image";

//     const description = document.createElement("textarea")
//     description.type = "text";
//     description.placeholder = "Enter About Menu";
//     description.className = "about_menu";

//     const btn = document.createElement("i");
//     btn.className = "bx bx-x";
//     btn.addEventListener("click", removeInput);

//     const addCategory = document.createElement("p");
//     addCategory.innerText = "Add Category";
//     addCategory.className = "add_category";

//     const plus = document.createElement("i");
//     plus.className = "bx bx-plus";
//     plus.addEventListener("click", addInput2)

//     div_input.append(div_field);
//     div_field.append(name);
//     div_field.append(image);
//     div_field.append(description);
//     div_field.append(btn);
//     div_field.append(addCategory);
//     addCategory.append(plus)

// }


// // 2nd field
// function addInput2() {
//     const div_field2 = document.createElement("div");
//     div_field2.setAttribute("class", "field");

//     const name2 = document.createElement("input");
//     name2.type = "text";
//     name2.placeholder = "Enter Category Name";
//     name2.id = "name";

//     const image2 = document.createElement("input");
//     image2.type = "file";
//     image2.id = "image";

//     const price = document.createElement("input");
//     price.type = "number";
//     price.placeholder = "Enter Price" 

//     const btn = document.createElement("i");
//     btn.className = "bx bx-x";
//     btn.addEventListener("click", removeInput);


//     div_input2.append(div_field2);
//     div_field2.append(name2);
//     div_field2.append(image2);
//     div_field2.append(price)
//     div_field2.append(btn);

// }



// input remove event
// function removeInput() {
//     this.parentElement.remove()

// }















// let submitBtn = document.querySelector(".btn_submit");
// submitBtn.addEventListener("click", getData);

function getData(e) {

    let menuType = document.getElementById("menuName").value;
    // console.log(menuType);
    let menuImage = document.getElementById("menuImage").value;
    let menuAbout = document.getElementById("menuAbout").value;

    let menuData = JSON.parse(localStorage.getItem("menuData")) || [];

    // let categoryData = [];

    function getMenu(e) {
        return e.menuName.toLowerCase()  ===  menuType.toLowerCase();
    }
    findData = menuData.filter(getMenu);
    console.log(findData)

    let n = findData.length;

    if (menuData.length == 0) {

        for (i = 1; i <= n + 1; i++) {
            menuData.push({ "menuName": menuType, "id": i + "", "image": menuImage, status: "true", "description": menuAbout });
        }

        // console.log(menuData);
        localStorage.setItem("menuData", JSON.stringify(menuData));

        alert("Menu Added Sucessfully ✅");
        location.reload();

    }

    else if (findData.length == 0) {

        let localMenucount = menuData.length;

        // console.log(localMenucount);

        for (i = localMenucount + 1; i <= localMenucount + 1; i++) {
            menuData.push({ "menuName": menuType, "id": i + "", "image": menuImage, status: "true", "description": menuAbout, });
        }

        // console.log(menuData);
        localStorage.setItem("menuData", JSON.stringify(menuData));

        alert("Menu Added Sucessfully ✅");
        location.reload();
    }


    else if (menuType.toLowerCase() == findData[0]["menuName"].toLowerCase()) {
        alert(menuType + " " + "Menu is already in the Database" + " " + "Create a new Menu")
        location.reload()

    }

    e.preventDefault();


}
