function transitionGradient() {
let hue = 0;
let increasing = true;

// Set interval for smooth transition
const intervalId = setInterval(() => {
if (increasing) {
hue = (hue + 1) % 360;
if (hue === 0) {
increasing = !increasing;
}
} else {
hue = (hue - 1 + 360) % 360;
if (hue === 255) {
increasing = !increasing;
}
}

    const saturation = 50;
    const lightness = 40;

    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    document.body.style.background = color;

}, 30);
}
window.onload = transitionGradient;

function funcmute() {
console.log("A button test");
}

function profileredirect() {
const url = "https://github.com/tanaybhomia";
window.location.href = url;
}

const mute = document.querySelector(".muting");
mute.addEventListener("click", funcmute);

const profile = document.querySelector(".github");
profile.addEventListener("click", profileredirect);

const noiseButtons = document.querySelectorAll(".noise button");

noiseButtons.forEach((button) => {
button.addEventListener("click", () => {
const audioId = button.dataset.audioId;
const audioElement = document.getElementById(audioId);
const sliderDiv = button.nextElementSibling;
const icon = button.querySelector("i");

    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();

        const existingSlider = sliderDiv.querySelector('input[type="range"]');
        if (!existingSlider) {
          const slider = document.createElement("input");
          slider.type = "range";
          slider.min = "0";
          slider.max = "1";
          slider.step = "0.01";
          slider.value = audioElement.volume;

          slider.addEventListener("input", () => {
            audioElement.volume = slider.value;
          });

          sliderDiv.appendChild(slider);
        }

        icon.style.color = "rgba(255, 255, 255, 1)";
      } else {
        audioElement.pause();
        audioElement.currentTime = 0;

        const existingSlider = sliderDiv.querySelector('input[type="range"]');
        if (existingSlider) {
          existingSlider.remove();
        }

        icon.style.color = "";
      }
    }

});
});

function productivitynoise() {
console.log("Productivity function");
}
function relaxnoise() {
console.log("Noise Function");
}
function focusnoise() {
console.log("Focus function");
}
function writingnoise() {
console.log("Writing function");
}

const productivityButton = document.querySelector(".productivity button");
productivityButton.addEventListener("click", productivitynoise);

const relaxButton = document.querySelector(".relax button");
relaxButton.addEventListener("click", relaxnoise);

const focusButton = document.querySelector(".focus button");
focusButton.addEventListener("click", focusnoise);

const writingButton = document.querySelector(".writing button");
writingButton.addEventListener("click", writingnoise);
