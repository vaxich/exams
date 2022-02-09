import React from 'react';


import './App.css';
import {OneWeek} from "./1 week/oneWeek";
import {TwoWeek} from "./2 week/twoWeek";
import {ThreeWeek} from "./3 week/threeWeek";
import {FourWeek} from "./4 week/fourWeek";


function App() {

    return (
        <div className="App">
            <OneWeek />
            <TwoWeek />
            <ThreeWeek />
            <FourWeek />
        </div>
    );
}


export default App;
