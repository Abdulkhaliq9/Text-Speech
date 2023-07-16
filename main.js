// ============================toggle play button=======================
let isPlaying = false; // Flag to track the playing state
const playButton = document.querySelector('button');

playButton.addEventListener('click', () => {
  if (!isPlaying) {
    // Start playing
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
    isPlaying = true;
    playButton.textContent = 'Stop';
  } else {
    // Stop playing
    window.speechSynthesis.cancel();
    isPlaying = false;
    playButton.textContent = 'Play';
  }
  speech.addEventListener('end', () => {
    isPlaying = false;
    playButton.textContent = 'Play';
});
})


// ============================ text to speech converter====================
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value];
});
