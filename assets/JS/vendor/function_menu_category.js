const menuId = new URLSearchParams(window.location.search).get('menu');

// let menuData = JSON.parse(localStorage.getItem("menuData"));
const categoryData = JSON.parse(localStorage.getItem('categoryData'));

const menuDetails = menuData.find((data) => data.id === menuId);

console.log(menuDetails);

const getCategory = categoryData.filter((data) => data.menuType === menuId);

// function getCategory(e){
//     return e.menuType = menuId
// }
// findData = categoryData.filter(getCategory)
// console.log(getCategory);

// filtering get status=true from menuData
function getStatus(e) {
  return e.status === 'true';
}
let categoryDataTrue = getCategory.filter(getStatus);

function category() {
  ingredientImage = document.querySelector('.ingredient-image');

  const menu_name = document.createElement('h2');
  menu_name.innerText = `${menuDetails.menuName} ` + 'Menu';

  ingredientImage.append(menu_name);

  for (let i = 0; i < getCategory.length; i++) {
    let div_menu_list;
    let div;
    let h2;
    let a;
    let button_view_button;

    div_menu_list = document.createElement('div');
    div_menu_list.setAttribute('class', 'menu-list_1');

    img_class = document.createElement('img');
    img_class.setAttribute('class', 'dish');
    img_class.setAttribute('src', categoryDataTrue[i].categoryImage);
    // img_class.setAttribute("alt", menu_types[i]["image"]["alt"]);
    div_menu_list.append(img_class);

    div = document.createElement('div');
    div_menu_list.append(div);

    h2 = document.createElement('h2');
    h2.innerText = categoryDataTrue[i].categoryName;
    div.append(h2);

    // p = document.createElement("p");
    // p.innerText = "₹" + " " +category["categoryData"][i]["categoryPrice"]
    // div.append(p);

    a = document.createElement('a');
    a.setAttribute('href', `../../products/Dishes/dish.html?menu=${encodeURIComponent(menuId)}&category=${categoryDataTrue[i].id}`);
    div.append(a);

    button_view_button = document.createElement('button');
    button_view_button.setAttribute('class', 'view-button');
    button_view_button.innerText = 'View';
    a.append(button_view_button);

    document.querySelector('div.menu-list_types').append(div_menu_list);
  }
}
