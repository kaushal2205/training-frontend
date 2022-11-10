import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ViewLoans.css";

const ViewLoans = () => {
  let employeeId = sessionStorage.getItem("EMPLOYEE_ID");
  let designation = "Manager";
  let department = "Marketing";

  useEffect(() => {
    if (employeeId) {
        const viewEmpLoans = async()=>{
            const res = await axios.post("http://localhost:8082/rockblack/api/findLoanByEmpID", {empId: employeeId });
            if(res.data){
                console.log(res.data);
                setDisplayRows(res.data);

            }
            else{
                console.log("Error, Could not fetch availed loans")
            }
        }

        viewEmpLoans();
      
    }
  });

  const [displayRows, setDisplayRows] = useState([]);


  return (
    <div className="ViewLoans-main">
      <h3>Loan Cards Availed</h3>
      <div className="ViewLoans-header">
        <div className="ViewLoans-header-item">
          <h5>Employee ID</h5>
          <h6>{employeeId}</h6>
        </div>

        <div className="ViewLoans-header-item">
          <h5>Designation</h5>
          <h6>{designation}</h6>
        </div>

        <div className="ViewLoans-header-item">
          <h5>Department</h5>
          <h6>{department}</h6>
        </div>
      </div>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Loan ID</th>
            <th scope="col">Loan Type</th>
            <th scope="col">Duration</th>
            <th scope="col">Card Issue Date</th>
          </tr>
        </thead>
        <tbody>
          {displayRows.map((row, index) => (
            <tr>
              <th scope="row">{row.loanId}</th>
              <td>{row.loanType}</td>
              <td>{row.durationInYear}</td>
              <td>{row.issueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewLoans;
