window.addEventListener("DOMContentLoaded", init);

function init() {
  const voiceSelect = document.querySelector("#voice-select");
  const textArea = document.querySelector("#text-to-speak");
  const button = document.querySelector("button");
  const face = document.querySelector("img");

  let voices = [];

  // 🧠 Load voices safely (handles async browser loading)
  function loadVoices() {
    voices = speechSynthesis.getVoices();

    // If voices not ready yet, try again later
    if (!voices || voices.length === 0) return;

    // Keep default option
    voiceSelect.innerHTML = `
      <option value="select" disabled selected>Select Voice:</option>
    `;

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // 🚀 IMPORTANT: browsers load voices asynchronously
  speechSynthesis.onvoiceschanged = loadVoices;

  // also try immediately (some browsers already have them)
  loadVoices();

  // 🗣️ Speak text when button clicked
  button.addEventListener("click", () => {
    const text = textArea.value.trim();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    // set selected voice
    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // 🙂 face animation
    utterance.onstart = () => {
      face.src = "assets/images/smiling-open.png";
    };

    utterance.onend = () => {
      face.src = "assets/images/smiling.png";
    };

    speechSynthesis.speak(utterance);
  });
}
