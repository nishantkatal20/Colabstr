const form = document.getElementById("myForm2");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  window.location.href = "buisness_dashboard.html"; // redirect to the doctor dashboard
});