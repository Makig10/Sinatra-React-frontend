import PatientItem from "./PatientItem";
function PatientList({ patients }) {
    return (
      <div>
        <h1>Our Patients</h1>
        {patients.map((patient) => (
          <PatientItem key={patient.id} patient={patient} />
        ))}
      </div>
    );
  }
  
  export default PatientList;