import React, {useState} from 'react';
// Что надо вставить вместо ХХХ, чтобы код заработал?
// map

export function TwoWeekSixQuestion() {
        const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

       return (
                <main>
                    <h2>6 вопрос</h2>
                    <h4>User list:</h4>
                <ul>
                     { users.map(user => <li>{user}</li> )}
                    </ul>
                    <h4>ответ: map</h4>
                </main>
            )
        }



