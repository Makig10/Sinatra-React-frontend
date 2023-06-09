import React from 'react';
   /*  <p>ID: {doctor.id}</p>
      <p>Created At: {doctor.created_at}</p>
      <p>Updated At: {doctor.updated_at}</p>*/
function DoctorItem({ doctor }) {
  return (
    <div key={doctor.id}>
      <h3>Name: {doctor.name}</h3>
      
      <p>Rating: {doctor.rating}</p>
      <p>Sex: {doctor.sex}</p>
      
    </div>
  );
}

export default DoctorItem;