function colorize() {
  // let tableElements = document.querySelectorAll("tr:nth-of-type(2n) td");

  //tableElements.forEach((x) => {
  //x.style.backgroundColor = "teal";
  //});
  let tableElements = document.getElementsByTagName("tr");
  for (let i = 0; i < tableElements.length; i++) {
    if (i % 2 != 0) {
      tableElements[i].style.backgroundColor = "teal";
    }
  }
}
