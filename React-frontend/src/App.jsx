import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //routing purpose bruv
import DoctorList from './components/DoctorList'
import PatientList from './components/PatientList';
import Header from './components/Header';
import './App.css'

function App() {
  const [doctors,setDoctors] = useState([])
  const [patients, setPatients] = useState([])
  //const [appointments, setAppointments] = useState([])
  
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

 /* useEffect(() => {
    fetch('http://localhost:9292/all_appointments')
    .then(res => res.json())
    .then(appointments => setAppointments(appointments));
  }, []);*/

   return(
    <>
      
        <Header />
        <Routes>
          <Route 
          path="/" 
          element={<DoctorList doctors={doctors} />} />
          <Route
            path="/patient-list"
            element={<PatientList patients={patients} />}/>
          
        </Routes>
        
    </>
   )

   }
export default App
