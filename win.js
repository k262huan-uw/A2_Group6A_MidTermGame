function drawWin() {
  drawMochiSky();

  noStroke();
  fill(255, 255, 255, 235);
  rectMode(CENTER);
  rect(width / 2, 360, 650, 420, 26);

  fill(40, 45, 60);
  textAlign(CENTER, CENTER);
  textSize(52);
  text("ORDER SLAYED", width / 2, 260);

  fill(70, 75, 90);
  textSize(20);
  text(endingText, width / 2, 380);

  fill(70, 75, 90);
  textSize(14);
  text("Click or press ENTER for next customer.", width / 2, 560);
}

function winMousePressed() {
  round += 1;
  startRound();
  currentScreen = "game";
}

function winKeyPressed() {
  if (keyCode === ENTER) {
    round += 1;
    startRound();
    currentScreen = "game";
  }
}
