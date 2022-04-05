// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

let punkt1x = canvas.width * 0.05
let punktY = canvas.height * 0.65
let punkt2x = canvas.width * 0.7

let bredd = canvas.width * 0.25
let höjd = canvas.height * 0.3

function drawPicture() {
  c.beginPath();

  //Rektanglar:
  c.rect(punkt1x, punktY, bredd, höjd);
  c.rect(punkt2x, punktY, bredd, höjd);

  //Trianglar:
  c.moveTo(punkt1x, punktY);
  c.lineTo(bredd/2 + punkt1x, midY/3*2);
  c.lineTo(punkt1x + bredd, punktY);

  c.moveTo(punkt2x, punktY);
  c.lineTo(bredd/2 + punkt2x, midY/3*2);
  c.lineTo(punkt2x + bredd, punktY);

  c.stroke();

  //Ellips
  c.beginPath();
  c.ellipse(midX, midY + canvas.height * 0.1, canvas.width * 0.05, canvas.height * 0.2, 0, 2, 3 * Math.PI - 2);
  c.fillStyle = "green"
  c.fill();
  c.stroke();

  //Trädstam;
  c.beginPath();
  c.rect(midX - canvas.width * 0.02, midY + canvas.height * 0.28, canvas.width * 0.04, canvas.height * 0.2);
  c.fillStyle = "Sienna"
  c.fill();
  c.stroke();
}
drawPicture();
