import React from "react";
import "./header.css";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid header">
            <div className="container">
                <section className="row">
                    <h4 className="col-3 batman">Batman Villain Database</h4>
                    <img className="logo offset-6" src={require("../../images/batmanLogo.jpg")} alt="Batman Logo" />
                </section>
            </div>
        </div>
    );
}

export default Header;