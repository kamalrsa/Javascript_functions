const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];
const list = document.getElementById("podcastList");
for (let i = 0; i < podcasts.length; i++) {
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  h1.innerHTML = podcasts[i].name;
  li.appendChild(h1);
  const img = document.createElement("img");
  if (podcasts[i].imageUrl) {
    img.setAttribute("src", podcasts[i].imageUrl);
    li.appendChild(img);
  }
  list.appendChild(li);
}
