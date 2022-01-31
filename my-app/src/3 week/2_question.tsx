import React, {useState} from 'react';
// Что надо написать вместо xxx, чтобы код работал?
// u
type UserType = {
        id: number
        name: string
        age: number
    }

function User(props: UserType) {
        return (
                <li>Student {props.name}: {props.age} y.o.</li>
    )
}

export function ThreeWeekTwoQuestion() {
    const data: Array<UserType> = [
        {id: 1, name: "Bob", age: 34},
        {id: 2, name: "Alex", age: 29},
        {id: 3, name: "Ann", age: 25},
        {id: 4, name: "John", age: 36},
    ]
    const [users, setUsers] = useState<Array<UserType>>(data)
    return (
        <main>
            <h2>2 вопрос</h2>
            <h4>User list:</h4>
            <ul>
                { users.map(u => <User key={u.id} {...u } />) }
            </ul>
            <h4>ответ: u</h4>
        </main>
    )
}







