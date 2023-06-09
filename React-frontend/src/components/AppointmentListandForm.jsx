import AppointmentItem from "./AppointmentItem";
function AppointmentListAndForm({appointments}){
    const newAppointment = {
        patientName: patientName,
        doctorName: doctorName,
      };
      return(
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
      
  

