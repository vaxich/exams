import React, {useState} from 'react';
// Что вернёт выражение: Array.isArray(users)?
// true

export function TwoWeekFourQuestion() {
        const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

        return ( <div>
            <h2>4 вопрос</h2>
                <p>Тут будет список пользователей</p>
                <h4>ответ: true</h4>
        </div>

       )
    }




