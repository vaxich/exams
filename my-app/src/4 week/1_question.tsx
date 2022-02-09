import React, {useState} from 'react';
// Что надо написать вместо xxx, чтобы код работал?
// props.id

type UserType = {
        id: number
        name: string
        age: number
    }

type UserPropsType = UserType & {
        deleteUser: (id: number) => void
    }

function User(props: UserPropsType) {
        return (
                <li>
                    <button onClick={() => props.deleteUser(props.id)}>x</button>
                User {props.name}: {props.age} y.o.
            </li>
        )
    }

export function FourWeekOneQuestion() {
        const data: Array<UserType> = [
                {id: 1, name: "Bob", age: 25},
                {id: 2, name: "Alex", age: 28},
                {id: 3, name: "Ann", age: 23},
                {id: 4, name: "John", age: 30},
            ]
        const [users, setUsers] = useState<Array<UserType>>(data)
        const deleteUser = (userID: number) => {
                const filteredUsers = users.filter(u => u.id !== userID)
                setUsers(filteredUsers)
            }
        return (
                <main>
                    <h2>1 вопрос</h2>
                    <h4>User list:</h4>
            <ul>
                {users.map(u => <User
                    key={u.id}
                    {...u}
                    deleteUser={deleteUser}
                />)}
            </ul>
                    <h4>Ответ: props.id</h4>
        </main>
    )
}



