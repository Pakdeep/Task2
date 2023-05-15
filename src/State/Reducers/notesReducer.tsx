
import { FetchNotes } from "../noteTypes";



const initState: FetchNotes = {notes:[
    {
        title: "Note1",
        description: "This is Note1's note"
    },
    {
        title: "Note2",
        description: "This is Note2's note"
    },
    {
        title: "Note3",
        description: "This is Note3's note"
    },
    {
        title: "Note4",
        description: "This is Note4's note"
    },
    {
        title: "Note5",
        description: "This is Note5's note"
    }
]}


const notesReducer = (state = initState) => {
    return state;

}
export default notesReducer;