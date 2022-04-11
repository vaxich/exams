import React, {useState, MouseEvent, ChangeEvent} from 'react';
// Что надо написать вместо ххх,
// чтобы после вывода текста в параграф содержимое формы ввода очищалось?
// setUserName("")



export function FourWeeSevenQuestion() {
        const [userName, setUserName] = useState<string>("")
        const [text, setText] = useState<string>("")
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)
        return (
                <div>
                    <h2>7 вопрос</h2>
                    <input
                    value={userName}
                    onChange={onChangeHandler}
                    onBlur={()=> {
                            setUserName("")
                            setText(userName)
                        }}
                />
                <p>{text}</p>
                    <h4>Ответ: setUserName("") </h4>
        </div>
    )
}



