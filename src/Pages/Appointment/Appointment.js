import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentHeader from './AppointmentHeader';
import Appointments from './Appointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
           <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader> 
           <Appointments date={date}></Appointments>
           <Footer></Footer>
        </div>
    );
};

export default Appointment;