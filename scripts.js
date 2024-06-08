// Variable to store account type
var accountType = '';

// Event listener for doctor button
document.getElementById('doctor-button').addEventListener('click', function() {
  accountType = 'doctor';
});

// Event listener for patient button
document.getElementById('patient-button').addEventListener('click', function() {
  accountType = 'patient';
});

// Event listener for login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form from submitting normally

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // replace with your actual validation logic
  if (email === '' || password === '') {
    alert('Please enter both email and password');
  } else {
    // replace with your actual authentication logic
    if (accountType === 'doctor' && email && password ) {
      window.location.href = 'doctor_dashboard.html';
    } else if (accountType === 'patient' && email  && password) {
      window.location.href = 'patient_dashboard.html';
    } else {
      alert('Invalid email or password');
    }
  }
});



