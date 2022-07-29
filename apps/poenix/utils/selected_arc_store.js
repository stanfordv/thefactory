import { createState } from '@hookstate/core'

 const selected_arc = createState({
     arcID: "",
     sourceID: "_",
     destID: ""
 }) 

 export default selected_arc