import React, {MouseEvent} from 'react';
// Какой тип данных представляет аргумент функции-обработчика?
// Что надо написать вместо ххх, что бы в консоль вывело true?
// object


export function ThreeWeekEightQuestion() {
        const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {

                console.log((typeof e) === "object")
            }
       return (
           <div>
               <h2>8 вопрос</h2>
               <button onClick={onClickHandler} >Click</button>
               <h4>ответ: object</h4>
           </div>
           )

    }





