document.getElementById("mostraAside").addEventListener("click", function () {
  const aside = document.getElementById("myAside");
  let section = document.getElementById("sec");

  if (aside.style.display === "none" || aside.style.display === "") {
    aside.style.display = "block";
    section.style.display = "none";
  } else {
    aside.style.display = "none";
    section.style.display = "block";
  }
});
