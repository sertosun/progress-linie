function myFunc() {
  let number = document.getElementById("number").value;
  number = parseInt(number);
  let progress = document.getElementById("progress");
  result = progress.style.width = number + "px";
  progress.innerHTML = result;

  console.log(number);
}
