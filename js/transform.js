/*function rotateImag() {
    let img = document.getElementById("imgus");
    img.style.transform="rotate(360deg)";
}
function translateImag() {
  let img = document.getElementById("imgus");
  img.style.transform="translatex(200px)";
}*/

var amount = 360;
var initial = 0;
document.getElementById("imgus").addEventListener("click", function() {
  initial += amount;
  document.getElementById("imgus").style.transform = "rotate(" + initial + "deg)"
})