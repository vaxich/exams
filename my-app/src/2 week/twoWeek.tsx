import React from 'react';
import {TwoWeekOneQuestion} from "./1_question";
import {TwoWeekTwoQuestion} from "./2_question";
import {TwoWeekThreeQuestion} from "./3_question";
import {TwoWeekFourQuestion} from "./4_question";
import {TwoWeekFiveQuestion} from "./5_question";
import {TwoWeekSixQuestion} from "./6_question";
import {TwoWeekEightQuestion} from "./8_question";



export function TwoWeek() {

    return (
        <div>
            <h1>Вторая неделя</h1>
            <TwoWeekOneQuestion/>
            <TwoWeekTwoQuestion/>
            <TwoWeekThreeQuestion/>
            <TwoWeekFourQuestion/>
            <TwoWeekFiveQuestion/>
            <TwoWeekSixQuestion />
            <TwoWeekEightQuestion />
        </div>);

}
