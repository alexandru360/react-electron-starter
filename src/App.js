import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {DialogDemo} from "./Components/Dialog";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React/Electron</h2>
                </div>
                <p className="App-intro">
                    Hello Electron!
                </p>
                <hr/>
                <p>This is an Electron application starter app integrated with PrimeReact controlls</p>
                <p>More at links below:</p>
                <p>https://github.com/alexandru360</p>
                <p>https://www.primefaces.org/primereact/#/</p>
                <hr/>
                <DialogDemo/>
            </div>
        );
    }
}

export default App;
