/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.boxShadow = "0px -12px 20px 20px #242323";
  } else {
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("navbar").style.boxShadow = "0px -12px 20px 20px #202020";
  }
  prevScrollpos = currentScrollPos;
}