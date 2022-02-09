import React, {useState, MouseEvent, ChangeEvent} from 'react';
// Что надо написать вместо ххх,
// чтобы при клике список заметок очищался?

// () => setNotes([])


export function FourWeekNineQuestion() {
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
                    <h2>9 вопрос</h2>
                    <textarea
                    value={newNote}
                    onChange={onChangeHandler}
                    onBlur={addNote}
                />
                <div>
                    <button
                         onClick={ () => setNotes([])}
                    >Clear notes list</button>
                </div>
                <h4>Notes:</h4>
            <div>
                {notes.map(n => <p>{n}</p>)}
            </div>
                    <h4>Ответ:  в файле</h4>
        </div>
    )
}



