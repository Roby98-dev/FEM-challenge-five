const facebook = document.getElementById("facebook");
const pinterest = document.getElementById("pinterest");
const instagram = document.getElementById("instagram");

const dayText = document.getElementById("day-text");
const hoursText = document.getElementById("hours-text");
const minutesText = document.getElementById("minutes-text");
const secondsText = document.getElementById("seconds-text");

let day = 8;
let hours = 23;
let minutes = 55;
let seconds = 41;

setInterval(() => {
	if(seconds === 0){
		seconds = 59;
		if(minutes === 0){
			minutes = 59;
			if(hours === 0){
				hours = 24;
				day--;
			}
			else{
				hours--;
			}
		}
		else{
			minutes--;
		}
	}
	else{
		seconds--;
	}
	dayText.innerHTML = day < 10 ? `0${day}` : day;
	hoursText.innerHTML = hours < 10 ? `0${hours}` : hours;
	minutesText.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
	secondsText.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

facebook.parentNode.addEventListener("mouseenter", () => {
	facebook.setAttribute("fill", "#FB5E84");
});

facebook.parentNode.addEventListener("mouseleave", () => {
	facebook.setAttribute("fill", "#8385A9");
})

pinterest.parentNode.addEventListener("mouseenter", () => {
	pinterest.setAttribute("fill", "#FB5E84");
});

pinterest.parentNode.addEventListener("mouseleave", () => {
	pinterest.setAttribute("fill", "#8385A9");
})

instagram.parentNode.addEventListener("mouseenter", () => {
	instagram.setAttribute("fill", "#FB5E84");
})

instagram.parentNode.addEventListener("mouseleave", () => {
	instagram.setAttribute("fill", "#8385A9");
})