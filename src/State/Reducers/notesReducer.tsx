import { FetchNotes } from "../noteTypes";
import { toast } from "react-toastify";

const initState: FetchNotes = {
  notes: [ 
  ],
  subNotes: [    
  ]
}

const noteReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "ADD_NOTE":
      toast.success("Note Added Successfully..") ;      
      return { ...state, notes: [...state.notes, action.payload] };
    
    case "ADD_SUBNOTE": 
    toast.success("Sub Note Added Successfully..") ;    
      return { ...state, subNotes: [...state.subNotes, action.payload] };
    

    case "REMOVE_NOTE": 
    toast.success("Note Removed Successfully..") ;
      return state;
    
    case "UPDATE_NOTE": 
    // toast.success("Note Updated Successfully..") ;

      return state;
    
    default:
      return state;
  }
};

export default noteReducer;