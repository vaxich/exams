import React, {useState, MouseEvent} from 'react';
// Что надо написать вместо ххх, что бы на странице появился текст BUTTON?
// currentTarget

export function ThreeWeekNineQuestion() {
        const [tagName, setTagName] = useState<string>()
        const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
                 setTagName(e.currentTarget.tagName)
            }
        return (
                <>
                    <h2>9 вопрос</h2>
                    <p>{tagName}</p>
            <button onClick={onClickHandler} >
                <span>Click</span>
            </button>
                    <h4>ответ: currentTarget</h4>
        </>
    )
}





