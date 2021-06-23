function toggleDisplay1 () {
  var x = document.getElementById("mixed-messages");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleDisplay2 () {
  var x = document.getElementById("excursion");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleDisplay3 () {
  var x = document.getElementById("rugby-club");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


const button1 = document.getElementById("toggle1");
button1.onclick = toggleDisplay();

const button2 = document.getElementById("toggle2");
button2.onclick = toggleDisplay();


const button3 = document.getElementById("toggle3");
button3.onclick = toggleDisplay();


