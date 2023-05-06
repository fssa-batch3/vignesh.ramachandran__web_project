for (let i = 0; i < menuDataTrue.length; i++) {
  const div_lists = document.createElement("div");
  div_lists.setAttribute("class", "lists");
  // console.log(div_lists);

  const img = document.createElement("img");
  img.setAttribute("src", menuDataTrue[i].image);
  // img.setAttribute("alt", menus[i]["images"]["alt"]);
  div_lists.append(img);

  const div_lists_text = document.createElement("div");
  div_lists_text.setAttribute("class", "lists-text");
  div_lists.append(div_lists_text);

  const h2 = document.createElement("h2");
  h2.innerText = " Menu";
  div_lists_text.append(h2);

  const span = document.createElement("span");
  span.innerText = menuDataTrue[i].menuName;
  h2.prepend(span);

  const p = document.createElement("p");
  p.innerText = menuDataTrue[i].description;
  div_lists_text.append(p);

  const a = document.createElement("a");
  a.setAttribute(
    "href",
    `./pages/products/Menus/category.html?menu=${menuDataTrue[i].id}`
  );
  a.innerText = "read more...";
  div_lists_text.append(a);

  document.querySelector("div.mainmenu-list").append(div_lists);
}
