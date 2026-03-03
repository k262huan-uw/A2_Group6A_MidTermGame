const playBtn = { x: 400, y: 420, w: 280, h: 86, label: "START SHIFT" };
const instrBtn = { x: 400, y: 520, w: 280, h: 86, label: "INSTRUCTIONS" };

function drawStart() {
  drawMochiSky();
  // Big title sign
  noStroke();
  fill(255, 255, 255, 230);
  rectMode(CENTER);
  rect(width / 2, 180, 640, 140, 26);

  fill(40, 45, 60);
  textAlign(CENTER, CENTER);
  textSize(44);
  text("BOBA BAR", width / 2, 170);

  textSize(18);
  fill(70, 75, 90);
  text("Mochi Monster Mayhem", width / 2, 210);

  // Buttons
  drawMenuButton(playBtn, true);
  drawMenuButton(instrBtn, false);

  cursor(isHover(playBtn) || isHover(instrBtn) ? HAND : ARROW);

  // Cute monsters on counter
  drawMonsterLineDecor();
}

function startMousePressed() {
  if (isHover(playBtn)) {
    startNewShift();
    currentScreen = "game";
  } else if (isHover(instrBtn)) {
    currentScreen = "instr";
  }
}

function startKeyPressed() {
  if (keyCode === ENTER) {
    startNewShift();
    currentScreen = "game";
  }
  if (key === "i" || key === "I") currentScreen = "instr";
}

function drawMenuButton(btn, primary) {
  rectMode(CENTER);
  const hover = isHover(btn);

  noStroke();
  if (primary) {
    if (hover) fill(255, 205, 120, 240);
    else fill(255, 205, 120, 200);
  } else {
    if (hover) fill(255, 255, 255, 240);
    else fill(255, 255, 255, 200);
  }

  rect(btn.x, btn.y, btn.w, btn.h, 22);

  fill(40, 45, 60);
  textAlign(CENTER, CENTER);
  textSize(22);
  text(btn.label, btn.x, btn.y);
}

function startNewShift() {
  score = 0;
  round = 1;
  visionMode = "NORMAL";
  startRound();
}

function drawMochiSky() {
  background(233, 246, 255);

  noStroke();
  fill(255, 210, 225);
  ellipse(170, 180, 340, 340);
  ellipse(560, 170, 550, 550);

  fill(255, 255, 255, 200);
  ellipse(90, 92, 60, 60);
  ellipse(145, 85, 95, 95);
  ellipse(620, 90, 90, 90);
  ellipse(660, 95, 50, 50);

  // Counter base strip
  fill(170, 230, 220);
  rectMode(CORNER);
  rect(0, 710, width, 110);
}

function drawMonsterLineDecor() {
  const xs = [170, 310, 450, 590];
  for (let i = 0; i < 4; i++) {
    drawMochiMonster(xs[i], 720, 70, i, "waiting");
  }
}
