import { useState } from 'react';

function AppointmentListAndForm({ appointments }) {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const handlePatientNameChange = (e) => {
    setPatientName(e.target.value);
  };

  const handleDoctorNameChange = (e) => {
    setDoctorName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a new appointment object
    const newAppointment = {
      name: patientName,
      doctor_name: doctorName,
    };

    // Send POST request to book appointment
    fetch('/book_appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAppointment),
    })
      .then((response) => response.json())
      .then((appointment) => {
        // Add the new appointment to the list
        setAppointments([...appointments, appointment]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // Reset input fields
    setPatientName('');
    setDoctorName('');
  };

  return (
    <div>
      <h2>Appointment List</h2>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            value={patientName}
            onChange={handlePatientNameChange}
          />
        </div>

        <div>
          <label>Doctor Name:</label>
          <input
            type="text"
            value={doctorName}
            onChange={handleDoctorNameChange}
          />
        </div>

        <button type="submit">Add Appointment</button>
      </form>

      <h3>Appointments:</h3>
      <div>
        {appointments.map((appointment, index) => (
          <AppointmentItem key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  );
}

export default AppointmentListAndForm;