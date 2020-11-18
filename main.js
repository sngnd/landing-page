var video = document.getElementById("bg-video");
var btn = document.getElementById("bg-video-button");

function clickedButton() {
    $(".header__play-button").toggleClass("header__play-button_paused");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}