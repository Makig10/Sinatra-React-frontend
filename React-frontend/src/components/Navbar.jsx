import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container'>
      <div className='navbar'>
        <div>
          <h2>Healthcare Made Easy</h2>
        </div>

        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/patient-list'>Patients</Link>
          <Link to='/appointment'>Appointment</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;