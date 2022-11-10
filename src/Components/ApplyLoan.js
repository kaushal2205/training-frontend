import React, { useState } from "react";
import axios from "axios";
import "./ApplyLoan.css";

const ApplyLoan = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [itemCategory, setItemCategory] = useState("Furniture");
  const [itemDescription, setItemDescription] = useState("");
  const [itemValue, setItemValue] = useState("");
  const [itemMake, setItemMake] = useState("Wooden");

  const handleApplyLoan = (e) => {
    e.preventDefault();
    let data = {
      empId: employeeId,
      description: itemDescription,
      category: itemCategory,
      make: itemMake,
      value: itemValue,
    };
    console.log(JSON.stringify(data));

    const registerLoan = async () => {
      const res = await axios.post(
        "http://localhost:8082/rockblack/api/master",
        data
      );
      console.log(res);
    };

    registerLoan();
  };

  return (
    <>
      <form className="apply-loan-main">
        <h3>Select Product and Apply for Loan</h3>
        <div className="apply-loan-row">
          <div class="form-group">
            <label className="apply-loan-row-label">Employee ID</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              value={employeeId}
              onChange={(e) => {
                setEmployeeId(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label className="apply-loan-row-label">Item Category</label>
            <select
              class="form-control"
              value={itemCategory}
              onChange={(e) => {
                setItemCategory(e.target.value);
              }}
            >
              <option selected>Furniture</option>
              <option>Stationary</option>
              <option>Crockery</option>
            </select>
          </div>
        </div>
        <div className="apply-loan-row">
          <div class="form-group">
            <label className="apply-loan-row-label">Item Description</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              value={itemDescription}
              onChange={(e) => {
                setItemDescription(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label className="apply-loan-row-label">Item Value</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              value={itemValue}
              onChange={(e) => {
                setItemValue(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="apply-loan-row">
          <div class="form-group">
            <label className="apply-loan-row-label">Item Make</label>
            <select
              class="form-control"
              value={itemMake}
              onChange={(e) => {
                setItemMake(e.target.value);
              }}
            >
              <option selected>Wooden</option>
              <option>Glass</option>
              <option>Plastic</option>
            </select>
          </div>
          <div class="form-group">
            <label className="apply-loan-row-label"></label>
          </div>
        </div>

        <div className="apply-loan-row">
          <div class="form-group" style={{ width: "200px" }}>
            <button
              type="submit"
              class="btn btn-primary my-1"
              onClick={handleApplyLoan}
            >
              Apply Loan
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ApplyLoan;
