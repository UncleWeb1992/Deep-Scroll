/**
 * 3D Scroll
 */

const zSpacing = -1000;
let lastPos = zSpacing / 6;
const frames = document.querySelectorAll(".frame");
const framesArr = Array.from(frames);
const zVal = [];

window.addEventListener("scroll", function () {
  const top = this.document.documentElement.scrollTop;
  const delta = lastPos - top;
  lastPos = top;

  framesArr.forEach((_, i) => {
    zVal.push(i * zSpacing + zSpacing);
    zVal[i] += delta * -5.5;

    const frame = framesArr[i];
    const transform = `translateZ(${zVal[i]}px)`;
    const opacity = zVal[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

    frame.setAttribute("style", `transform:${transform}; opacity: ${opacity}`);
  });
});

window.scrollTo(0, 1);

// Audio
const soundBtn = document.querySelector(".soundbutton");
const audio = document.querySelector(".audio");

soundBtn.addEventListener("click", () => {
  soundBtn.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  soundBtn.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};
