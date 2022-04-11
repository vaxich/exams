import React from 'react';
//  в коде допущена одна и таже ошибка
// Какое слово должно быть написано вместо ошибочного
// User


export const OneWeekOneQuestion  = () => {
        return <User city="minsk" />
    }
type PropsType = {
        city: string
    }
export const User: React.FC<PropsType> = (props) => {
        return (
            <div>
                <h2>1 вопрос</h2>
                <div>hello</div>
                <h4>ответ: User</h4>
            </div>

        )
    }

