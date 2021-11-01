// this is my order section where a user can all his selected service and can also delete them if want to
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  console.log(user.email);
  const [userServices, setUserServices] = useState();
  useEffect(() => {
    // fetching user service data using his email
    axios
      .get(
        `https://guarded-eyrie-88699.herokuapp.com/userservices/${user?.email}`
      )
      .then((data) => {
        setUserServices(data.data);
        console.log(data);
      });
  }, [user?.email]);
  console.log(userServices);
  // event listener for deleting a service
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete it ?");
    if (proceed) {
      // deleting the selected service from user database
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

    console.log(id);
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
              <td className="text-danger">{service?.status}</td>
            </tr>
            <tr>
              <td colSpan="4">
                <button
                  className="btn bg-dark p-2 m-4 text-white"
                  onClick={() => handleDelete(service?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyOrders;
