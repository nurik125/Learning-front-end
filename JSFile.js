// const like = document.getElementById("AddLike");

// like.addEventListener(
//     "click",
//     () => {

//     alert("Click");
//   },
//   true
//   );

//   const btn = document.getElementById("button");

//   btn.addEventListener(
//     "dblclick",
//     a,
//   );

//   function a(){
//     alert("double-click")
//   }

// const input1 = document.getElementById("input1");

// input1.addEventListener("change", () => {
//   document.getElementsByClassName("Yes").innerHTML = "Hi1";
// });
let k = 0;

function change() {
  if (k % 2 == 0) {
    document.querySelector("header").innerHTML = "<h1>Changed</h1>";
  } else {
    document.querySelector("header").innerHTML =
      "<h1>To-Dos</h1> <p>(returned)</p>";
  }
  k++;
}

const el = document.getElementsByTagName("li");
function Display_length() {
  const p = document.querySelector("p");
  // el[1].innerHTML = `<h1>${el[0].innerHTML}</h1>`;
  p.innerHTML = `Length   --->    ${el.length}`;
}

function AddUl() {
  if (el.length < 14) {
    const ul = document.querySelector("ul");
    ul.innerHTML += "<li></li>"
  }
  else { alert("The limit of ul's has been exceeded"); }
}
