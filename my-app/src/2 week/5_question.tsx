import React, {useState} from 'react';
// Что вернёт выражение: typeof setUsers?
// function

export function TwoWeekFiveQuestion() {
        const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

        return ( <div>
            <h2>5 вопрос</h2>
                <p>Тут будет список пользователей</p>
                <h4>ответ: function</h4>
        </div>

       )
    }



