const root = window.location.origin;

console.log(root);

const after_login =
    `
<header>
    <div class="bx bx-menu" id="toggle" onclick="openNav()"></div>

    <div class="icon-left">
        <img src="${root}/assets/img/main-logo.png" alt="Company Logo" class="logo" />
        <h1>SR</h1>
        <div>
            <p>Catering</p>
        </div>
    </div>

    <ul class="navigation" id="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

        <li><a href="${root}/index.html" class="navigation-link">HOME</a></li>
        <li class="dropdown">
            <span class="navigation-link">MENU</span>
            <div class="dropdown-content">
                
            </div>
        </li>
        <li><a href="${root}/pages/homepage/Events/events.html" class="navigation-link">EVENTS</a></li>
        <li><a href="${root}/pages/homepage/about us.html" class="navigation-link">ABOUT US</a></li>
        <li><a href="${root}/pages/homepage/contact us.html" class="navigation-link">CONTACT US</a></li>
        <li><a href="${root}/pages/homepage/my cart.html" class="navigation-link">MY CART</a></li>
    </ul>

    <div class="dropdown_profile">
        <img src="${root}/assets/img/profile.png" alt="profile image" />
        <div class="dropdown_profile-content">
            <div>
                <a href="${root}/pages/profile/Profile page.html">My Profile</a>
                <a href="${root}/pages/profile/my orders.html">My Orders</a>
            </div>
        </div>
    </div>
</header>
`





const before_login =
    `
<header>
    <div class="bx bx-menu" id="toggle" onclick="openNav()"></div>

    <div class="icon-left">
        <img src="${root}/assets/img/main-logo.png" alt="Company Logo" class="logo" />
        <h1>SR</h1>
        <div>
            <p>Catering</p>
        </div>
    </div>

    <ul class="navigation" id="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

        <li><a href="${root}/index.html" class="navigation-link">HOME</a></li>
        <li class="dropdown">
            <span class="navigation-link">MENU</span>
            <div class="dropdown-content">
                
            </div>
        </li>
        <li><a href="${root}/pages/homepage/Events/events.html" class="navigation-link">EVENTS</a></li>
        <li><a href="${root}/pages/homepage/about us.html" class="navigation-link">ABOUT US</a></li>
        <li><a href="${root}/pages/homepage/contact us.html" class="navigation-link">CONTACT US</a></li>
    </ul>

    <div class="dropdown_profile">
        <a href="${root}/pages/profile/Login.html">
            <button class="btn login" id="login"> Login </button>
        </a>
        
    </div>
</header>
`


let user_id = JSON.parse(localStorage.getItem("user_id"));
// console.log(user_id)


if (user_id) {
    document.body.insertAdjacentHTML("afterbegin", after_login);

    //  logout
    const logoutBtn = document.querySelector("#logout");
    logoutBtn?.addEventListener("click", () => {
        localStorage.removeItem("user_id");
        document.body.innerHTML = before_login;
    })
}
else {

    document.body.insertAdjacentHTML("afterbegin", before_login);

    // //  logout button
    // const logoutBtn = document.querySelector("#logout");
    // logoutBtn?.removeEventListener("click", () => document.body.innerHTML = after_login);
    // localStorage.removeItem("user_id")
}



function openNav() {
    document.getElementById("sidenav").style.width = "190px";
    // document.body.style.backgroundColor = "var(--other-color)";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    // document.body.style.backgroundColor = "white";
}



// All menus lists

let menuData = JSON.parse(localStorage.getItem("menuData"));

// filtering get status=true from menuData
function getStatus(e) {
    return e.status === "true";
}
menuDataTrue = menuData.filter(getStatus);

// creating nav bar
let div_dropdown_content = document.querySelector(".dropdown-content")

let div_menulist = document.createElement("div");

for (i = 0; i < menuDataTrue.length; i++) {

    let a_1 = document.createElement("a");
    a_1.innerText = menuDataTrue[i]["menuName"] + " Menu";
    a_1.setAttribute("href", root+"/pages/products/Menus/category.html?menu=" + menuDataTrue[i]["id"]);

    div_menulist.append(a_1);
}

div_dropdown_content.append(div_menulist);