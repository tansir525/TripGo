import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://ghostly-beast-42354.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Sucessfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h1>Choose What Service you need</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea
          {...register("description")}
          placeholder="Your Choosen Service"
        />
        <input
          type="number"
          {...register("price")}
          placeholder="Phone Number"
        />
        <input {...register("img")} placeholder="Add Ons" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
