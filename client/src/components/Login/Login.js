import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (info) => {
    console.log(info);
    const response = await axios({
      method: "post",
      url: "/login",
      data: info,
    });
  };

  return (
    <Container>
      <NavBar />
      <div>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            {/* register your input into the hook by invoking the "register" function */}
            <input
              name="username`"
              defaultValue="test"
              ref={register}
              className="form-control"
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              name="password"
              ref={register({ required: true })}
              className="form-control"
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
