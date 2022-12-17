import React, { useState } from "react";

function TextArea(props) {
    const [notepad, setNotepad] = useState({
        title: '',
        content: ''
    })
    function updateNotePad(event) {
        const { name, value } = event.target
        setNotepad((prev) => ({ ...prev, [name]: value }))
    }

    function submitNote(event) {
        event.preventDefault()
        notepad.title && notepad.content && props.renderNote(notepad)
        notepad.title === '' || notepad.content === '' ? alert('Add content') : setNotepad({
            title: '',
            content: ''
        })
    }
    return (
        <div>
            <form onSubmit={submitNote} className="create-note">
                <input name="title" placeholder="Title" onChange={updateNotePad} value={notepad.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={updateNotePad} value={notepad.content} />
                <button >Add</button>
            </form>
        </div>
    );
}

export default TextArea;