import React, { Component } from "react";

import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <p className="subtitle">Contact</p>
                <p className="email">Email: rwolfe22@gmail.com</p>
                <p className="linkedin">LinkedIn: <a href="https://www.linkedin.com/in/ryanwolfe2/">Ryan Wolfe</a></p>
                <p className="copy">© 2019 Prodimator</p>
            </div>
        </div>
    );
}
