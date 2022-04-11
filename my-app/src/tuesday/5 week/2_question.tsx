// Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?


// users.length - верно

import React, {useState} from 'react';
import ReactDOM from 'react-dom';


export function FiveWeekTwoQuestion() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string, i: number) => <li key={i}>{user}</li>

     const usersList = (users.length === 0)
        ? <p>List is empty</p>
        :  <ul>
            { users.map(getUser)}
           </ul>

    return (
        <main>
            <h2>2 вопрос</h2>
            <button onClick={()=>setUsers([])}>Clear list</button>
            <h4>User list:</h4>
                {usersList}
                <h4>Ответ: users.length</h4>
        </main>
    )
}
