import React from 'react';
import DoctorItem from './DoctorItem';

function DoctorList({ doctors} ) {
  return (
    <div className="doctor-list">
    <h1>Our Doctors</h1>
    <div className="doctor-grid">
      {doctors.map((doctor) => (
        <DoctorItem key={doctor.id} doctor={doctor} />
      ))}
    </div>
  </div>
  );
}

export default DoctorList;