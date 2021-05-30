document.getElementById('slider_left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;

function autoSlider() {
	timer = setTimeout(sliderLeft, 5000);
}

function sliderLeft() {
	var band = document.getElementById('slider_inner');
	left = left - 1280;
	if (left < -3820) {
		left = 0;
		clearTimeout(timer);
	}
	band.style.left = left +'px';
	autoSlider();
}

window.onscroll = function showHeader() {

	var header = document.querySelector('#header');
	if(window.pageYOffset > 0) {
		header.classList.add('header_fixed');
	} else {
		header.classList.remove('header_fixed');
	}

}