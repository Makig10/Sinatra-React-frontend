import React from 'react';
import DoctorItem from './DoctorItem';

function DoctorList({ doctors} ) {
  return (
<>
    <h1>Our Doctors</h1>
    <div className="doctor-list">
       {doctors.map((doctor) => (
        <DoctorItem key={doctor.id} doctor={doctor} />
      ))}
    </div>
</>
  );
}

export default DoctorList;