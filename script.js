function myFunction() {
    var x = document.getElementById("menu-bar");
    if (x.className === "nev") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
