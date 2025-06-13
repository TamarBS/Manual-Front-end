// Ejemplos CSS display contents
function hideFather() { 
  document.getElementById("display-contents-example-padre").style.display = "contents"; 
  setTimeout(showParents, 3000);
}
function hideSon() { 
  document.getElementById("display-contents-example-hijo").style.display = "contents"; 
  setTimeout(showParents, 3000);
}
function hideGrandson() { 
  document.getElementById("display-contents-example-nieto").style.display = "contents"; 
  setTimeout(showParents, 3000);
}
function showParents() {
  document.getElementById("display-contents-example-padre").style.display = "block";
  document.getElementById("display-contents-example-hijo").style.display = "block";
  document.getElementById("display-contents-example-nieto").style.display = "block";
}