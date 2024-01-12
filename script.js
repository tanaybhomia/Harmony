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
  }, 10);
}

window.onload = transitionGradient;

function playInLoop(audioElement) {
  audioElement.loop = false;
  const restartThreshold = 10;

  audioElement.addEventListener("timeupdate", () => {
    const timeToEnd = audioElement.duration - audioElement.currentTime;

    if (timeToEnd < restartThreshold) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  });

  audioElement.play();
}

function stopLoop(audioElement) {
  audioElement.loop = false;
  audioElement.pause();
  audioElement.currentTime = 0;
}

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

function playaudio(button) {
  const audioId = button.dataset.audioId;
  const audioElement = document.getElementById(audioId);
  const sliderDiv = button.nextElementSibling;
  const icon = button.querySelector("i");

  if (audioElement) {
    if (audioElement.paused) {
      const existingSlider = sliderDiv.querySelector('input[type="range"]');
      if (!existingSlider) {
        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = "0";
        slider.max = "1";
        slider.step = "0.01";
        slider.value = 0.7; // Set initial volume to 0.7

        slider.addEventListener("input", () => {
          audioElement.volume = slider.value;
        });

        sliderDiv.appendChild(slider);
      } else {
        // If slider exists, set its value to 0.7
        existingSlider.value = 0.7;
      }

      icon.style.color = "rgba(255, 255, 255, 1)";

      playInLoop(audioElement);
    } else {
      const existingSlider = sliderDiv.querySelector('input[type="range"]');
      if (existingSlider) {
        existingSlider.remove();
      }

      icon.style.color = "";
      stopLoop(audioElement);
    }
  }
}

noiseButtons.forEach((button) => {
  button.addEventListener("click", () => playaudio(button));
});

function playAudiosByIds(...audioIds) {
  audioIds.forEach((id) => {
    const audioElement = document.getElementById(id);
    const button = document.querySelector(`[data-audio-id="${id}"]`);
    const sliderDiv = button.nextElementSibling;
    const icon = button.querySelector("i");

    if (audioElement) {
      audioElement.loop = true; // Set audio to loop

      if (audioElement.paused) {
        const existingSlider = sliderDiv.querySelector('input[type="range"]');
        if (!existingSlider) {
          const slider = document.createElement("input");
          slider.type = "range";
          slider.min = "0";
          slider.max = "1";
          slider.step = "0.01";
          slider.value = 0.7; // Set initial volume to 0.7

          slider.addEventListener("input", () => {
            audioElement.volume = slider.value;
          });

          sliderDiv.appendChild(slider);
        } else {
          // If slider exists, set its value to 0.7
          existingSlider.value = 0.7;
        }

        icon.style.color = "rgba(255, 255, 255, 1)";
        audioElement.volume = 0.7; // Set initial volume directly
        audioElement.play();
      } else {
        const existingSlider = sliderDiv.querySelector('input[type="range"]');
        if (existingSlider) {
          existingSlider.remove();
        }

        icon.style.color = "";
        audioElement.pause();
      }
    }
  });
}

function productivitynoise() {
  console.log("Productivity function");
  playAudiosByIds("soundRain", "soundForest", "soundFire");
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

let timerElement = document.querySelector(".timer");
let clockElement = document.querySelector(".clock");

console.log("Script loaded");

function updateTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  let formattedTime = padNumber(hours) + " : " + padNumber(minutes);

  clockElement.textContent = formattedTime;
}

function padNumber(number) {
  return number < 10 ? "0" + number : number;
}

// Call updateTime once to initialize the clock
updateTime();

// Set up the interval to update the clock every second
setInterval(updateTime, 1000);
