import { NoteType } from "../noteTypes"


export const addNote = (note: NoteType):any => {
    return ({
        type:"ADD_NOTE",
        payload:note
    })
} 