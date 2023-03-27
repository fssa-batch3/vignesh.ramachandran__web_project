

// const categoryData = JSON.parse(localStorage.getItem("categoryData"))

let div_footer = document.querySelector(".footer-box");

for (i = 0; i < menuDataTrue.length - 1; i++) {

    // <div class="footer-content">
    let div_content = document.createElement("div");
    div_content.setAttribute("class", "footer-content");

    // <h3><span>Breakfast</span> Menus</h3>
    let h3_name = document.createElement("h3");
    h3_name.innerText = " Menu";
    div_content.append(h3_name);

    span = document.createElement("span");
    span.innerText = menuDataTrue[i]["menuName"];
    h3_name.prepend(span);

    // <ul>
    ul_list = document.createElement("ul");
    div_content.append(ul_list);


    findData = categoryData.filter(data =>
        data.menuType == i + 1)

    categoryDataTrue = findData.filter(data =>
        data.status == "true")

    for (j = 0; j < categoryDataTrue.length; j++) {

        // <li><a href="./pages/products/Dishes/morning-ordinary.html" class="footer-navigation">Ordinary Breakfast</a></li>
        li_links = document.createElement("li");
        ul_list.append(li_links);

        a_links = document.createElement("a");
        a_links.setAttribute("href", root +"/pages/products/Dishes/dish.html?menu=" + menuDataTrue[i]["id"] + "&category=" + categoryDataTrue[j]["id"]);
        a_links.setAttribute("class", "footer-navigation");
        a_links.innerText = categoryDataTrue[j]["categoryName"] + " " + menuDataTrue[i]["menuName"];
        li_links.append(a_links);
    }


    div_footer.append(div_content);
}





