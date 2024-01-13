# Harmony 🎶

Welcome to Harmony, your personalized ambient soundscape experience. 🌌

![image](https://github.com/tanaybhomia/Harmony/assets/71910027/15244f6b-7547-4a26-a09d-60e06b0aa4a6)

## Overview 🌐

Harmony is a web application that allows users to create and enjoy customized ambient soundscapes. Whether you need background noise for focus, relaxation, or creativity, Harmony has you covered. 🎧

## Features 🚀

### Ambient Sounds 🌧️

Harmony provides a variety of ambient sounds to choose from, including rain, thunder, wind, forest, water stream, fire, coffee shop, train, fan, white noise, airplane, cityscape, raining in tent, space, whale, and night sounds. 🌈

### Preset Playlists 🎵 [Still working on it]
Front end is done working on backend.

- **Productivity:** Designed to enhance your focus and productivity. 🚀
- **Read:** Ideal for creating a calming atmosphere for reading. 📖
- **Write:** Set the mood for a creative writing session. 🖋️
- **Focus:** A combination of sounds to help improve concentration. 🎯

### Customizable Presets ⚙️

- Each preset allows you to configure specific sounds and their volumes.
- Tailor presets to your liking by adjusting the volume for each individual sound. 🎚️

### Timer and Clock ⏰

- Keep track of time with the built-in timer and clock.
- Set your preferred intervals for focused work or relaxation. ⌛

### User Controls 🎮

- Mute the ambient sounds with a single click. 🔇
- Access your GitHub profile with the user-friendly interface. 👤

## Usage 🌐

1. Clone the Harmony repository.
2. Open the `index.html` file in your preferred web browser.
3. Explore ambient sounds, presets, and customize your experience. 🚀

## How to Customize Presets ⚙️

1. Locate the `script2.js` file.
2. Update the `data-audioIds` and `data-[audioId]Volume` attributes for each preset in the HTML.
3. Adjust the sound IDs and volumes to create your personalized presets.

```html
<!-- Example for the "Relax" preset -->
<div class="preset" id="relax" data-audioIds="soundRain,soundFire" data-soundrainvolume="0.5" data-soundfirevolume="0.7">
  <button data-audio-id="relax">
    <div class="icon rain">
      <i class="fi fi-tr-brain-circuit"></i>
    </div>
  </button>
  <!-- No slider inside the preset div -->
</div>
```

## Author 🧑🏻‍💻 
[Tanay Bhomia](https://github.com/tanaybhomia)

## License 📃
This project is licensed under MIT License 

## Need Help on
- **Presets** - I want to implement the presets feature, Do read the codebase even advice would be good

_PSA ChatGPT helped me a lot in this project . . . ._
