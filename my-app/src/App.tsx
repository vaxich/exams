import React from 'react';


import './App.css';
import {OneWeek} from "./1 week/oneWeek";
import {TwoWeek} from "./2 week/twoWeek";


function App() {

    return (
        <div className="App">
            <OneWeek />
            <TwoWeek />
        </div>
    );
}


export default App;
