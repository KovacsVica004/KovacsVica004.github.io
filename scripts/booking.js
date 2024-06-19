// Sample data for demonstration
let freeAppointments = [
  { time: '09:00 AM', booked: false },
  { time: '10:00 AM', booked: true },
  { time: '11:00 AM', booked: false },
  // Add more time slots as needed
];

// Function to populate the calendar view with free appointments
function populateCalendar() {
  let calendarDiv = document.getElementById('calendar');
  calendarDiv.innerHTML = '<h2>Itt lesz a naptárnézet a szabad időpontokról.</h2>';
  let ul = document.createElement('ul');
  freeAppointments.forEach(appointment => {
      if (!appointment.booked) {
          let li = document.createElement('li');
          li.textContent = appointment.time;
          ul.appendChild(li);
      }
  });
  calendarDiv.appendChild(ul);
}

// Function to populate the booking section dropdown
function populateTimeSlots() {
  let select = document.getElementById('time-slots');
  freeAppointments.forEach(appointment => {
      if (!appointment.booked) {
          let option = document.createElement('option');
          option.value = appointment.time;
          option.textContent = appointment.time;
          select.appendChild(option);
      }
  });
}

// Event listener for booking button
document.getElementById('book-btn').addEventListener('click', function() {
  let selectedTime = document.getElementById('time-slots').value;
  // Logic to book the selected time slot
  alert('Booking confirmed for ' + selectedTime);
});

// Function to display doctor's interface
function showDoctorInterface() {
  document.getElementById('doctor-interface').style.display = 'block';
  // Logic to fetch and display booked appointments
  let appointmentsList = document.getElementById('appointments-list');
  appointmentsList.innerHTML = '<h3>Booked Appointments</h3>';
  freeAppointments.forEach(appointment => {
      if (appointment.booked) {
          let li = document.createElement('li');
          li.textContent = appointment.time + ' (Booked)';
          appointmentsList.appendChild(li);
      }
  });
}

// Event listener for modify button
document.getElementById('modify-btn').addEventListener('click', function() {
  // Logic to modify appointment
  alert('Modify appointment functionality to be implemented.');
});

// Event listener for add button
document.getElementById('add-btn').addEventListener('click', function() {
  // Logic to add new appointment
  alert('Add new appointment functionality to be implemented.');
});

// Event listener for delete button
document.getElementById('delete-btn').addEventListener('click', function() {
  // Logic to delete appointment
  alert('Delete appointment functionality to be implemented.');
});

// Initialize the page
populateCalendar();
populateTimeSlots();
