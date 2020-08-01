import React from "react";
import "./header.css";

function Header(props) {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <img src="../images/batmanLogo.jpg" alt="Batman Logo" />
                <h1 class="display-4">Batman</h1>
                <p class="lead">Villains Database</p>
            </div>
        </div>
    );
}

export default Header;