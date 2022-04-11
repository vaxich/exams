import React from 'react';
import { FiveWeek } from './5 week/fiveWeek';
import { SixWeek } from './6 week/sixWeek';

export function Tuesday () {
    return (
        <div>
            <FiveWeek />
            <SixWeek />
        </div>
    )
}