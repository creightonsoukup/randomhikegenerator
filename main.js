var niceArray = [
   "Mohawk Lakes, Breckenridge CO",
   "Middle Lake, New York Moutain Range CO",
   "Blue Lake, Rawahs CO",
   "Dream Canyon, Boulder CO",
   "Devils Causeway, Flat Tops Wilderness CO",
   "Hahn's Peak, Routt National Forrest CO"
   ];

function generate() {
  return Math.floor(Math.random()*niceArray.length);
}

console.log(generate());

$("button").on('click', function() {
  $("#result h1").html(niceArray[generate()])
})
