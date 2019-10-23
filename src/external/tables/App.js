import React, { Component } from 'react';
import Table from './components/table/Table';
import './App.scss';

class App extends Component {
    render() {
        const tableRed = {
            n: 8,
            x: 1,
            m: 29,
            w: 20,
            d: 'ltr-up',
            color: 'red'
        };
        const tableGreen = {
            n: 231,
            x: 1,
            m: 247,
            w: 30,
            d: 'ltr-up',
            color: 'green'
        };
        const tableBlue = {
            n: 47,
            x: 2,
            m: 81,
            w: 40,
            d: 'ltr-up',
            color: 'blue'
        };

        return (
            <div>
                <div className="container">
                    <Table tableValues={tableRed}/>
                    <Table tableValues={tableGreen}/>
                    <Table tableValues={tableBlue}/>
                </div>
            </div>
        )
    }
}

export default App
