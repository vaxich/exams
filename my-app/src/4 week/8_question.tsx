import React, {useState, MouseEvent, ChangeEvent} from 'react';
// Что надо написать вместо ххх,
// чтобы при потере инпутом фокуса добавлялась заметка?
// onBlur



export function FourWeekEightQuestion() {
        const [newNote, setNewNote] = useState<string>("")
        const [notes, setNotes] = useState<Array<string>>([])
        const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
                 setNewNote(e.currentTarget.value)
        const addNote = () => {
                setNotes([newNote, ...notes])
                setNewNote("")
            }
        return (
                <div>
                    <h2>8 вопрос</h2>
                    <textarea
                    value={newNote}
                    onChange={onChangeHandler}
                    onBlur = {addNote}
                />
                <h4>Notes:</h4>
            <div>
                {notes.map((n,i )=> <p key={i}>{n}</p>)}
            </div>
                    <h4>Ответ: onBlur </h4>
        </div>
    )
}



