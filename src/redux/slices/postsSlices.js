
import { createSlice } from "@reduxjs/toolkit";

function gettime(){
const initialTime = new Date() ;
let timeis="" ;
if(initialTime.getDate()<10){
  timeis+="0"
}
 timeis += initialTime.getDate()+" "+  initialTime.toLocaleString('default',{month:'short'}) +" "+ initialTime.getFullYear()+" " 
if (initialTime.getHours()<10) {
  timeis+="0"
}
timeis= timeis+ initialTime.getHours()+":" ;

if (initialTime.getMinutes()<10) {
  timeis+="0"
}
timeis= timeis+ initialTime.getMinutes()+":" ;

if (initialTime.getSeconds()<10) {
  timeis+="0"
}
timeis+= initialTime.getSeconds() ;


return timeis
}
const initialStateO = [{
  id:4,title:"Indian Dances",
  description:"India is a country of ‘unity in diversity’.\n There are many types of forms in dance which classified as folk or classical which come from different parts of country, and they represent the cultural background.\n Basically there are eight dance forms, referred to as Indian dance music and the Hindi Sanskrit word ‘Natyashashtra’.",
  timestamp:gettime()
},
  {
    id:3,title:"Fasting",
    description:"Fasting is an important part of Indian culture.\nIn Hindi language, Fast is known as Vrats or Upvas. \nPeople usually take fast to show their sincerity or giving thanks to the Gods and Goddesses. \nThey observe fast on various religious occasions and also some people like to observe fast on different days of a week in favour of special God or Goddess connected with that particular day. \nThe idea behind this is to strengthen the body and punishing yourself for cleansing the sins by taking fast.",
    timestamp:gettime()
  },
  {id:2 ,title:"Indian Festivals", 
  description:"India has lot of festivals because diverse number of religions and groups like, Muslims celebrate Eid, Christians celebrate Christmas and Good Friday, Sikhs celebrate Baisakhi famous for harvesting of crop, the Prakash Purabs of Guruji's and the Hindus have Diwali, Holi, Makar Sakranti,Jains have Mahavir Jayanti, Buddhists celebrate the Buddha’s birthday on Buddha Poornima and many more. \nAll these religions and festivals have their own values and we usually celebrate by giving holiday in our book.",
  timestamp:gettime()},
  {
    id:1,title:"Joint Families",
    description:"In India, the concept of combined family or joint family is universal. \nFamilies used to live together and they still live. \nThis is because of the tackiness behavior of the Indian society, and it is also said to be helpful in managing standards and stress.",
    timestamp: gettime()
  }
]

export const postsSlices = createSlice({
  name: "posts",
  initialState: initialStateO,
  reducers:
        {
          addPost:(state,action)=>{
            const {title,description} = action.payload ;
          const updid = state.length > 0 ? state[0].id : 0 ;
          const oobj ={
            id: updid+1 ,
            title: title,
            description: description,
            timestamp: gettime()
          }
          state.unshift(oobj);
        },
        deletePost:(state,action)=>{
         return state.filter((item)=>item.id!==action.payload)
        },
        editPost:(state,action)=>{
          const { id, newDescription } = action.payload;

          // Finding the post with the given id and updating its description
          const postToEdit = state.find(post => post.id === id);
    
          if (postToEdit && (postToEdit.description!==newDescription)) {
            postToEdit.description = newDescription;
          }
        }
      }
})
export const {addPost,deletePost,editPost} = postsSlices.actions;
export default postsSlices.reducer;
