import React from 'react';

// что нужно написать вместо XXX YYY ZZZ. ответ дайте через пробел
// name fatherName sonName
const Son = (props: any) => {
    return <div>
        I am son. My name is {props.name}
    </div>
}

const Father = (props: any) => {
    return <div>
        I am father. My name is {props.name}
    <Son name={props.sonName} />
    </div>
}

const Granny = (props: any) => {
    return <div>
        I am granny. My name is {props.name}
    <Father name={props.fatherName} sonName={props.sonName} />
    </div>
}

export const OneWeekTenQuestion = () => {
    return <div>
        <h2>10 вопрос</h2>
        <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
        <h4>ответ: name fatherName sonName</h4>
    </div>
}

