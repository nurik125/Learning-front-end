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
      "<h1>To-Dos</h1> <span>(returned)</span>";
  }
  k++;
}

const el = document.getElementsByTagName("li");
const ul = document.querySelector("ul");
const input = document.getElementById("UlName");

function Display_length() {
  const p = document.querySelector("p");
  // el[1].innerHTML = `<h1>${el[0].innerHTML}</h1>`;
  p.innerHTML = `Length   --->    ${el.length}`;
}

function AddUl() {
  if (el.length < 14) {
    ul.innerHTML += "<li></li>"
  }
  else { alert("The limit of ul's has been exceeded"); }
}

function displayItem() {
  const el1 = document.getElementsByClassName("urgent");
  const p = document.querySelector("p.mainp");
  p.innerText = el1[0].innerHTML;
}

// const el2 = document.querySelector("script")
// console.log(el2.src)

function addUlName() {
  if (el.length < 14) {
    ul.innerHTML += `<li>${input.value}</li>`;
  } else {
    alert("The limit of ul's has been exceeded");
  }
  
}


const img = document.getElementById("namename");
img.src = "https://mimo.app/r/cat.png";
const a = document.querySelector("a");
a.href = "https://www.youtube.com/";
console.log();

function AttributeChange() {
  input.type = "checkbox";
  input.style.width = "300px";
}


