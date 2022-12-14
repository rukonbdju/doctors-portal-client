import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const info = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      <InfoCard bgClass={"bg-gradient-to-r from-secondary to primary"} cardTitle={"Opening Hours"} image={clock}></InfoCard>
      <InfoCard bgClass={"bg-accent"} cardTitle={"Visit our location"} image={marker}></InfoCard>
      <InfoCard bgClass={"bg-gradient-to-r from-secondary to primary"} cardTitle={"Contact us now"} image={phone}></InfoCard>
    </div>
  );
};

export default info;
