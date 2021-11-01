//it is admin dashboard section where you can add a service ,delete a selected service and can see all users service data
import React, { useState } from "react";
import ManageAllServices from "../ManageAllServices/ManageAllServices";
import AddService from "../AddService/AddService";
import "../AdminDashBoard/AdminDashBoard.css";
const AdminDashboard = () => {
  const [control, setControl] = useState("allservices");

  console.log(control);
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("allservices")}
                    className="admin-menu p-2"
                  >
                    MangeAllServices
                  </li>
                  <li
                    onClick={() => setControl("addServices")}
                    className="admin-menu p-2"
                  >
                    Add Services
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {control === "allservices" && (
                <ManageAllServices></ManageAllServices>
              )}
              {control === "addServices" && <AddService></AddService>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
