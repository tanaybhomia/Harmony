# Harmony 🎶

Welcome to Harmony, your personalized ambient soundscape experience. 🌌

![image](https://github.com/tanaybhomia/Harmony/assets/71910027/bc100494-7e14-4fe1-8310-5feb1b962939)


## Overview 🌐

Harmony is a web application that allows users to create and enjoy customized ambient soundscapes. Whether you need background noise for focus, relaxation, or creativity, Harmony has you covered. 🎧

## Features 🚀

### Ambient Sounds 🌧️

Harmony provides a variety of ambient sounds to choose from, including rain, thunder, wind, forest, water stream, fire, coffee shop, train, fan, white noise, airplane, cityscape, raining in tent, space, whale, and night sounds. 🌈

### Preset Playlists 🎵 

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

## Usage 🌐

### Cloning Repo
1. Clone the Harmony repository.
2. Open the `index.html` file in your preferred web browser.
3. Explore ambient sounds, presets, and customize your experience. 🚀

### Using Netify
1. Just go to [Harmony](harmonyambience.netlify.app)

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

OKAY , THANK YOU. THE PROJECT HAS CLOSED, The project is now taking a lot of time for me and I have to focus on my Final Year Project as well
