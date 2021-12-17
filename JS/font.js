
var h1 = document.querySelectorAll("h1");
var h2 = document.querySelector("h2");
// document.querySelector("button").addEventListener("click", function(){
//     if (document.querySelector("button").innerHTML == "Fancy Font"){
//       console.log("Change to fancy font");
//       h1.style.fontFamily ='lobster, Tahoma, Geneva, Verdana, sans-serif';
//       h2.style.fontFamily ='lobster, Tahoma, Geneva, Verdana, sans-serif';
//       document.querySelector("button").innerHTML = "Simple Font";
//     }
//     else{
//       console.log("Change to simple font");
//       h1.style.fontFamily = "Book Antiqua, Tahoma, Geneva, Verdana, sans-serif";
//       h2.style.fontFamily = "Book Antiqua, Tahoma, Geneva, Verdana, sans-serif";
//       document.querySelector("button").innerHTML = "Fancy Font";
//     }
// });
document.querySelector("button").addEventListener("click", function(){
    if (document.querySelector("button").innerHTML == "Fancy Font"){
        var i;
        for (i = 0; i < h1.length; i++) {
          h1[i].style.fontFamily ='lobster, Tahoma, Geneva, Verdana, sans-serif';
        }
    }
    else{
        var i;
        for (i = 0; i < h1.length; i++) {
          h1[i].style.fontFamily ="Book Antiqua, Tahoma, Geneva, Verdana, sans-serif";
        }}
});