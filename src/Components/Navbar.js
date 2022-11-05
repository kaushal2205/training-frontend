import React from "react";

import { withRouter } from 'react-router-dom'


import AuthenticationService from "../Services/AuthenticationService";

const Navbar= () => {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    return ( 
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{justifyContent:"space-around"}}>
            <a class="navbar-brand">GIS Global</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div style={{display:'flex',justifyContent:'space-between', gap:'15rem'}}>
            <div class="collapse navbar-collapse" id="navbarNav" style={{display:'flex',justifyContent:'space-between', gap:'15rem'}}>
                <ul class="navbar-nav">
                    {isUserLoggedIn &&  
                    <li class="nav-item active">
                        <a class="nav-link" href="/dashboard">Dashboard </a>
                    </li>}
                    {!isUserLoggedIn &&  
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                    </li>}
                    {!isUserLoggedIn &&
                    <li class="nav-item">
                        <a class="nav-link" href="/register">Register</a>
                    </li>}
                    {isUserLoggedIn && 
                    <li class="nav-item">
                        <a class="nav-link disabled" href="/logout">Logout</a>
                    </li>}
                </ul>
            </div>
            </div>
        </nav>
        {/* <Nav>
            <Bars/>
            <header className="">
                <h1>GIS Global</h1>
            </header>
            <NavMenu>
               
              
            </NavMenu> 

            <NavBtn>
                {!isUserLoggedIn &&   <NavBtnLink to='/login'>Login</NavBtnLink>}
                {isUserLoggedIn &&   <NavBtnLink to='/logout' onClick={AuthenticationService.logout}>Logout</NavBtnLink>}
            </NavBtn>
        </Nav>  */}
        </>
    );
}

export default withRouter(Navbar);