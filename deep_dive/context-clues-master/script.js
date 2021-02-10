var friend = ["chevy", "prim", "angelica", "josh", "alan"];
var locations = [
  "the bedroom",
  "the pool",
  "the hallway",
  "the restroom",
  "the garage",
  "the library",
  "the kitchen",
  "the den",
  "the yard",
  "the carpark",
];
var murderWeapon = [
  "wooden spoon",
  "rubber chicken",
  "action figure",
  "blade of grass",
  "butter knife",
  "teddy bear",
  "pickle jar",
  "rubber mallet",
  "plastic bag",
  "poop emoji",
  "phone charger",
  "my cousins mixtape",
  "horse head mask",
  "uncle phils remains",
  "100 gecs",
  "fountain pen",
  "pizza cutter",
  "wooden leg",
  "dr houses cane",
  "tarot cards",
];

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < 101; i++) {
    console.log(i);
    var heading = document.createElement("h3");
    heading.innerHTML = "clue" + i;
    var set = {
      num: i,
      friend: friend[Math.floor(Math.random() * friend.length)],
      locations: locations[Math.floor(Math.random() * locations.length)],
      murderWeapon:
        murderWeapon[Math.floor(Math.random() * murderWeapon.length)],
    };
    heading.addEventListener("click", config.bind(set));
    document.body.appendChild(heading);
  }

  function config() {
    alert(
      "i accuse " +
        this.friend +
        " with the " +
        this.murderWeapon +
        " in " +
        this.locations
    );
  }
});
