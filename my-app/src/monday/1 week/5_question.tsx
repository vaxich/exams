import React from 'react';
// что нужно написать вместо XXX и YYY
//ответ дай через пробел
// props.age props.name
type PagePropsType = {
        age: number
        name: string
        avatarUrl: string
    }
export const OneWeekFiveQuestion: React.FC<PagePropsType> = (props) => {
        return (
            <div>
                <h2>5 вопрос</h2>
                <User a={props.age} n={props.name} />
                <h4>ответ: props.age props.name</h4>
            </div>

        )
    }
type UserPropsType = {
        a: number
        n: string
    }
export const User: React.FC<UserPropsType> = (props) => {
        return <div>name: {props.n}, age: {props.a}</div>
    }


