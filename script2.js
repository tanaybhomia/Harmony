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
  }, 30);
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

function addVolumeSlider(sliderDiv, audioElement) {
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

function playPlaylistAudio(button) {
  const audioId = button.parentElement.querySelector("audio").id;
  const audioElement = document.getElementById(audioId);
  const sliderDiv = button.parentElement.querySelector(".slider");
  const icon = button.querySelector("i");

  if (audioElement) {
    if (audioElement.paused) {
      const existingSlider = sliderDiv.querySelector('input[type="range"]');
      if (!existingSlider) {
        addVolumeSlider(sliderDiv, audioElement);
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

const playlistButtons = document.querySelectorAll(".playlist button");

playlistButtons.forEach((button) => {
  button.addEventListener("click", () => playPlaylistAudio(button));
});

const noiseButtons = document.querySelectorAll(".noise button");

function playNoiseAudio(button) {
  const audioId = button.dataset.audioId;
  const audioElement = document.getElementById(audioId);
  const sliderDiv = button.nextElementSibling;
  const icon = button.querySelector("i");

  if (audioElement) {
    if (audioElement.paused) {
      const existingSlider = sliderDiv.querySelector('input[type="range"]');
      if (!existingSlider) {
        addVolumeSlider(sliderDiv, audioElement);
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

noiseButtons.forEach((button) => {
  button.addEventListener("click", () => playNoiseAudio(button));
});
