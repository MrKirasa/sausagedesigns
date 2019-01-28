var firstclick = true;
function anim(a) {
	a.classList.toggle("rotate");
}
function openit() {
    document.getElementById("navbox").style.width = "240px";
}
function closeit() {
    document.getElementById("navbox").style.width = "0";
}
function trigger() {
	if (firstclick) {
		openit()
		firstclick = false;
	} else {
		closeit()
		firstclick = true;
	}
}