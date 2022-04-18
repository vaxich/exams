// Что надо вставить вместо XXX, чтобы кнопка отправки комментария стала активной?
// false - верно
 

import React, {ChangeEvent, useState} from 'react';
import ReactDOM from 'react-dom';


export function FiveWeekFourQuestion() {
    const minSizeComment = 10
    const [isCommentReady, setIsCommentReady] = useState<boolean>(false)
    const [comment, setComment] = useState<string>("")

    const onClickSendComment = () => {
        if(comment.length > minSizeComment){
            setComment("")
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=> {
        setComment(e.currentTarget.value)
        if(comment.length > minSizeComment){
            setIsCommentReady(true)
        }
    }

    return (
        <main>
            <h2>4 вопрос</h2>
            <textarea
                placeholder={"Your comment must have more than 10 charters"}
                value={comment}
                onChange={onChangeHandler}
            />
            <div>
                <button
                    disabled={isCommentReady === false }
                    onClick={onClickSendComment}>
                    Send comment
                </button>
            </div>
            <h4>Ответ: false</h4>
        </main>
    )
}

