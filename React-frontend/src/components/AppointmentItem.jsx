function AppointmentItem({ appointment }) {
    return (
      <div>
        <h3>ID: {appointment.id}</h3>
        <p>Doctor ID: {appointment.doctor_id}</p>
        <p>Patient ID: {appointment.patient_id}</p>
        <p>Appointment Date: {appointment.appointment_date}</p>
        <p>Duration: {appointment.duration}</p>
        <p>Created At: {appointment.created_at}</p>
        <p>Updated At: {appointment.updated_at}</p>
        <p>Patient Name: {appointment.patient_name}</p>
        <p>Doctor Name: {appointment.doctor_name}</p>
      </div>
    );
  }
  
  export default AppointmentItem;

