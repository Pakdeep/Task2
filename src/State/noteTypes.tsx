// export interface FetchNotes {
//     notes: 
//       {
//         title: string,
//         description: string,
//         subNotes:{
//         title: string,
//         description: string
//       }[]
//       }[],  
//   }
  export interface FetchNotes {
    notes: 
      {
        title: string,
        description: string, 
      }[],  
      subNotes:{
        title: string,
        description: string
      }[]
  }
  export interface NoteType{
    
        title: string,
        description: string
  }