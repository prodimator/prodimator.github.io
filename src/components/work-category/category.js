import React, { Component } from "react";
import WebDev from '../../images/feature.png';
import Design from '../../images/blueprint.png';
import Photography from '../../images/photo-camera.png';

import './category.scss';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img_src: "",
        };
        switch (props.type) {
            case "Web Development":
                this.state.img_src = WebDev; 
                break;
            case "Design":
                this.state.img_src = Design; 
                break;
            case "Photography":
                this.state.img_src = Photography;
                break;
            default:
            // code block
        }
    };
    isActive = () => {
        if (this.props.active){
            return "outline shadow";
        }
    }
    render(){
        return (
            <div className={`category ${this.isActive()}`}>
                <img src={this.state.img_src} alt="icon" className="icon" />
                <p className="category-type">{this.props.type}</p>
            </div>
        );
    }
}
