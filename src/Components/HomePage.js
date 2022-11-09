import React from "react";
import loan from '../assets/images/emp_loan.jpg';
import './HomePage.css';

const HomePage = ()=>{

    return(
        <div className="home-main">
            <div>
                <img src={loan} className="home-img"/>
            </div>
            <div className="home-main-text-div">
                <h3>GIS Global Employee Loan Management</h3>
                <div className="home-main-text">
                    <div>It provides a facility for GIS Global Employees to purchase items from GIS Global Mart and facilitates a flexible loan to purchase the items. GIS Global issues loan cards for various purchases like furniture, stationary, crockery, etc., to all their employees with specific repayment tenure for each of the loan type. Whenever an employee applies for loan, based on his eligibility loan will be approved and assign an employee with loan card. Each employee can be issued with different types of cards for purchasing diff categories of products. </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;