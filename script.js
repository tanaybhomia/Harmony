function transitionGradient() {
  let hue = 200;

  // Set interval for smooth transition
  const intervalId = setInterval(() => {
    hue = (hue + 1) % 360;
    const color = `hsl(${hue}, 100%, 50%)`; // Use HSL color format for smooth transitions

    document.body.style.background = color;
  }, 1000); // Change color every 30 milliseconds (adjust as needed)
}

// Call the function when the page loads
window.onload = transitionGradient;
