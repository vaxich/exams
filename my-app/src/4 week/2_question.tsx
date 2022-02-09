import React, {useState} from 'react';
// Что надо написать вместо xxx, чтобы код работал?
// ()=> {props.deleteUser(props.id)}
type UserType = {
        id: number
        name: string
        age: number
    }

type UserPropsType = UserType & {
        deleteUser: (id: number) => void
    }

function User(props: UserPropsType) {
        const deleteUser = () => props.deleteUser(props.id)
        return (
                <li>
                    <button onClick={()=> {props.deleteUser(props.id)}}>Delete</button>
                User {props.name}: {props.age} y.o.
            </li>
        )
    }

export function FourWeekTwoQuestion() {
        const data: Array<UserType> = [
                {id: 1, name: "Bob", age: 25},
                {id: 2, name: "Alex", age: 28},
                {id: 3, name: "Ann", age: 23},
                {id: 4, name: "John", age: 30},
            ]
        const [users, setUsers] = useState<Array<UserType>>(data)
        const deleteUser = (userID: number) => {
                const updatedUsers = users.filter(u => u.id !== userID)
                setUsers(updatedUsers)
            }
        return (
                <main>
                    <h2>2 вопрос</h2>
                    <h4>User list:</h4>
            <ul>
                {users.map(u => <User
                    key={u.id}
                    {...u}
                    deleteUser={deleteUser}
                />)}
            </ul>
                    <h4>Ответ: в файле</h4>
        </main>
    )
}



