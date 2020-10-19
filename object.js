const songDatabase = [
  {
    songId: 1,
    title: "My baby",
    artist: "Soggy socks",
  },
  {
    songId: 2,
    title: "3 nails in wood",
    artist: "The carpenters",
  },
  {
    songId: 3,
    title: "Blacker than black",
    artist: "Instant coffee",
  },
  {
    songId: 4,
    title: "When is enough too little",
    artist: "The spies girls",
  },
  {
    songId: 5,
    title: "Too good to go",
    artist: "kitty girls",
  },
  {
    songId: 6,
    title: "When its too rough",
    artist: "Vanom",
  },
];
// add a object
function addObject(songId, title, artist) {
  const item = {
    songId: songId,
    title: title,
    artist: artist,
  };
  songDatabase.push(item);
}
addObject(7, "how its appen", "kyom");
//console.log(songDatabase);

// add a item in a every object at once
for (let i = 0; i < songDatabase.length; i++) {
  Object.assign(songDatabase[i], { name: "kamal" });
}
console.log(songDatabase);

// delete a key in a every object
for (let i = 0; i < songDatabase.length; i++) {
  delete songDatabase[i].name;
}
console.log(songDatabase);

// display only title from object
let songTitle = songDatabase.map((x) => {
  x.title;
});
console.log(songTitle);

// search songName
function searchSongName(song) {
  const songName = song.toLowerCase();
  let searchedSong = songDatabase.filter((item) =>
    item.title.toLowerCase().includes(songName)
  );
  let searchedSongTitle = searchedSong.map((x) => x.title);
  console.log(searchedSongTitle);
  //return searchedSong;
}
searchSongName("3 nails in wood");
