import { Application, Assets, Graphics, Sprite } from "pixi.js";
import { startGame, updateBackgroundColor } from "./functions";

(async () => {
  const app = new Application();

  await app.init({ background: "#1099bb", resizeTo: window });

  let isGameStarted = false;

  document.body.appendChild(app.canvas);

  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  let obj = new Graphics().rect(0, 0, 20, 20).fill(0xff0000);

  const startButton = document.getElementById("start-button");
  const input = document.getElementById("num-input");
  // app.stage.addChild(startButton);

  // startButton.x = app.screen.width / 2;
  // startButton.y = app.screen.height / 2;

  const bunny = new Sprite(texture);

  app.stage.addChild(bunny);

  // app.stage.addChild(obj);

  // bunny.anchor.set(0.5);

  // bunny.x = app.screen.width / 2;
  // bunny.y = app.screen.height / 2;

  // document.addEventListener("keydown", (event) => {
  //   if (event.key === "ArrowDown") {
  //     obj.y = obj.y + 1;
  //   }
  // });

  startButton.addEventListener("click", () => {
    startGame(isGameStarted, startButton, app, input);
  });
})();
