document.addEventListener('DOMContentLoaded', function() {
  const clickHeader = document.querySelector('h1');
  
  clickHeader.addEventListener('click', function() {
    document.body.style.backgroundColor = "white";
  });
});

// Provide a global function so inline onClick="changeBG()" works
window.changeBG = function() {
  document.body.style.backgroundColor = "white";
};
