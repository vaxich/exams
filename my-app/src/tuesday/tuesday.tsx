import React from 'react';
import { FiveWeek } from './5 week/fiveWeek';
import { SixWeek } from './6 week/sixWeek';
import { SevenWeek } from './7 week/sevenWeek';
import { EightWeek } from './8 week/eightWeek';

export function Tuesday () {
    return (
        <div>
            <FiveWeek />
            <SixWeek />
            <SevenWeek />
            <EightWeek />
        </div>
    )
}