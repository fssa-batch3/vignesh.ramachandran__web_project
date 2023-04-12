
function event_menu() {

    categoryData = JSON.parse(localStorage.getItem("categoryData"));

    div_content = document.querySelector(".bdy_menu-content")


    for (i = 0; i < menuDataTrue.length; i++) {

        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = "dropdown_menu"

        const image = document.createElement('img');
        image.src = menuDataTrue[i]["image"];
        image.alt = menuDataTrue[i]["menuName"] + ' menu';
        dropdownMenu.appendChild(image);

        const heading = document.createElement('h2');
        heading.innerHTML = '<span>' + menuDataTrue[i]["menuName"] + '</span> Menu';
        dropdownMenu.appendChild(heading);

        const dropdownMenu1 = document.createElement('div');
        dropdownMenu1.className = "dropdown_menu-1"
        dropdownMenu.appendChild(dropdownMenu1);

        const innerDiv = document.createElement('div');
        dropdownMenu1.appendChild(innerDiv);


        let getCategory = categoryData.filter(data =>
            data.menuType === i + 1 + '')

        // filtering get status=true from menuData
        function getStatus(e) {
            return e.status === "true";
        }
        categoryDataTrue = getCategory.filter(getStatus);



        for (j = 0; j < categoryDataTrue.length; j++) {

            let link = document.createElement('a');
            link.href = root + "/pages/products/Dishes/dish.html?menu=" + menuDataTrue[i]["id"] +"&category=" + categoryDataTrue[j]["id"];
            link.innerText = categoryDataTrue[j]["categoryName"] + ' ' + menuDataTrue[i]["menuName"];
            innerDiv.append(link);

        }


        // Add the dropdown menu to the page
        div_content.appendChild(dropdownMenu);

    }
}


        // const links = [
        //     { href: '../../products/Dishes/dinner-ordinary.html', text: 'Ordinary Dinner' },
        //     { href: '../../products/Dishes/dinner-special.html', text: 'Special Dinner' },
        //     { href: '../../products/Dishes/dinner-vip.html', text: 'VIP Dinner' }
        // ];

        // for (const link of links) {
        // const a = document.createElement('a');
        // a.href = link.href;
        // a.textContent = link.text;
        // innerDiv.appendChild(a);
        // }