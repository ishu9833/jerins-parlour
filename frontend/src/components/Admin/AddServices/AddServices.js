import React from "react";
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";
import "./AddServices.css";
const AddServices = () => {
  return (
    <div className="add-service p-3">
      <div className="row">
        <div className="col-md-2">
          <SidebarAdmin />
        </div>
        <div className="col-md-10">
          <div className="head_area row d-flex justify-content-between pl-5 pr-5 pb-2">
            <div className="page_name">Order List</div>
            <div className="user_name">admin name</div>
          </div>

         <div className="row form_area">
         <div className="col-md-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              consequatur similique, sit harum id fugiat. Quibusdam quisquam
              quae quod tenetur, nesciunt voluptates suscipit esse, laborum
              voluptas perferendis, minima nihil vel doloremque et ex nam sit
              nemo obcaecati. A, dolore doloremque.
            </p>
          </div>
          <div className="col-md-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In non
              ut quam obcaecati accusamus nobis exercitationem commodi quia,
              ullam, ex alias nulla inventore voluptatibus facilis provident.
              Totam commodi rerum ut iste deleniti assumenda dolorum minima
              delectus quidem! Repellendus, odit voluptas.
            </p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
