// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelect = document.querySelector("#horn-select");
  const hornImage = document.querySelector("#expose img");
  const volumeSlider = document.querySelector("#volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const audio = document.querySelector("#expose audio");
  const button = document.querySelector("#expose button");

  const jsConfetti = new JSConfetti();

  //  Horn change
  hornSelect.addEventListener("change", () => {
    const value = hornSelect.value;

    if (value === "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } 
    else if (value === "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } 
    else if (value === "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  //  Volume control
  function updateVolume() {
    const volume = Number(volumeSlider.value);

    audio.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  }

  volumeSlider.addEventListener("input", updateVolume);

  //  Play button
  button.addEventListener("click", () => {
    audio.play();

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  // initialize
  updateVolume();
}
