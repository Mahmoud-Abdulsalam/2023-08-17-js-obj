const golf = {
  color: "red",
  maxSpeed: "180",
};

const opel = {
  color: "blue",
  maxSpeed: "185",
};

console.log("Golf color:", golf.color);
console.log("Opel color:", opel.color);

let TempColor = golf.color;
golf.color = opel.color;
opel.color = TempColor;

console.log("Colors Switched");
console.log("Golf now is:", golf.color);
console.log("Opel now is:", opel.color);
