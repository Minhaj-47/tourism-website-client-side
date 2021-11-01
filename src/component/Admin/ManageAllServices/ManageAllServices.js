// this is all service section inside admin dashboard where you can see all users services data and can delete a service or confirm a pending service
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const MyOrders = () => {
  const [userServices, setUserServices] = useState();
  useEffect(() => {
    // fetching all users services data
    axios
      .get("https://guarded-eyrie-88699.herokuapp.com/userservices")
      .then((data) => {
        setUserServices(data.data);
        console.log(data);
      });
  }, []);
  const handleDelete = (id) => {
    // deleting a particulat service of a user
    const proceed = window.confirm("Do you want to delete it ?");
    if (proceed) {
      axios
        .delete(`https://guarded-eyrie-88699.herokuapp.com/deleteService/${id}`)
        .then((data) => {
          if (data.data.deletedCount > 0) {
            alert("delete succssfully");
            const newServices = userServices.filter(
              (service) => service._id !== id
            );
            setUserServices(newServices);
          }
        });
    }
  };
  const handleUpdateStatus = (service) => {
    // updating status to confirm from pending
    const proceed = window.confirm("Do you want confirm the pending order ?");
    if (proceed) {
      const updatedService = { ...service };
      updatedService.status = "confirmed";
      axios
        .put(
          `https://guarded-eyrie-88699.herokuapp.com/selectedService/${service?._id}`,
          updatedService
        )
        .then((data) => {
          window.location.reload();
        });
      // console.log(updatedService);
    }
  };

  return (
    <div>
      <h1>Total order: {userServices?.length}</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        {userServices?.map((service) => (
          <tbody>
            <tr>
              <td>{service?.email}</td>
              <td>{service?.name}</td>
              <td>{service?.price}</td>
              {service?.status === "pending" ? (
                <td className="text-danger">{service?.status}</td>
              ) : (
                <td className="text-success fw-bolder">{service?.status}</td>
              )}
            </tr>
            <tr>
              <td colSpan="4">
                <button
                  className="btn bg-dark p-2 m-4 text-white"
                  onClick={() => handleDelete(service?._id)}
                >
                  Delete
                </button>
                {service?.status === "pending" ? (
                  <button
                    className="btn bg-secondary text-white p-2 m-4"
                    onClick={() => handleUpdateStatus(service)}
                  >
                    Update Status
                  </button>
                ) : (
                  <span className="text-success fw-bolder">
                    order confirmed
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyOrders;
