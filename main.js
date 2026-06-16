const originalSetup = window.setup;

window.setup = function () {
  if (typeof originalSetup === "function") {
    originalSetup.apply(this, arguments);
  }

  moveSketchCanvas();
};

function moveSketchCanvas() {
  const sketch = document.getElementById("project-sketch");
  const canvas = document.querySelector("canvas");

  if (!sketch || !canvas) {
    return;
  }

  sketch.appendChild(canvas);
  canvas.setAttribute("aria-hidden", "true");
  canvas.setAttribute("tabindex", "-1");
}
