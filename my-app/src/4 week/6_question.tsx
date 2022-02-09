import React, {useState, MouseEvent, ChangeEvent} from 'react';
// Что надо написать вместо ххх, чтобы инпут был контролируемым?
// не знаю


export function FourWeeSixQuestion() {
        const [userName, setUserName] = useState<string>("")
        return (
                <div>
                    <h2>6 вопрос</h2>
                    <p>{userName}</p>
            <input
                // xxx
                onChange={(e) => setUserName(e.currentTarget.value)}
            />
                    <h4>Ответ: не знаю </h4>
        </div>
    )
}



