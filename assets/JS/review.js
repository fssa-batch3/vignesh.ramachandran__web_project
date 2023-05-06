// rating function
const order_url_id = new URLSearchParams(window.location.search).get("orderId");
// console.log(order_url_id);
const orderData = JSON.parse(localStorage.getItem("orderData"));

// const btn = document.querySelectorAll(".btn_post");
const revForm = document.getElementById("rev_form");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelectorAll(".edit");

const reviewDetails = JSON.parse(localStorage.getItem("reviewDetails")) || [];

// btn.forEach(function save_post(savePost) {
//   savePost.addEventListener("click", () => {
revForm.addEventListener("submit", (event) => {
  event.preventDefault();
  widget.style.display = "none";
  post.style.display = "block";

  const star_value = document.querySelector('input[name="rate"]:checked').value;
  // console.log(star_value);

  const findData = orderData.filter((data) => data.order_id === order_url_id);
  const rev_menuId = findData[0]["ordered_product"][0]["menu_id"];
  // console.log(rev_menuId);

  const rev_catId = findData[0]["ordered_product"][0]["category_id"];
  // console.log(rev_catId);

  const rev_userId = findData[0]["user_id"]
  // console.log(rev_userId);

  const rev_message = document
    .querySelector("textarea")
    .value.trim()
    .split(/\s+/g)
    .join(" ");

  function validate() {
    if (/^\s*$/g.test(rev_message)) {
      alert("Enter the feedback");
    } else {
      console.log(rev_message);

      reviewDetails.push({
        order_id: order_url_id,
        user_id: rev_userId,
        menu_id: rev_menuId,
        category_id: rev_catId,
        star: star_value,
        feedback: rev_message,
      });
      console.log(reviewDetails[0]);

      window.location.href = "../../pages/profile/my orders.html";
    }
  }
  validate();

  localStorage.setItem("reviewDetails", JSON.stringify(reviewDetails));
});
// });

editBtn.forEach(function edit_post(editPost) {
  editPost.addEventListener("click", () => {
    widget.style.display = "block";
    post.style.display = "none";
  });
});
