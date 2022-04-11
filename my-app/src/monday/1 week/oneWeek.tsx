import React from 'react';
import {OneWeekTenQuestion} from "./10_question";
import {OneWeekNineQuestion} from "./9_question";
import {OneWeekEightQuestion} from "./8_question";
import {OneWeekSevenQuestion} from "./7_question";
import {OneWeekSixQuestion} from "./6_question";
import {OneWeekFiveQuestion} from "./5_question";
import {OneWeekFourQuestion} from "./4_question";
import {OneWeekThreeQuestion} from "./3_question";
import {OneWeekTwoQuestion} from "./2_question";
import {OneWeekOneQuestion} from "./1_question";



export function OneWeek() {
    const news1 = [{ //6 вопрос данные
        title: "всем привет",
        author: "Вася Пупкин"
    }]
    const article = { // 6 вопрос данные
        title: "заголовок",
        date: "21.01.2022",
        text: "текст"
    }
    const info = {  //5 вопрос данные
        name: "Pavel",
        description: "молодой"
    }
    const info5 = {
        age: 39,
        name: "Pavel",
        avatarUrl: "link"
    }
    return (
        <div>
            <h1>Первая неделя</h1>
            <OneWeekOneQuestion />
            <OneWeekTwoQuestion />
            <OneWeekThreeQuestion />
            <OneWeekFourQuestion />
            <OneWeekFiveQuestion age={info5.age} name={info5.name} avatarUrl={info5.avatarUrl}/>
            <OneWeekSixQuestion mainArticle={article} news={news1} />
            <OneWeekSevenQuestion />
            <OneWeekEightQuestion />
            <OneWeekNineQuestion />
            <OneWeekTenQuestion />
        </div>
    )

}
