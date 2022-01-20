import React from 'react';
import {OneWeekTenQuestion} from "./10_question";
import {OneWeekNineQuestion} from "./9_question";
import {OneWeekEightQuestion} from "./8_question";
import {OneWeekSevenQuestion} from "./7_question";
import {OneWeekSixQuestion} from "./6_question";


import {OneWeekThreeQuestion} from "./3_question";

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
    return (
        <div>
            <h1>Первая неделя</h1>
            <OneWeekThreeQuestion name={info.name} description={info.description}/>


            <OneWeekSixQuestion mainArticle={article} news={news1} />
            <OneWeekSevenQuestion />
            <OneWeekEightQuestion />
            <OneWeekNineQuestion />
            <OneWeekTenQuestion />
        </div>
    )

}
