window.onload = function () {


let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length-1)];
  let randomAction = action[Math.floor(Math.random() * action.length-1)];
  let randomWhat = what[Math.floor(Math.random() * what.length-1)];
  let randomWhen = when[Math.floor(Math.random() * when.length-1)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

document.getElementById("generateButton").addEventListener("click", function() {  
  document.getElementById("excuse").innerHTML = generateExcuse();
});
};


  