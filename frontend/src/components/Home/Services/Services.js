import React from "react";
import "./Services.css";
// import fakeData from "../../../asstes/fakeData/fakeData";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
const Services = ({ projects }) => {
  // const dummyData = fakeData.slice(0,3)
  // const [services, setServices] = useState(dummyData);
  // console.log(services);
  return (
    <div className="container display_services">
      <div className="heading">
        <h3 className="text-center">
          Our Awosome <span className="coloring_text">Services</span>
        </h3>
      </div>
      <div className="row">
        {projects &&
          projects.map((sv) => <ServiceDetails service={sv} key={sv.id} />)}
      </div>
    </div>
  );
};

export default Services;
