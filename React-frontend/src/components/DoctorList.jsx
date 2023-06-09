import React from 'react';
import DoctorItem from './DoctorItem';

function DoctorList({ doctors} ) {
  return (
    <div>
        <h1>Our Doctors</h1>
      {doctors.map((doctor) => (
        <DoctorItem key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}

export default DoctorList;