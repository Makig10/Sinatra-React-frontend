
import AppointmentItem from './AppointmentItem';


function AppointmentListAndForm(
    { appointments ,handleFormSubmit
        ,handlePatientNameChange,handleDoctorNameChange
        ,patientName,doctorName,handleDeleteAppointment,
       
    }
    ) 
    {
        const newestAppointment = appointments.length > 0 ? appointments[appointments.length - 1] : null;
        const appointmentId = newestAppointment ? newestAppointment.id : null;
      
    

  return (
    <div>
      <h2>Appointment List</h2>

      <form onSubmit={handleFormSubmit}>
        <h1>Make an appointment</h1>
        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            value={patientName}
            placeholder="your name.."
            onChange={handlePatientNameChange}
          />
        </div>
        <div>
          <label>Doctor Name:</label>
          <input
            type="text"
            value={doctorName}
            placeholder="doctor of your choice"
            onChange={handleDoctorNameChange}
          />
        </div>
        <button type="submit">Add Appointment</button>
      </form>



        <div id="newAppointment"
             key={appointmentId}>
          <h1>Your Appointment form</h1>
          <p>Patient Name: {newestAppointment?.patient_name}</p>
          <p>Doctor Name: {newestAppointment?.doctor_name}</p>
          <p>Appointment Date: {newestAppointment?.appointment_date}</p>
          <p>Duration: {newestAppointment?.duration}</p>
          <button onclick={handleDeleteAppointment}>Cancel Appointment</button>
        </div>

      

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