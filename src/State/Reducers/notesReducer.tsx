
import { FetchNotes } from "../noteTypes";

const initState: FetchNotes = {
  notes: [
    {
      title: "Note1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia minus exLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia minus exLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia minus ex quisquam eligendi esse eveniet accusamus nemo provident hic aspernatur consequatur totam nostrum? Aspernatur nemo officiis unde quisquam inventore?",
      // subNotes: [
      //   {
      //     title: "Note1 subnote",
      //     description: "This is Note1's sub note"
      //   }, {
      //     title: "Note1 subnote",
      //     description: "This is Note1's sub note"
      //   }
      // ]
    }, 
    // {
    //   title: "Note1",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia minus exLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia minus exLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia minus ex quisquam eligendi esse eveniet accusamus nemo provident hic aspernatur consequatur totam nostrum? Aspernatur nemo officiis unde quisquam inventore?",
    //   // subNotes: [{
    //   //   title: "Note1 subnote",
    //   //   description: "This is Note1's sub note"
    //   // },]
    // }, {
    //   title: "Note1",
    //   description: "Lorem ipsum dolor sit amet  totam nostrum? Aspernatur nemo officiis unde quisquam inventore?",
    //   // subNotes: []

    // }, {
    //   title: "Note1",
    //   description: "Lorem ipsum dolor sit amet consectetur ur adipisicing elit. Placeat, officia minus exLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia minus ex quisquam eligendi esse eveniet accusamus nemo provident hic aspernatur consequatur totam nostrum? Aspernatur nemo officiis unde quisquam inventore?",
    //   // subNotes: [{
    //   //   title: "Note1 subnote",
    //   //   description: "This is Note1's sub note"
    //   // },]
    // }, {
    //   title: "Note1",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia misicing elit. Placeat, officia minus exLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia minus ex quisquam eligendi esse eveniet accusamus nemo provident hic aspernatur consequatur totam nostrum? Aspernatur nemo officiis unde quisquam inventore?",
    //   // subNotes: []
    // }, {
    //   title: "Note1",
    //   description: "Lorem ipsum dolor sit amet consectedolor sit amet consectetur adipisicing elit. Placeat, officia minus exLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia minus ex quisquam eligendi esse eveniet accusamus nemo provident hic aspernatur consequatur totam nostrum? Aspernatur nemo officiis unde quisquam inventore?",
    //   // subNotes: []
    // },
  ],
  subNotes: [
    // {
    //   title: "Note1 subnote",
    //   description: "This is Note1's sub note"
    // }, {
    //   title: "Note1 subnote",
    //   description: "This is Note1's sub note"
    // }
  ]
}

const noteReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case "ADD_SUBNOTE": {
      return { ...state, subNotes: [...state.subNotes, action.payload] };
    }

    case "REMOVE_NOTE": {
      return state;
    }
    case "UPDATE_NOTE": {
      return state;
    }
    default:
      return state;
  }
};

export default noteReducer;