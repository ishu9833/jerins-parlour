import React from "react";
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  return (
    <div className="make-admin p-3">
      <div className="row">
        <div className="col-md-2">
          <SidebarAdmin />
        </div>
        <div className="col-md-10">
          <div className="head_area row d-flex justify-content-between pl-5 pr-5 pb-2">
            <div className="page_name">Make Admin</div>
            <div className="user_name">admin name</div>
          </div>

          <div className="row form_area">
            <div className="col-md-10">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ab distinctio quis, ducimus odio, consectetur fuga
                dolores atque esse obcaecati mollitia. Libero aliquid tenetur
                neque cumque sapiente temporibus, quo quasi pariatur. Harum
                laboriosam iusto saepe placeat ea! Nemo, nihil labore!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
