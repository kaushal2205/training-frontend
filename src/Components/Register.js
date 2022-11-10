import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthenticationService from "../Services/AuthenticationService";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(new Date());
  const [doj, setDoj] = useState(new Date());
  const [confirmPass, setConfirmPass] = useState("");
  const [passwordFlag, setPasswordFlag] = useState(false);
  const history = useHistory();

  const handleRegister = (p) => {
    p.preventDefault();

    if (password === confirmPass) {
      let employee = {
        email: email,
        password: password,
        lName: lname,
        fName: fname,
        designation: designation,
        dept: department,
        gender: gender,
        dob: dob,
        doj: doj,
      };
      console.log(JSON.stringify(employee));

      const registerEmployee = async () => {
        const res = await axios.post(
          "http://localhost:8082/rockblack/api/Employee",
          employee
        );
        console.log(res);
        if (res.data) {
          history.push("/login");
        } else {
          console.log("Error, Unable to Register");
        }
      };

      registerEmployee();
    } else {
      setPasswordFlag(true);
      setPassword("");
      setConfirmPass("");
    }
  };

  return (
    <div>
      {" "}
      {passwordFlag && (
        <h3 style={{ color: "red" }}>Password does not match</h3>
      )}
      <div className="register-container">
        <form className="form-register">
          <h1 className="form-signin-heading">Employee Registration</h1>
          <div className="form-register-main">
            <div className="register-form-row">
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="register-form-row">
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Designation:</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={designation}
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="register-form-row">
              <div className="form-group">
                <label>Department:</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <select
                  class="form-control"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option selected value="Male">
                    Male
                  </option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="register-form-row">
              <div className="form-group">
                <label>Date of birth:</label>
                {/* <DatePicker selected={dob} onChange={(date:Date) => setDob(date)} dateFromat='YYYY-MM-dd'/> */}
                <input
                  type="date"
                  name="email"
                  className="form-control"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Date of joining:</label>
                <input
                  type="date"
                  name="email"
                  className="form-control"
                  value={doj}
                  onChange={(e) => {
                    setDoj(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="register-form-row">
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  style={{ margin: 0 }}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={confirmPass}
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
                />
              </div>
            </div>

            <button className="btn btn-lg btn-success" onClick={handleRegister}>
              Register
            </button>
            <div className="form-group-already">
              Already Registered? <a href="/login">Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
