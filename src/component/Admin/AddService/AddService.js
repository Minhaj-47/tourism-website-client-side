//it is add service section where admin can add new service if he want
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

const AddService = () => {
  const { user } = useAuth();
  const [added, isAdded] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    isAdded(false);
    data.email = user?.email;
    data.price = parseInt(data.price);
    console.log(data);
    axios
      .post("https://guarded-eyrie-88699.herokuapp.com/addService", data)
      .then((data) => {
        console.log(data);
      });
    isAdded(true);
  };
  console.log(added);
  return (
    <div>
      <h1 className="mt-5 text-center text-dark">Please Add Events</h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder=" service name"
                className="p-2 m-2 w-100"
              />
              <br />
              <br />
              <input
                {...register("describtion")}
                placeholder="Description"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("price")}
                placeholder="price"
                className="p-2 m-2 w-100"
              />

              <input
                {...register("img", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add" className="btn btn-dark w-50" />
              <br />
              {added && (
                <span className="fw-bolder fs-5 text-success">
                  *****New service added*****
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
