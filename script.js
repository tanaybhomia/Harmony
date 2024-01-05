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
