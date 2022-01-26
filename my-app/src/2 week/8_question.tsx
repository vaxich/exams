import React, {useState} from 'react';
// Что вернёт выражение: Array.isArray(usersList)?
// true


export function TwoWeekEightQuestion() {
        const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
        const getUser = (user: string) => <li>{user}</li>
        const usersList = users.map(getUser)
    console.log(users)
    console.log(getUser)
    console.log(usersList)
    console.log(Array.isArray(usersList))


        return (
                <main>
                    <h2> 8 вопрос</h2>
                    <h4>User list:</h4>
                <ul>
                   {usersList}
                </ul>
                    <h4>ответ: true</h4>
            </main>
        )
    }



