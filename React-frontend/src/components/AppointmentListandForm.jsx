
import AppointmentItem from './AppointmentItem';
function AppointmentListAndForm({
    appointments,
    handleFormSubmit,
    handlePatientNameChange,
    handleDoctorNameChange,
    patientName,
    doctorName,
    handleDeleteAppointment,
    newestAppointment,
    appointmentId
  }) {
    return (
      <div className="appointment-container">
        <div className="form-container">
          <h2>Appointment Form</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Patient Name:</label>
              <input
                type="text"
                value={patientName}
                placeholder="Your name.."
                onChange={handlePatientNameChange}
              />
            </div>
            <div>
              <label>Doctor Name:</label>
              <input
                type="text"
                value={doctorName}
                placeholder="Doctor of your choice"
                onChange={handleDoctorNameChange}
              />
            </div>
            <button type="submit">Add Appointment</button>
          </form>
        </div>
  
        <div id="new-appointment" className="appointment-details">
          <h2>Your Appointment</h2>
          <p>Patient Name: {newestAppointment?.patient_name}</p>
          <p>Doctor Name: {newestAppointment?.doctor_name}</p>
          <p>Appointment Date: {newestAppointment?.appointment_date}</p>
          <p>Duration: {newestAppointment?.duration}</p>
          <button onClick={() => handleDeleteAppointment(appointmentId)}>
            Cancel Appointment
          </button>
        </div>
  
        <div className="appointment-list">
          <h3>Appointments</h3>
          {appointments.map((appointment, index) => (
            <AppointmentItem key={index} appointment={appointment} />
          ))}
        </div>
      </div>
    );
  }
  
  export default AppointmentListAndForm;

