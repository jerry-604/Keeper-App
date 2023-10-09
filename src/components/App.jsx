import React, { useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
// import notes from '../notes'
import TextArea from "./TextArea";
function App() {
    const [notes, addNote] = useState([])
    function appendNote(content) {
        content.title && content.content && addNote((prev) => ([...prev, content]))
        content.title === '' && alert('Add title');
        content.content === '' && alert('Add content'); 
    }
    function deleteNote(id) {
        addNote((prev) => {
            return prev.filter((note, index) => index !== id)
        })
    }
    return (
        <div>
            <Header />
            <TextArea renderNote={appendNote} />
            {notes.map((note, index) => (
                <Note {...note} key={index} id={index} deleteNote={deleteNote} />
            ))}
            <Footer />
        </div>
    )
}
export default App