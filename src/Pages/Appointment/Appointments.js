import React, { useEffect, useState } from 'react';
import AvailableAppointment from './AvailableAppointment';

const Appointments = ({date}) => {
    const [services,setServices]=useState([]);
    useEffect( ()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-center text-xl my-16'>Available Appointment on {date.toDateString()}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center justify-items-center'>
                {
                    services.map(service=><AvailableAppointment key={service._id} service={service}></AvailableAppointment>)
                }
            </div>
        </div>
    );
};

export default Appointments;