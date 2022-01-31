import React from 'react';
import {ThreeWeekOneQuestion} from "./1_question";
import {ThreeWeekTwoQuestion} from "./2_question";
import {ThreeWeekThreeQuestion} from "./3_question";
import {ThreeWeekFourQuestion} from "./4_question";

import {ThreeWeekSixQuestion} from "./6_question";
import {ThreeWeekSevenQuestion} from "./7_question";
import {ThreeWeekEightQuestion} from "./8_question";
import {ThreeWeekNineQuestion} from "./9_question";
import {ThreeWeekTenQuestion} from "./10_question";



export function ThreeWeek() {

    return (
        <div>
            <h1>Третья неделя</h1>
            <ThreeWeekOneQuestion />
            <ThreeWeekTwoQuestion />
            <ThreeWeekThreeQuestion />
            <ThreeWeekFourQuestion />

            <ThreeWeekSixQuestion />
            <ThreeWeekSevenQuestion />
            <ThreeWeekEightQuestion />
            <ThreeWeekNineQuestion />
            <ThreeWeekTenQuestion />
        </div>);

}
