import React, { Component } from 'react';
import Modal from '../modal/Modal';

import './Table.scss';

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            n: this.props.tableValues.n,
            x: this.props.tableValues.x,
            m: this.props.tableValues.m,
            w: this.props.tableValues.w,
            d: this.props.tableValues.d,
            color: this.props.tableValues.color,
            showModal: false
        }
    }

    reverseTable = (array) => {
        array.map((row, index) => (
            row.reverse()
        ));
        array.reverse();
    }

    createTable = () => {
        let numOfItems = (this.state.m - this.state.n) / this.state.x
        let rows = Math.ceil(numOfItems/ 5);

        let table = [];
        let val = this.state.n
        for (let i = 0; i < rows; i++){
            let row = [];
            for (let j = 0; j < 5; j++){
                if (val <= this.state.m){
                    row.push(val);
                }
                else{
                    row.push("");
                }
                val += this.state.x;
            }
            table.push(row);
        }

        if (this.state.d === 'ltr-up' || this.state.d === 'rtl-up'){
            this.reverseTable(table);
        }
        return table
    }

    getDirection = (rowNum, numRows) => {
        //odd number of rows -- necessary since grid builds from the top down and I have to reverse the array
        if (numRows % 2 === 1){
            if (this.state.d === 'ltr-up' || this.state.d === 'rtl-dn'){
                return rowNum % 2 === 0 ? 'reverse' : ''
            }
            else if (this.state.d === 'ltr-dn' || this.state.d === 'rtl-up'){
                return rowNum % 2 === 1 ? 'reverse' : ''
            }
        }
        //even number of rows
        else{
            if (this.state.d === 'ltr-up' || this.state.d === 'ltr-dn'){
                return rowNum % 2 === 1 ? 'reverse' : ''
            }
            else if (this.state.d === 'rtl-dn' || this.state.d === 'rtl-up'){
                return rowNum % 2 === 0 ? 'reverse' : ''
            }
        }

    }

    handleConfigureReaction = (result) => {
        if (result === 'cancel'){
            this.setState({ showModal: false});
        }
        else{
            this.setState({
                ...result,
                showModal: false
            });
        }
    }

    render() {
        let table = this.createTable();
        return (
            <div style={{width: `${this.state.w}%`, margin: '20px'}} id={this.state.color}>
                <div className={`table ${this.state.color}`} >
                    {table.map((row, index) => (
                        <div key={index} className={`row ${this.getDirection(index, table.length)}`}>
                            {row.map((item, index) => (
                                <div key={index} className={`grid-item ${item === '' ? 'gray' : ''}`}>{item}</div>
                            ))}
                        </div>
                    ))}
                </div>
                <button onClick={() => this.setState({showModal: true})}>Configure</button>
                {this.state.showModal &&
                    <Modal reaction={this.handleConfigureReaction} tableValues={this.state} />
                }
            </div>
        )
    }
}

export default Table
