import React from 'react';


import './App.css';
import {OneWeek} from "./1 week/oneWeek";
import {TwoWeek} from "./2 week/twoWeek";
import {ThreeWeek} from "./3 week/threeWeek";


function App() {

    return (
        <div className="App">
            <OneWeek />
            <TwoWeek />
            <ThreeWeek />
        </div>
    );
}


export default App;
