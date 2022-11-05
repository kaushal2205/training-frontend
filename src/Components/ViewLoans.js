import React from "react";
import './ViewLoans.css';

const ViewLoans = ()=>{

    let employeeId="12345678";
    let designation = "Manager";
    let department = "Marketing";

    const displayRows =[
        {id:"1001", type:"Furniture", duration:"5", issueDate:"15-07-2022"},
        {id:"1002", type:"Stationary", duration:"2", issueDate:"15-09-2020"},
        {id:"1003", type:"Crockery", duration:"12", issueDate:"25-09-2021"},
        {id:"1004", type:"Education", duration:"15", issueDate:"12-08-2017"}
    ]

    return(
        <div className="ViewLoans-main">
            <h3>Loan Cards Availed</h3>
            <div className="ViewLoans-header">
                <div className="ViewLoans-header-item">
                    <h5>Employee ID</h5>
                    <h6>{employeeId}</h6>
                </div>

                <div  className="ViewLoans-header-item">
                    <h5>Designation</h5>
                    <h6>{designation}</h6>
                </div>

                <div  className="ViewLoans-header-item">
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
                {displayRows.map((row,index)=>(
                       <tr>
                       <th scope="row">{row.id}</th>
                       <td>{row.type}</td>
                       <td>{row.duration}</td>
                       <td>{row.issueDate}</td>
                       </tr>
                ))}

            </tbody>
            </table>

        </div>
    )

}

export default ViewLoans;