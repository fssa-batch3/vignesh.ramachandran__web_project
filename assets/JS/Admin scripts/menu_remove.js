const menulist = document.querySelector(".menulist");

let menuType = document.getElementById("menuName").value;

// creating select option depends upon the menuData
// let menuData = JSON.parse(localStorage.getItem("menuData"));

for (let i = 0; i < menuData.length; i++) {
  const option = document.createElement("option");
  option.value = menuData[i].id;
  option.innerText = menuData[i].menuName;

  menulist.append(option);
}

let findData = "";

// getData from the local storage
const show = document.querySelector(".show");

function showMenuDetails() {
  const saveBtn = document.querySelector(".save");
  const menu_option = document.querySelector("#menuName");
  // console.log(menu_option);

  menuType = document.getElementById("menuName").value;

  if (menuType !== "") {
    // filtering get data from menuData
    findData = menuData.filter((data) => data.id === menuType);

    // function getMenu(e) {
    //   return e.id === menuType;
    // }

    // findData = menuData.filter(getMenu);
    // console.log(findData[0]["menuName"]);

    const menuName = document.getElementById("menuNameGet");
    const menuImage = document.getElementById("menuImageGet");
    const menuAbout = document.getElementById("menuAboutGet");
    const menuStatus = document.getElementById("menustatusGet");
    // console.log(menuName)

    menuName.value = findData[0].menuName;
    menuImage.value = findData[0].image;
    menuAbout.value = findData[0].description;
    menuStatus.value = findData[0].status;

    show.setAttribute("style", "display:none");
    saveBtn.removeAttribute("style");
    menu_option.setAttribute("disabled", "true");
  } else {
    alert("Select Menu type");
  }
}

show.addEventListener("click", showMenuDetails);

const form_id = document.getElementById("change");
form_id.addEventListener("submit", () => {
  // let upName = document.getElementById("menuNameGet").value;
  const upImage = document.getElementById("menuImageGet").value;
  const upAbout = document.getElementById("menuAboutGet").value;
  const upStatus = document.getElementById("menustatusGet").value;

  // findData[0]["menuName"] = upName
  findData[0].image = upImage;
  findData[0].description = upAbout;
  findData[0].status = upStatus;

  localStorage.setItem("menuData", JSON.stringify(menuData));
  alert("Menu Details Edited Sucessfully ✅");
  window.location.reload();
});

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
