// Transitioning Background
function transitionGradient() {
  let hue = 0;
  let increasing = true;

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

// Playing and Stoping Audio in loops
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

// Playing audio for single buttons
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
        slider.value = 0.7;

        slider.addEventListener("input", () => {
          audioElement.volume = slider.value;
        });

        sliderDiv.appendChild(slider);
      } else {
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
if (noiseButtons) {
  noiseButtons.forEach((button) => {
    button.addEventListener("click", () => playaudio(button));
  });
}

// Playing presets
function playAudiosByIdsWithVolume(volume, ...audioIds) {
  audioIds.forEach((id) => {
    const audioElement = document.getElementById(id);
    const button = document.querySelector(`[data-audio-id="${id}"]`);
    const sliderDiv = button ? button.nextElementSibling : null;
    const icon = button ? button.querySelector("i") : null;

    if (audioElement && button && sliderDiv && icon) {
      audioElement.loop = true;

      if (audioElement.paused) {
        const existingSlider = sliderDiv.querySelector('input[type="range"]');
        if (!existingSlider) {
          const slider = document.createElement("input");
          slider.type = "range";
          slider.min = "0";
          slider.max = "1";
          slider.step = "0.01";
          slider.value = volume;

          slider.addEventListener("input", () => {
            audioElement.volume = slider.value;
          });

          sliderDiv.appendChild(slider);
        } else {
          existingSlider.value = volume;
        }

        icon.style.color = "rgba(255, 255, 255, 1)";
        audioElement.volume = volume;
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

// Stopping presets
function stopAudiosByIds(...audioIds) {
  audioIds.forEach((id) => {
    const audioElement = document.getElementById(id);
    const button = document.querySelector(`[data-audio-id="${id}"]`);
    const sliderDiv = button ? button.nextElementSibling : null;
    const icon = button ? button.querySelector("i") : null;

    if (audioElement && button && sliderDiv && icon) {
      audioElement.loop = false;

      const existingSlider = sliderDiv.querySelector('input[type="range"]');
      if (existingSlider) {
        existingSlider.remove();
      }

      icon.style.color = "";
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  });
}

// Checking ig audio is playing
function isAudioPlaying(audioId) {
  const audioElement = document.getElementById(audioId);
  return audioElement && !audioElement.paused;
}

function relaxpreset() {
  const icon = document.querySelector("#relax i");

  // Check if the audio is currently playing
  const isPlaying = isAudioPlaying("soundRain") || isAudioPlaying("soundFire");

  if (!isPlaying) {
    // If not playing, start playing and change the icon color
    playAudiosByIdsWithVolume(0.3, "soundRain");
    playAudiosByIdsWithVolume(0.7, "soundFire");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    // If playing, stop the audio and toggle back the icon color
    stopAudiosByIds("soundRain", "soundFire");
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

function readpreset() {
  const icon = document.querySelector("#read i");

  // Check if the audio is currently playing
  const isPlaying =
    isAudioPlaying("soundForst") || isAudioPlaying("soundWaterstream");

  if (!isPlaying) {
    // If not playing, start playing and change the icon color
    playAudiosByIdsWithVolume(0.7, "soundForst");
    playAudiosByIdsWithVolume(0.5, "soundWaterstream");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    // If playing, stop the audio and toggle back the icon color
    stopAudiosByIds("soundForst", "soundWaterstream");
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

function writepreset() {
  const icon = document.querySelector("#write i");

  // Check if the audio is currently playing
  const isPlaying = isAudioPlaying("soundRain") || isAudioPlaying("soundFire");

  if (!isPlaying) {
    // If not playing, start playing and change the icon color
    playAudiosByIdsWithVolume(0.3, "soundRain");
    playAudiosByIdsWithVolume(0.7, "soundFire");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    // If playing, stop the audio and toggle back the icon color
    stopAudiosByIds("soundRain", "soundFire");
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

function focuspreset() {
  const icon = document.querySelector("#focus i");

  // Check if the audio is currently playing
  const isPlaying = isAudioPlaying("soundRain") || isAudioPlaying("soundFire");

  if (!isPlaying) {
    // If not playing, start playing and change the icon color
    playAudiosByIdsWithVolume(0.3, "soundRain");
    playAudiosByIdsWithVolume(0.7, "soundFire");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    // If playing, stop the audio and toggle back the icon color
    stopAudiosByIds("soundRain", "soundFire");
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

const relaxbutton = document.querySelector("#relax button");
relaxbutton.addEventListener("click", relaxpreset);

const readbutton = document.querySelector("#read button");
readbutton.addEventListener("click", readpreset);

const writebutton = document.querySelector("#write button");
writebutton.addEventListener("click", writepreset);

const focusbutton = document.querySelector("#focus button");
focusbutton.addEventListener("click", focuspreset);

let timerElement = document.querySelector(".timer");
let clockElement = document.querySelector(".clock");

// Updating time
function updateTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  let formattedTime = padNumber(hours) + " : " + padNumber(minutes);

  if (clockElement) {
    clockElement.textContent = formattedTime;
  }
}

// Padding number
function padNumber(number) {
  return number < 10 ? "0" + number : number;
}

updateTime();
setInterval(updateTime, 1000);
