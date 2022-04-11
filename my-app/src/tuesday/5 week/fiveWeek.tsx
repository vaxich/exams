import React from 'react';
import { FiveWeekOneQuestion } from './1_question';
import { FiveWeekTwoQuestion } from './2_question';
import { FiveWeekThreeQuestion } from './3_question';
import { FiveWeekFourQuestion } from './4_question';
import { FiveWeekFiveQuestion } from './5_question';
import { FiveWeekSixQuestion } from './6_question';


export function FiveWeek () {
    return (
        <div>
            <h1>Пятая неделя</h1>
            <FiveWeekOneQuestion />
            <FiveWeekTwoQuestion />
            <FiveWeekThreeQuestion />
            <FiveWeekFourQuestion />
            <FiveWeekFiveQuestion />
            <FiveWeekSixQuestion />
        </div>
    )
}