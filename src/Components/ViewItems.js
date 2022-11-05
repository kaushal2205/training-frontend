import React from "react";
import './ViewLoans.css';

const ViewItems = ()=>{

    let employeeId="12345678";
    let designation = "Manager";
    let department = "Marketing";

    const displayRows =[
        {id:"1001", description:"Tea Table ", make:"Wooden", category:"Furniture", valuation:"5000"},
        {id:"1002", description:"Tea set ", make:"Glass", category:"Crockery", valuation:"2000"},
        {id:"1003", description:"Dining Set ", make:"Wooden", category:"Furniture", valuation:"25000"},
        {id:"1004", description:"Pen", make:"Plastic", category:"Furniture", valuation:"4000"}
    ]

    return(
        <div className="ViewLoans-main">
            <h3>Items Purchased</h3>
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
                <th scope="col">Issue_ID</th>
                <th scope="col">Item Description</th>
                <th scope="col">Item Make</th>
                <th scope="col">Item Category</th>
                <th scope="col">Item Valuation</th>
                </tr>
            </thead>
            <tbody>
                {displayRows.map((row,index)=>(
                       <tr>
                       <th scope="row">{row.id}</th>
                       <td>{row.description}</td>
                       <td>{row.make}</td>
                       <td>{row.category}</td>
                       <td>{row.valuation}</td>
                       </tr>
                ))}

            </tbody>
            </table>

        </div>
    )

}

export default ViewItems;