const form = document.getElementById("myForm1");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  window.location.href = "influencer_dashboard.html"; // redirect to the doctor dashboard
});