const menuId = new URLSearchParams(window.location.search).get("menu")

let menuData = JSON.parse(localStorage.getItem("menuData"));

const category = menuData.find(data=>
    data.menuName == menuId)

function menus() {
    for(let i=0; i<3; i++)
    {   
        let div_menu_list;
        let img_class;
        let div;
        let h2;
        let p;
        let a;
        let button_view_button;


        div_menu_list = document.createElement("div");
        div_menu_list.setAttribute ("class", "menu-list_1");
        console.log(div_menu_list);

        img_class = document.createElement("img");
        img_class.setAttribute("class", "dish");
        img_class.setAttribute("src", category["categoryData"][i]["categoryImage"]);
        // img_class.setAttribute("alt", menu_types[i]["image"]["alt"]);
        div_menu_list.append(img_class);

        div = document.createElement("div");
        div_menu_list.append(div);

        h2 = document.createElement("h2");
        h2.innerText = category["categoryData"][i]["categoryName"];
        div.append(h2);

        p = document.createElement("p");
        p.innerText = "₹" + " " +category["categoryData"][i]["categoryPrice"]
        div.append(p);

        a = document.createElement("a");
        a.setAttribute("href", "../../products/Dishes/dish.html?menu=" + encodeURIComponent(category["menuName"])  + "&category="+ category["categoryData"][i]["categoryName"]);
        div.append(a);

        button_view_button = document.createElement("button");
        button_view_button.setAttribute ("class", "view-button");
        button_view_button.innerText = "View";
        a.append(button_view_button);


        document.querySelector("div.menu-list_types").append(div_menu_list);

    }
}










// function menus() {
//     for(let i=0; i<3; i++)
//     {   
//         let div_menu_list;
//         let img_class;
//         let div;
//         let h2;
//         let p;
//         let a;
//         let button_view_button;


//         div_menu_list = document.createElement("div");
//         div_menu_list.setAttribute ("class", "menu-list_1");
//         console.log(div_menu_list);

//         img_class = document.createElement("img");
//         img_class.setAttribute("class", "dish");
//         img_class.setAttribute("src", menu_types[i]["image"]["source"]);
//         img_class.setAttribute("alt", menu_types[i]["image"]["alt"]);
//         div_menu_list.append(img_class);

//         div = document.createElement("div");
//         div_menu_list.append(div);

//         h2 = document.createElement("h2");
//         h2.innerText = menu_types[i]["name"];
//         div.append(h2);

//         p = document.createElement("p");
//         p.innerText = menu_types[i]["price"]["currency"] + " " + menu_types[i]["price"]["value"];
//         div.append(p);

//         a = document.createElement("a");
//         a.setAttribute("href", menu_types[i]["link"] + "?category="+ menu_types[i]["name"]);
//         div.append(a);

//         button_view_button = document.createElement("button");
//         button_view_button.setAttribute ("class", "view-button");
//         button_view_button.innerText = "View";
//         a.append(button_view_button);


//         document.querySelector("div.menu-list_types").append(div_menu_list);

//     }
// }