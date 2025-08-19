document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  const nowPlaying = document.getElementById('nowPlaying');

  const moodTracks = {
    happy: {
      name: "Happy Vibes",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    sad: {
      name: "Sad & Slow",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    relaxed: {
      name: "Relax & Chill",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    energetic: {
      name: "Energy Boost",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    }
  };

  const buttons = document.querySelectorAll('.mood-buttons button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const mood = button.dataset.mood;
      const track = moodTracks[mood];

      nowPlaying.textContent = `🎶 Now Playing: ${track.name}`;
      audioPlayer.src = track.url;
      audioPlayer.play();
    });
  });
});
