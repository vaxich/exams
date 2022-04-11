// Что надо вставить вместо XXX, чтобы код работал нормально?


//password.length - верно???

import React, {useState} from 'react';
import ReactDOM from 'react-dom';


export function FiveWeekThreeQuestion() {
    const [password, setPassword] = useState<string>("")
    return (
        <main>
            <h2>3 вопрос</h2>
            <p>Your password must have more than 8 charters!</p>
            <input
                placeholder={"Enter your password"}
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
                type={"password"}
            />
            {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
            <h4>Ответ: password.length</h4>
        </main>
    )
}
