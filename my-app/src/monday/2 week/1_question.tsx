import React, {useState} from 'react';
// Какой тип правильнее указать вместо "any" при типизации стэйта?
//   <Array<string>> или string[]

export function TwoWeekOneQuestion() {
        const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
        const users = results[0] // почему в users весь массив, а в setUsers - ничего
        const setUsers = results[1] //


        return (
            <div>
                    <h2>1 вопрос</h2>
                    <p>Тут будет список пользователей</p>
                    <h4>ответ: в файле</h4>

            </div>


        )
    }





