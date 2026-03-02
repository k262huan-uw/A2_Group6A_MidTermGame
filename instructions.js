const backBtn = { x: 400, y: 680, w: 260, h: 86, label: "BACK" };

function drawInstr() {
  drawMochiSky();

  noStroke();
  fill(255, 255, 255, 235);
  rectMode(CENTER);
  rect(width / 2, 360, 680, 520, 26);

  fill(40, 45, 60);
  textAlign(CENTER, TOP);
  textSize(40);
  text("HOW TO PLAY", width / 2, 150);

  fill(70, 75, 90);
  textSize(16);
  textAlign(CENTER, TOP);

  text(
    "You run a bubble tea counter for mochi monsters.\n\n" +
      "Mechanic 1: Memory\n" +
      "• You see the order briefly, then it disappears.\n\n" +
      "Mechanic 2: Mixing under Vision Mode\n" +
      "• Press V to toggle NORMAL / CVD.\n" +
      "• In CVD mode, some colours look more similar.\n\n" +
      "How to make a drink:\n" +
      "• Choose 1 Tea Base, 1 Syrup, 1 Topping\n" +
      "• Click SERVE before time runs out\n\n" +
      "Keys:\n" +
      "• V = toggle vision\n" +
      "• R = restart (back to title)",
    width / 2,
    240,
  );

  // Button
  drawInstrButton(backBtn);
  cursor(isHover(backBtn) ? HAND : ARROW);
}

function instrMousePressed() {
  if (isHover(backBtn)) currentScreen = "start";
}

function instrKeyPressed() {
  if (keyCode === ESCAPE) currentScreen = "start";
  if (key === "b" || key === "B") currentScreen = "start";
}

function drawInstrButton(btn) {
  rectMode(CENTER);
  const hover = isHover(btn);

  noStroke();
  if (hover) fill(255, 205, 120, 240);
  else fill(255, 205, 120, 200);

  rect(btn.x, btn.y, btn.w, btn.h, 22);

  fill(40, 45, 60);
  textAlign(CENTER, CENTER);
  textSize(22);
  text(btn.label, btn.x, btn.y);
}
