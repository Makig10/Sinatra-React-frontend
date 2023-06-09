import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //routing purpose bruv
import DoctorList from './components/DoctorList'
import PatientList from './components/PatientList';
import Header from './components/Header';
import AppointmentListAndForm from './components/AppointmentListandForm';
import './App.css'

function App() {
  const [doctors,setDoctors] = useState([])
  const [patients, setPatients] = useState([])
  const [appointments, setAppointments] = useState([])
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const handlePatientNameChange = (e) => {
    setPatientName(e.target.value);
  };

  const handleDoctorNameChange = (e) => {
    setDoctorName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a new appointment object
    const newAppointment = {
      name: patientName,
      doctor_name: doctorName,
    };
  
  //setAppointments([...appointments, newAppointment]);
  // Send POST request to book appointment
  fetch('http://localhost:9292/book_appointment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAppointment),
    
  })
  .then((response) => response.json())
  .then((appointment) => {
    // Add the new appointment to the list
    setAppointments([...appointments, appointment]);

    // Reset input fields
    setPatientName('');
    setDoctorName('');
  })
    console.log(newAppointment)

  // Reset input fields =>very nice aspects to be honest
  setPatientName('');
  setDoctorName('');
};
  
  //fetch /
  useEffect(() => {
    fetch('http://localhost:9292/')
    .then(res => res.json())
    .then(doctors => setDoctors(doctors));
    console.log(doctors)
  }, []);

  

  useEffect(() => {
    fetch('http://localhost:9292/all_patients')
    .then(res => res.json())
    .then(patients =>setPatients(patients));
    console.log(patients)
  }, []);

 useEffect(() => {
    fetch('http://localhost:9292/all_appointments')
    .then(res => res.json())
    .then(appointments => setAppointments(appointments));
  }, []);
  
  
   return(
    <>
      
        <Header />
        <Routes>
          <Route 
          path="/doctors" 
          element={<DoctorList doctors={doctors} />} />
          <Route
            path="/patient-list"
            element={<PatientList patients={patients} />}/>
          <Route
            path="/appointment"
            element={<AppointmentListAndForm appointments={appointments} 
            handleFormSubmit={handleFormSubmit}
            handlePatientNameChange={handlePatientNameChange}
            handleDoctorNameChange={handleDoctorNameChange}
            patientName={patientName}
            doctorName={doctorName}
            />}/>
          
        </Routes>
        
    </>
   )

   }
export default App
