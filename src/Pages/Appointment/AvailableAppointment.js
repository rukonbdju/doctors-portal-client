import React from "react";
import BookAppointment from "./BookAppointment";

const AvailableAppointment = ({service}) => {

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.slots.length>0?<span>{service.slots[0]}</span>:<span>No slot Available</span>}</p>
        <p>{service.slots.length} space Available</p>
        <div className="card-actions justify-end">
        <label disabled={service.slots.length===0} for="my-modal-6" class="btn">Book Appointment</label>
        </div>
      </div>
      {
        <BookAppointment service={service}></BookAppointment>
      }
    </div>
  );
};

export default AvailableAppointment;
