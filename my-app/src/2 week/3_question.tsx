import React, {useState} from 'react';
// Чему равно results.length?
// 2


export function TwoWeekThreeQuestion() {
        const results = useState<Array<string>>(["Bob", "Alex", "Ann"])

        const users = results[0]
        const setUsers = results[1]


        return (
            <div>
                    <h2>3 вопрос</h2>
                    <p>Тут будет список пользователей</p>
                    <h4>ответ: 2</h4>
            </div>

        )
    }




