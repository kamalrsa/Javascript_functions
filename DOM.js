const dishes = ["chinese", "noodels", "rice"];
const body = document.querySelector("body");
const ul = document.createElement("ul");
body.appendChild(ul);
for (let i = 0; i < dishes.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = dishes[i];
  ul.appendChild(li);
}
