import React from "react";
import "./header.css";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid header">
            <div className="container">
                <section className="row">
                    <img className="col-12" src="../images/batmanLogo.jpg" alt="Batman Logo" />
                </section>
                <section className="row">
                    <h1 className="display-4 col-12">Batman</h1>
                </section>
                <section className="row">
                    <p className="lead col-12">Villains Database</p>
                </section>
            </div>
        </div>
    );
}

export default Header;