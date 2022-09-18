const medApp = () => {
    const track = document.querySelector(".track");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector('.vid-container video');

    const tracks = document.querySelectorAll(".sound-picker button");

    const timeDisplay = document.querySelector(".time-display");
    const timeSelect = document.querySelectorAll(".time-select button");

    const outlineLength = outline.getTotalLength();
    
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    tracks.forEach(track =>{
        track.addEventListener('click', function() {
            track.src = this.getAttribute('data-sound')
            video.src = this.getAttribute('data-video')
            trackStatus(track);
        });
    })

    play.addEventListener("click", () => {
        trackStatus(track);
    });

    timeSelect.forEach(option => {
        option.addEventListener('click', function() {
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
        })
    })

    const trackStatus = track => {
        if (track.paused) {
            track.play();
            video.play();
            play.src = './svg/pause.svg';
        } else {
            track.pause();
            video.pause();
            play.src = './svg/play.svg'
        }
    };

    track.ontimeupdate = () => {
        let currentTime = track.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

        timeDisplay.textContent = `${minutes}:${seconds}`;

        if (currentTime >= fakeDuration) {
            track.pause();
            track.currentTime = 0;
            play.src = './svg/play.svg';
            video.pause();
        } else {
            
        }
    };

};
medApp();