import React, {useState} from 'react';
// Что надо написать вместо XXX, чтобы код работал?
// state

type UserType = {
        id: number
       name: string
       age: number
    }

export function User(props: UserType) {
        return (
                <li>User {props.name}: {props.age} y.o.</li>
        )
    }

export function UsersList() {
        const state = [
                {id: 1, name: "Bob", age: 34},
                {id: 2, name: "Alex", age: 25},
                {id: 3, name: "Ann", age: 30},
                {id: 4, name: "John", age: 23},
            ]
        const users = [
                {id: 1, userName: "Bob", age: 34},
                {id: 2, userName: "Alex", age: 25},
                {id: 3, userName: "Ann", age: 30},
                {id: 4, userName: "John", age: 23},
           ]

        const [usersList, setUsersList] = useState<Array<UserType>>(state)
        return (
                <main>
                    <h2> 10 вопрос</h2>
                    <h5>User list:</h5>
                <p>Тут будет список пользователей</p>
                    <h4>ответ: state</h4>
            </main>
        )
    }



