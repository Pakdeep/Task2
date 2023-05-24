import { ADD_NOTE, ADD_SUBNOTE, FETCH_NOTES, REMOVE_NOTE, UPDATE_NOTE } from "../actions";
import { FetchNotes } from "../noteTypes";
import { toast } from "react-toastify";

const initState: FetchNotes = {
  notes: [{
    title: "", 
    description: "",
    subNotes: []
  // },{
  //   title: "note 2", 
  //   description: "note 2 desc",
  //   subNotes: [{title:"subnote 2",description:"subnote 2 desc"}]
  // },{
  //   title: "note 3", 
  //   description: "note 3 desc",
  //   subNotes: [{title:"subnote 3",description:"subnote 3 desc"}]
  // },{
  //   title: "note 4", 
  //   description: "note 4desc",
  //   subNotes: [{title:"subnote 4",description:"subnote 4 desc"}]
  // 
},
]
}
const noteReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ADD_NOTE:
      toast.success("Note Added Successfully..");
      return { ...state, notes: [...state.notes, action.payload] };
    case FETCH_NOTES:
      return { ...state, notes: [...state.notes, action.payload] };
    case ADD_SUBNOTE:
      toast.success("Sub Note Added Successfully..");
      // return { ...state, notes: [...state.notes,{...notes.subNotes,action.payload}]};
      return state

    case REMOVE_NOTE:
      toast.success("Note Removed Successfully..");
      const remainingNotes = (state.notes).filter(note => {
        return note.title !== action.payload
      })   
      return { ...state, notes:remainingNotes};


    case UPDATE_NOTE:
      // toast.success("Note Updated Successfully..") ;

      return state;

    default:
      return state;
  }
};

export default noteReducer;