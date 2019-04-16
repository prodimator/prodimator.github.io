import React, { Component } from "react";

import './about.scss';

export default function About() {
    return (
        <div className="about shadow">
            <div className="left">
                <p className="title">Ryan Wolfe</p>
                <p className="about-me">Hello! I am a developer and designer with years of experience creating and designing websites. I occasionally find myself behind the lens of a camera too. Check out my work or say hi!</p>
            </div>
            <div className="right">
                <p className="about-featured">Featured</p>
                <p className="about-featured-title">Deloitte Digital Culture Site</p>
                <div className="button">View</div>

            </div>
        </div>
    );
}
