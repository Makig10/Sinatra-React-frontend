import PatientItem from "./PatientItem";
function PatientList({ patients }) {
    return (
<div className="patient-list">
      <h1>Our Patients</h1>
      <div className="patient-grid">
        {patients.map((patient) => (
          <PatientItem key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
    );
  }
  
  export default PatientList;