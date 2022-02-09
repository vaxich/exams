import React, {useState, MouseEvent, ChangeEvent} from 'react';
// Что надо написать вместо ххх, чтобы правильно типизировать
// параметр функции?
//  ChangeEvent<HTMLInputElement> или React.ChangeEvent<HTMLInputElement>


export function FourWeekFiveQuestion() {
        const [userName, setUserName] = useState<string>("")
         const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> setUserName(e.currentTarget.value)
        return (
                <div>
                    <h2>5 вопрос</h2>
                    <p>{userName}</p>
            <input
                 onChange={onChangeHandler}
            />
                    <h4>Ответ: в файле</h4>
        </div>
    )
}



