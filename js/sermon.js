const movieList = document.querySelector("#movies-list");
const moviesBox = movieList.querySelectorAll(".movies-box");
const searchBox  = document.querySelector("#input");

/*searchBox.onkeyup = function() {
const filter = searchBox.value.toUpperCase();
let i, a, textValue;

for (i=0; i < moviesBox.length; i++){
a = moviesBox[i].querySelectorAll(".fruit_name")[0];
textValue = a.textContent ||a.innerText
if(textValue.toUpperCase().indexOf(filter) > -1){ 
moviesBox[i].style.display = "";
console.log("yes")
console.log(filter)
}else{
  moviesBox[i].style.display = "none";
  console.log("no")
}
}

}
*/

/*
SOLUTION TWO: USING forEach() loop and addEventListener


document.addEventListener("keyup",liveSearch);
function liveSearch(e) {
  const filter = searchBox.value.toUpperCase();
  let i, a, textValue;
  if(!e.target.matches("#input")) return false;
      moviesBox.forEach(function (box, i){
      a = moviesBox[i].querySelectorAll(".fruit_name")[0];
      textValue = a.textContent || a.innerText
      if(textValue.toUpperCase().indexOf(filter) > -1){ 
      moviesBox[i].style.display = "";
}else{
      moviesBox[i].style.display = "none";
}
})
}

*/ 





/*
SOLUTION THREE: USING forEach() loop and addEventListener and Ternary Operator
*/ 
document.addEventListener("keyup",liveSearch);
function liveSearch(e) {
  const filter = searchBox.value.toUpperCase();
  let i, a, textValue;
  if(!e.target.matches("#input")) return false;
      moviesBox.forEach(function (box, i){
      a = moviesBox[i].querySelectorAll(".fruit_name")[0];
      textValue = a.textContent || a.innerText
      textValue.toUpperCase().indexOf(filter) > -1 ? moviesBox[i].style.display = "":moviesBox[i].style.display = "none";
})
}

