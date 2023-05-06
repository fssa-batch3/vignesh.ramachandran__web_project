const root = window.location.origin;

console.log(root);

const after_login = `
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
        <div class = "cartu">
            <li><a href="${root}/pages/homepage/my cart.html" class="navigation-link">MY CART</a></li>
            <span class="cart_qty">7</span>
        </div>
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
`;

const before_login = `
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
`;

const admin_header = `
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
            <div class = "cartu">
                <li><a href="${root}/pages/homepage/my cart.html" class="navigation-link">MY CART</a></li>
                <span class="cart_qty">0</span>
            </div>
        </ul>

        <div class="dropdown_profile">
            <img src="${root}/assets/img/profile.png" alt="profile image" />
            <div class="dropdown_profile-content">
                <div>
                    <a href="${root}/pages/profile/Profile page.html">My Profile</a>
                    <a href="${root}/pages/Admin/total_orders.html">Catering Orders</a>
                    <a href="${root}/pages/Admin/admin form.html">Admin Forms</a>
                </div>
            </div>
        </div>
    </header>  
    `;

const user_id = JSON.parse(localStorage.getItem("user_unique"));
// console.log(user_id)
const admin_id = "vignesh.ramachandran@fssa.freshworks.com";

if (user_id !== admin_id && user_id !== null) {
  document.body.insertAdjacentHTML("afterbegin", after_login);

  //  logout
  const logoutBtn = document.querySelector("#logout");
  logoutBtn?.addEventListener("click", () => {
    if (window.confirm("Are you sure to logout this account ?")) {
      localStorage.removeItem("user_unique");
      document.body.innerHTML = before_login;
    }
  });
} else if (user_id === admin_id) {
  document.body.insertAdjacentHTML("afterbegin", admin_header);

  // logout
  const logoutBtn = document.querySelector("#logout");
  logoutBtn?.addEventListener("click", () => {
    if (window.confirm("Are you sure to logout this account ?")) {
      localStorage.removeItem("user_unique");
      document.body.innerHTML = before_login;
    }
  });
} else if (user_id == null) {
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

const menuData = JSON.parse(localStorage.getItem("menuData"));

// filtering get status=true from menuData
function getStatus(e) {
  return e.status === "true";
}
const menuDataTrue = menuData.filter(getStatus);

// creating nav bar
const div_dropdown_content = document.querySelector(".dropdown-content");

const div_menulist = document.createElement("div");

for (let i = 0; i < menuDataTrue.length; i++) {
  const a_1 = document.createElement("a");
  a_1.innerText = `${menuDataTrue[i].menuName} Menu`;
  a_1.setAttribute(
    "href",
    `${root}/pages/products/Menus/category.html?menu=${menuDataTrue[i].id}`
  );

  div_menulist.append(a_1);
}

div_dropdown_content.append(div_menulist);

// for mycart qty
const cartData1 = JSON.parse(localStorage.getItem("cartData"));
const cartQty = document.querySelector(".cart_qty");

if (cartData1 === null) {
  cartQty.innerText = 0;
}

const user_unique1 = JSON.parse(localStorage.getItem("user_unique"));

const cart_user_data = cartData1.filter(
  (data) => data.user_id === user_unique1
);
if (cart_user_data.length === 0) {
  cartQty.setAttribute("style", "display:none");
} else {
  cartQty.innerText = cart_user_data.length;
}
