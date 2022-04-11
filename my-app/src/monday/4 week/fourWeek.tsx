import React from 'react';
import {FourWeekOneQuestion} from "./1_question";
import {FourWeekTwoQuestion} from "./2_question";
import {FourWeekThreeQuestion} from "./3_question";
import {FourWeekFourQuestion} from "./4_question";
import {FourWeekFiveQuestion} from "./5_question";
import {FourWeeSixQuestion} from "./6_question";
import {FourWeeSevenQuestion} from "./7_question";
import {FourWeekEightQuestion} from "./8_question";
import {FourWeekNineQuestion} from "./9_question";




export function FourWeek() {

    return (
        <div>
            <h1>Четвёртая неделя</h1>
            <FourWeekOneQuestion />
            <FourWeekTwoQuestion />
            <FourWeekThreeQuestion />
            <FourWeekFourQuestion />
            <FourWeekFiveQuestion />
            <FourWeeSixQuestion />
            <FourWeeSevenQuestion />
            <FourWeekEightQuestion />
            <FourWeekNineQuestion />
        </div>);

}
