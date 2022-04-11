import React from 'react';
import { OneWeek } from './1 week/oneWeek';
import { TwoWeek } from './2 week/twoWeek';
import { ThreeWeek } from './3 week/threeWeek';
import { FourWeek } from './4 week/fourWeek';

export function Monday () {
    return (
        <div>
            <OneWeek />
            <TwoWeek />
            <ThreeWeek />
            <FourWeek />
        </div>
    )
}