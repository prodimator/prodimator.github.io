import React, { Component } from 'react';

import './Modal.scss'

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            n: this.props.tableValues.n,
            x: this.props.tableValues.x,
            m: this.props.tableValues.m,
            w: this.props.tableValues.w,
            d: this.props.tableValues.d,
            color: this.props.tableValues.color,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            n: parseInt(this.state.n) ? parseInt(this.state.n) : this.props.tableValues.n,
            x: parseInt(this.state.x) ? parseInt(this.state.x) : this.props.tableValues.x,
            m: parseInt(this.state.m) ? parseInt(this.state.m) : this.props.tableValues.m,
            w: parseInt(this.state.w) ? parseInt(this.state.w) : this.props.tableValues.w,
            d: this.state.d,
        }
        console.log(data);
        this.props.reaction(data);
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.props.reaction('cancel');
    }
    
    render(){
        return (
            <div className="modal">
                <div className="container modal-container">
                    <form onSubmit={this.handleSubmit} onReset={this.handleCancel}>
                        <h5>Color: {this.state.color}</h5>
                        <div className="input-field">
                            <span>N</span>
                            =
                            <input
                                type="text"
                                id="n"
                                value={this.state.n}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field">
                            <span>X</span>
                            =
                            <input
                                type="text"
                                id="x"
                                value={this.state.x}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field">
                            <span>M</span>
                            =
                            <input
                                type="text"
                                id="m"
                                value={this.state.m}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field">
                            <span>W</span>
                            =
                            <input
                                type="text"
                                id="w"
                                value={this.state.w}
                                disabled={window.innerWidth <= 812 ? true : false}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field">
                            <span>D</span>
                            =
                            <select id="d" onChange={this.handleChange} defaultValue={this.state.d}>
                                <option id="default" value="ltr-up">LTR-UP</option>
                                <option id="default" value="ltr-dn">LTR-DN</option>
                                <option id="default" value="rtl-up">RTL-UP</option>
                                <option id="default" value="rtl-dn">RTL-DN</option>
                            </select>
                        </div>
                        <button className="btn btn-primary my-sm" type="submit">OK</button>
                        &nbsp;
                        <button className="btn btn-primary my-sm" type="reset">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal;
