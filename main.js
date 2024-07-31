import { Application, Assets, Graphics, Sprite } from "pixi.js";

// Asynchronous IIFE
(async () => {
  // Create a PixiJS application.
  const app = new Application();

  // Intialize the application.
  await app.init({ background: "#1099bb", resizeTo: window });

  // Then adding the application's canvas to the DOM body.
  document.body.appendChild(app.canvas);

  // Load the bunny texture.
  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  let obj = new Graphics().rect(0, 0, 200, 100).fill(0xff0000);

  // Create a new Sprite from an image path.
  const bunny = new Sprite(texture);

  // Add to stage.
  app.stage.addChild(bunny);
  app.stage.addChild(obj);

  // Center the sprite's anchor point.
  bunny.anchor.set(0.5);

  // Move the sprite to the center of the screen.
  bunny.x = app.screen.width / 2;
  bunny.y = app.screen.height / 2;

  // Add an animation loop callback to the application's ticker.
  app.ticker.add((time) => {
    /**
     * Just for fun, let's rotate mr rabbit a little.
     * Time is a Ticker object which holds time related data.
     * Here we use deltaTime, which is the time elapsed between the frame callbacks
     * to create frame-independent transformation. Keeping the speed consistent.
     */
    bunny.rotation += 0.1 * time.deltaTime;
  });

  console.log(obj);
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      obj.y = obj.y + 1;
    }
  });
})();
