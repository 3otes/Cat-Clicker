var cat = document.getElementById('project-img');

let moveCounter = 0;


cat.addEventListener("click", function(){
  moveCounter += 1;
  document.getElementById('clicks').textContent = moveCounter;
}, false);
