// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?


// isColored -верно

import React, {useState, MouseEvent} from 'react';
import ReactDOM from 'react-dom';


export function FiveWeekOneQuestion() {
    const [isColored, setIsColored] = useState<boolean>(false)
    return (
        <div> 
            <h2>1 вопрос</h2>
        <button
            style={{ backgroundColor: `${ isColored === true ? "red": ""}`}}
            onClick={()=>setIsColored(true)}
        >
          Меняю цвет по клику
        </button>
        <h4>Ответ: isColoredr</h4>
        </div>
    )
}

