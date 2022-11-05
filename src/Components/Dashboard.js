import React from "react";
import { useHistory } from "react-router-dom";
import './Dashboard.css';

const Dashboard = ()=>{
    let history = useHistory();
    return(
        <div className="dashboard-main">
            <button type="button" class="btn btn-primary" onClick={()=>{ history.push('/dashboard/viewLoans');}}>View Loans</button>
            <button type="button" class="btn btn-primary" onClick={()=>{ history.push('/dashboard/applyLoan');}}>Apply for Loan</button>
            <button type="button" class="btn btn-primary" onClick={()=>{ history.push('/dashboard/viewItems');}}>View Items Purchased</button>
        </div>
    )

}

export default Dashboard;