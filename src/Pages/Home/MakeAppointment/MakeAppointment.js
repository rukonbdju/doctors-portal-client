import React from "react";
import doctor from "../../../assets/images/doctor.png"
import appointment from "../../../assets/images/appointment.png"
const MakeAppointment = () => {
  return (
    <div style={{
        background:`url(${appointment})`
    }}
        className="grid grid-cols-2 gap-5 justify-center items-center">
        <div className="hidden lg:block">
        <img width="70%" src={doctor} alt="" />
        </div>
        <div>
            <h3 className="text-white text-base font-bold">Appointment</h3>
            <h2 className="text-xl font-bold text-white">Make an appointment Today</h2>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium qui, at, quibusdam nobis ipsum commodi provident quidem repellat corrupti nihil libero non dignissimos quo veniam inventore aperiam voluptas est!</p>
            <div>
            <button className="btn btn-primary uppercase text-white font-bold">Get Started</button>
            </div>
        </div>
    </div>
  );
};

export default MakeAppointment;
