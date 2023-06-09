import React from 'react';

function DoctorItem({ doctor }) {
  return (
    <div>
      <h3>Name: {doctor.name}</h3>
      <p>ID: {doctor.id}</p>
      <p>Rating: {doctor.rating}</p>
      <p>Sex: {doctor.sex}</p>
      <p>Created At: {doctor.created_at}</p>
      <p>Updated At: {doctor.updated_at}</p>
      
    </div>
  );
}

export default DoctorItem;