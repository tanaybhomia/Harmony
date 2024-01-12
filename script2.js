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

function createVolumeSlider(sliderDiv, audioElement) {
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
}

function removeVolumeSlider(sliderDiv) {
  const existingSlider = sliderDiv.querySelector('input[type="range"]');
  if (existingSlider) {
    existingSlider.remove();
  }
}

function playAudio(button) {
  const audioId = button.dataset.audioId;
  const audioElement = document.getElementById(audioId);
  const sliderDiv = button.nextElementSibling;
  const icon = button.querySelector("i");

  if (audioElement) {
    if (audioElement.paused) {
      createVolumeSlider(sliderDiv, audioElement);
      icon.style.color = "rgba(255, 255, 255, 1)";
      playInLoop(audioElement);
    } else {
      removeVolumeSlider(sliderDiv);
      icon.style.color = "";
      stopLoop(audioElement);
    }
  }
}

const noiseButtons = document.querySelectorAll(".noise button");

noiseButtons.forEach((button) => {
  button.addEventListener("click", () => playAudio(button));
});

function playAudiosByIds(...audioIds) {
  audioIds.forEach((id) => {
    const audioElement = document.getElementById(id);
    const button = document.querySelector(`[data-audio-id="${id}"]`);
    const sliderDiv = button.nextElementSibling;
    const icon = button.querySelector("i");

    if (audioElement) {
      audioElement.loop = true;

      if (audioElement.paused) {
        createVolumeSlider(sliderDiv, audioElement);
        icon.style.color = "rgba(255, 255, 255, 1)";
        audioElement.volume = 0.7;
        audioElement.play();
      } else {
        removeVolumeSlider(sliderDiv);
        icon.style.color = "";
        audioElement.pause();
      }
    }
  });
}

const presetButtons = document.querySelectorAll(".preset button");

presetButtons.forEach((button) => {
  button.addEventListener("click", () =>
    playAudiosByIds(button.dataset.audioId)
  );
});

let timerElement = document.querySelector(".timer");
let clockElement = document.querySelector(".clock");

function updateTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

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
