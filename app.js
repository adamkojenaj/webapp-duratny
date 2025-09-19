document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const response = document.getElementById("response");

  if (name.trim() === "") {
    response.textContent = "Prosím, zadaj svoje meno.";
    response.style.color = "red";
  } else {
    response.textContent = `Ahoj, ${name}! Vitaj na stránke 🚀`;
    response.style.color = "green";
  }
});

