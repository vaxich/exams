import React, {useState} from 'react';
// Что надо написать вместо xxx, чтобы код работал?
// filter
type UserType = {
        id: number
        name: string
        age: number
    }

function User(props: UserType) {
        return (
                <li>User {props.name}: {props.age} y.o.</li>
    )
}

export function ThreeWeekThreeQuestion() {
    const data: Array<UserType> = [
        {id: 1, name: "Bob", age: 25},
        {id: 2, name: "Alex", age: 28},
        {id: 3, name: "Ann", age: 23},
        {id: 4, name: "John", age: 30},
    ]
    const [users, setUsers] = useState<Array<UserType>>(data)
    // Пользователи старше 25 лет:
     const olderThen25Users = users.filter(u => u.age > 25)
    return (
        <main>
            <h2>3 вопрос</h2>
            <h4>User list:</h4>
            <ul>
                { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
            </ul>
            <h4>ответ: filter</h4>
        </main>
    )
}







