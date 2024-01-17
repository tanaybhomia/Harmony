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
  }, 100);
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

function ptrainjourney() {
  const icon = document.querySelector("#trainjourney i");

  // Check if the audio is currently playing
  const isPlaying =
    isAudioPlaying("soundTrain") ||
    isAudioPlaying("soundForst") ||
    isAudioPlaying("soundRain") ||
    isAudioPlaying("soundWind");

  if (!isPlaying) {
    // If not playing, start playing and change the icon color
    playAudiosByIdsWithVolume(0.9, "soundTrain");
    playAudiosByIdsWithVolume(0.7, "soundForst");
    playAudiosByIdsWithVolume(0.5, "soundRain");
    playAudiosByIdsWithVolume(0.8, "soundWind");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    // If playing, stop the audio and toggle back the icon color
    stopAudiosByIds("soundTrain", "soundForst", "soundRain", "soundWind");
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

function poffice() {
  const icon = document.querySelector("#office i");

  // Check if the audio is currently playing
  const isPlaying =
    isAudioPlaying("soundCoffee") ||
    isAudioPlaying("soundKeyboard") ||
    isAudioPlaying("soundFan");

  if (!isPlaying) {
    // If not playing, start playing and change the icon color
    playAudiosByIdsWithVolume(0.1, "soundCoffee");
    playAudiosByIdsWithVolume(1.0, "soundKeyboard");
    playAudiosByIdsWithVolume(1.0, "soundFan");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    // If playing, stop the audio and toggle back the icon color
    stopAudiosByIds("soundCoffee", "soundKeyboard", "soundFan");
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

function pwriting() {
  const icon = document.querySelector("#writing i");

  // Check if the audio is currently playing
  const isPlaying = isAudioPlaying("soundRain") || isAudioPlaying("soundFire");

  if (!isPlaying) {
    // If not playing, start playing and change the icon color
    playAudiosByIdsWithVolume(0.7, "soundFire");
    playAudiosByIdsWithVolume(0.3, "soundRain");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    // If playing, stop the audio and toggle back the icon color
    stopAudiosByIds("soundRain", "soundFire");
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

function punderwaterlab() {
  const icon = document.querySelector("#underwaterlab i");

  // Check if the audio is currently playing
  const isPlaying =
    isAudioPlaying("soundFan") ||
    isAudioPlaying("soundunderwater") ||
    isAudioPlaying("soundSpace") ||
    isAudioPlaying("soundKeyboard");

  if (!isPlaying) {
    // If not playing, start playing and change the icon color
    playAudiosByIdsWithVolume(0.8, "soundFan");
    playAudiosByIdsWithVolume(1.0, "soundUnderwater");
    playAudiosByIdsWithVolume(0.1, "soundSpace");
    playAudiosByIdsWithVolume(0.8, "soundKeyboard");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    // If playing, stop the audio and toggle back the icon color
    stopAudiosByIds(
      "soundFan",
      "soundUnderwater",
      "soundSpace",
      "soundKeyboard"
    );
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

function pstudying() {
  const icon = document.querySelector("#studying i");

  const isPlaying =
    isAudioPlaying("soundRain") ||
    isAudioPlaying("soundFire") ||
    isAudioPlaying("soundForst");

  if (!isPlaying) {
    // If not playing, start playing and change the icon color
    playAudiosByIdsWithVolume(0.9, "soundFire");
    playAudiosByIdsWithVolume(0.6, "soundRain");
    playAudiosByIdsWithVolume(0.4, "soundForst");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    // If playing, stop the audio and toggle back the icon color
    stopAudiosByIds("soundRain", "soundFire", "soundForst");
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

function psleep() {
  const icon = document.querySelector("#sleep i");

  const isPlaying =
    isAudioPlaying("soundWaterstream") ||
    isAudioPlaying("soundForst") ||
    isAudioPlaying("soundLeaves");

  if (!isPlaying) {
    // If not playing, start playing and change the icon color
    playAudiosByIdsWithVolume(0.3, "soundWaterstream");
    playAudiosByIdsWithVolume(0.7, "soundForst");
    playAudiosByIdsWithVolume(0.7, "soundLeaves");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    // If playing, stop the audio and toggle back the icon color
    stopAudiosByIds("soundWaterstream", "soundLeaves", "soundForst");
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

const relaxbutton = document.querySelector("#trainjourney button");
relaxbutton.addEventListener("click", ptrainjourney);

const readbutton = document.querySelector("#writing button");
readbutton.addEventListener("click", pwriting);

const writebutton = document.querySelector("#office button");
writebutton.addEventListener("click", poffice);

const focusbutton = document.querySelector("#underwaterlab button");
focusbutton.addEventListener("click", punderwaterlab);

const studyingbutton = document.querySelector("#studying button");
studyingbutton.addEventListener("click", pstudying);

const sleepingbutton = document.querySelector("#sleep button");
sleepingbutton.addEventListener("click", psleep);

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

let isTabMuted = false;
function toggleMuteTab() {
  const muteButton = document.querySelector(".nav .muting");
  const icon = muteButton.querySelector("i");
  const allAudioElements = document.querySelectorAll("audio");
  allAudioElements.forEach((audio) => {
    audio.muted = !audio.muted;
  });

  isTabMuted = !isTabMuted;

  if (isTabMuted) {
    console.log("Tab Muted! 🔇");
    icon.style.color = "rgba(255, 255, 255, 1)";
  } else {
    console.log("Tab Unmuted! 🔊");
    icon.style.color = "rgba(255, 255, 255, 0.5)";
  }
}

const mute = document.querySelector(".muting");
mute.addEventListener("click", toggleMuteTab);
