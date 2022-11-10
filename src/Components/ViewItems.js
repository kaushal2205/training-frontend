import React, { useState, useEffect } from "react";
import axios from "axios";
import './ViewLoans.css';

const ViewItems = ()=>{

    let employeeId = sessionStorage.getItem("EMPLOYEE_ID");
    let designation = "Manager";
    let department = "Marketing";

    const [displayRows,setDisplayRows] = useState([]); 


    useEffect(() => {
        if (employeeId) {
            const viewEmpItems = async()=>{
                const res = await axios.post("http://localhost:8082/rockblack/api/findItemsByID", {empId: employeeId });
                if(res.data){
                    console.log(res.data);
                    setDisplayRows(res.data);

                }
                else{
                    console.log("Error, Could not fetch Purchased Items")
                }
            }

            viewEmpItems();
        
        }
    });

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
                       <th scope="row">{row.itemId}</th>
                       <td>{row.itemDescription}</td>
                       <td>{row.itemMake}</td>
                       <td>{row.itemCategory}</td>
                       <td>{row.itemValuation}</td>
                       </tr>
                ))}

            </tbody>
            </table>

        </div>
    )

}

export default ViewItems;