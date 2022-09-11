/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.boxShadow = "0px -12px 20px 20px rgb(36, 35, 35)";
  } else {
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("navbar").style.boxShadow = "0px -12px 20px 20px #1d1c1c";
  }
  prevScrollpos = currentScrollPos;
}



/* Animation only when page is loaded */
/*
window.addEventListener("load", () => {
  document.querySelector("body").classList.add("loaded");
})
*/
