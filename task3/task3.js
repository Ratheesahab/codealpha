const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

const tracks = [
    {
        title: "Track 1",
        artist: "Artist 1",
        src: "track1.mp3"
    },
    {
        title: "Track 2",
        artist: "Artist 2",
        src: "track2.mp3"
    },
    {
        title: "Track 3",
        artist: "Artist 3",
        src: "track3.mp3"
    }
];

let currentTrackIndex = 0;

// Load the current track
function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    audio.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
}

// Play or pause the track
function playPauseTrack() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = '❚❚'; // Change to pause icon
    } else {
        audio.pause();
        playButton.textContent = '►'; // Change to play icon
    }
}

// Go to the next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playPauseTrack();
}

// Go to the previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playPauseTrack();
}

// Initial load
loadTrack(currentTrackIndex);
