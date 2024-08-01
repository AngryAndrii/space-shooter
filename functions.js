export const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const updateBackgroundColor = (isGameStarted, app) => {
  if (isGameStarted) {
    return (app.renderer.background.color = "#ebf5d3");
  }
};

export const startGame = (isGameStarted, startButton, app, input) => {
  isGameStarted = true;
  updateBackgroundColor(isGameStarted, app);
  startButton.style.display = "none";
  input.style.display = "block";

  let num = randomIntFromInterval(1, 6);
  return num;
};
