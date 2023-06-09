function PatientItem({ patient }) {
    /*<h3>ID: {patient.id}</h3>
      <p>Created At: {patient.created_at}</p>
      <p>Updated At: {patient.updated_at}</p>*/
    return (
      <div key={patient.id}>
        
        <p>Name: {patient.name}</p>
        <p>Age: {patient.age}</p>
        <p>Condition: {patient.condition}</p>
        <p>Sex: {patient.sex}</p>
        
      </div>
    );
  }
  
  export default PatientItem;