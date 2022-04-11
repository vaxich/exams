import React, {useState, MouseEvent, ChangeEvent} from 'react';
// Что надо написать вместо ххх, чтобы инпут был контролируемым?
// value={userName}


export function FourWeeSixQuestion() {
        const [userName, setUserName] = useState<string>("")
        return (
                <div>
                    <h2>6 вопрос</h2>
                    <p>{userName}</p>
            <input
                // xxx
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
            />
                    <h4>Ответ: в файле </h4>
        </div>
    )
}



