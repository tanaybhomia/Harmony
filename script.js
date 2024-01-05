function transitionGradient() {
  let hue = 0;
  let increasing = true;

  // Set interval for smooth transition
  const intervalId = setInterval(() => {
    if (increasing) {
      hue = (hue + 1) % 360;
      if (hue === 0) {
        increasing = !increasing; // Start decreasing when reaching the maximum hue
      }
    } else {
      hue = (hue - 1 + 360) % 360;
      if (hue === 255) {
        increasing = !increasing; // Start increasing when reaching the minimum hue
      }
    }

    const saturation = 50; // Adjust saturation (0 to 100)
    const lightness = 60; // Adjust lightness (0 to 100)

    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`; // Use HSL color format for smooth transitions

    document.body.style.background = color;
  }, 30); // Change color every 30 milliseconds (adjust as needed)
}
// Call the function when the page loads
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

// For Buttons to play audio
// Your existing JavaScript code...

const noiseButtons = document.querySelectorAll(".noise button");

noiseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const audioId = button.dataset.audioId;
    const audioElement = document.getElementById(audioId);
    const sliderDiv = button.nextElementSibling; // Assuming the slider div is the next sibling of the button

    if (audioElement) {
      audioElement.play();

      // Check if a slider already exists, if not, create and append it
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
    }
  });
});
