import React, {useState} from 'react';
// Что вернёт выражение: typeof useState?
// function


export function TwoWeekTwoQuestion() {
        const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])


        return (
                <div>
                    <h2>2 вопрос</h2>
                    <p>Тут будет список пользователей!</p>
                    <h4>ответ: function</h4>
                </div>

        )
    }





