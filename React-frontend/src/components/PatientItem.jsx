function PatientItem({ patient }) {
    return (
      <div key={patient.id}>
        <h3>ID: {patient.id}</h3>
        <p>Name: {patient.name}</p>
        <p>Age: {patient.age}</p>
        <p>Condition: {patient.condition}</p>
        <p>Sex: {patient.sex}</p>
        <p>Created At: {patient.created_at}</p>
        <p>Updated At: {patient.updated_at}</p>
      </div>
    );
  }
  
  export default PatientItem;