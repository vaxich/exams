import React, {useState} from 'react';
// Что вернёт выражение: typeof getUser?
// function
export function TwoWeekNineQuestion() {
        const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
       const getUser = (user: string) => <li>{user}</li>

        return (
                <main>
                    <h2> 9 вопрос</h2>
                    <h4>User list:</h4>
                <ul>
                    {users.map(getUser)}
                </ul>
                    <h4>ответ: function</h4>
            </main>
       )
    }



