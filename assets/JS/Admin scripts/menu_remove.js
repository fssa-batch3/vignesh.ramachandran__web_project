

let menulist = document.querySelector(".menulist")

let menuType = document.getElementById("menuName").value;

// creating select option depends upon the menuData
// let menuData = JSON.parse(localStorage.getItem("menuData"));

for (i = 0; i < menuData.length; i++) {
    let option = document.createElement("option");
    option.value = menuData[i]["id"];
    option.innerText = menuData[i]["menuName"];

    menulist.append(option);

}

// getData from the local storage
show = document.querySelector(".show");
show.addEventListener("click", showMenuDetails);

function showMenuDetails() {
    menuType = document.getElementById("menuName").value;
    // console.log(menuType);

    // filtering get data from menuData
    function getMenu(e) {
        return e.id === menuType;
    }

    findData = menuData.filter(getMenu);
    // console.log(findData[0]["menuName"]);

    let menuName = document.getElementById("menuNameGet");
    let menuImage = document.getElementById("menuImageGet");
    let menuAbout = document.getElementById("menuAboutGet");
    let menuStatus = document.getElementById("menustatusGet");
    // console.log(menuName)

    menuName.value = findData[0]["menuName"];
    menuImage.value = findData[0]["image"];
    menuAbout.value = findData[0]["description"];
    menuStatus.value = findData[0]["status"];

    show.setAttribute("style", "display:none");

}


// save edited(updated)data to local storage
let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", saveData)

function saveData() {
    // let upName = document.getElementById("menuNameGet").value;
    let upImage = document.getElementById("menuImageGet").value;
    let upAbout = document.getElementById("menuAboutGet").value;
    let upStatus = document.getElementById("menustatusGet").value;

    // findData[0]["menuName"] = upName
    findData[0]["image"] = upImage;
    findData[0]["description"] = upAbout;
    findData[0]["status"] = upStatus;

    localStorage.setItem("menuData", JSON.stringify(menuData));
    alert("Menu Details Edited Sucessfully ✅")
    location.reload()

}



// // remove the selected menu from the localstorage
// let removeBtn = document.querySelector(".delete");
// removeBtn.addEventListener("click", removeMenu);

// function removeMenu() {

//     let menuData = JSON.parse(localStorage.getItem("menuData"));
//     menuType = document.getElementById("menuName").value;

//     // filtering get data from menuData
//     function getMenu(e) {
//         return e.id === menuType;
//     }
//     findData = menuData.filter(getMenu)
//     // console.log(findData)

//     // here finding the index of findData from menuData and delete
//     for (i = 0; i < menuData.length; i++) {

//         if (findData[0]["menuName"] == menuData[i]["menuName"]) {
//             menuData.splice(i, 1)
//             localStorage.setItem("menuData", JSON.stringify(menuData));
//             alert("Menu Removed Sucessfully ✅")
//             location.reload()
//         }
//     }
// }
