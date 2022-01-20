import React from 'react';
import {log} from "util";
//Что нужно написать вместо ххх, что бы код работал?
// props.description

type PropsType = {
    name: string
    description: string
}


export const OneWeekThreeQuestion: any = (props:any) => {

    return <div>
        <h2>3 вопрос</h2>
    <h1>Имя: {props.name}</h1>
    <div>Описание: {props.description }</div>
    <h4>ответ: props.description</h4>
    </div>
}
