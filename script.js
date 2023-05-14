"use strict"

var canvas = document.getElementById("clock");
var drawing = canvas.getContext("2d");

var grd = drawing.createRadialGradient(320, 320, 250, 320, 320, 310);
grd.addColorStop(0, "aquamarine");
grd.addColorStop(1, "white");
drawing.fillStyle = grd;

drawing.beginPath();
drawing.arc(320, 320, 310, 0, 2 * Math.PI);
drawing.fill();

drawing.fillStyle = "lightblue";

drawing.beginPath();

var radius;
for (var i = 0; i < 120; i++) {
  if (i % 10 === 0) {
    radius = 250;
  } else if (i % 2 === 0) {
    radius = 280;
  } else {
    radius = 300;
  }
  drawing.arc(320, 320, radius, Math.PI * (i - 1) / 60, Math.PI * i / 60);
}

drawing.closePath();
drawing.fill();
